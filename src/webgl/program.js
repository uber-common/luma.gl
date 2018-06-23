/* eslint-disable no-inline-comments */
import GL from '../constants';
import Resource from './resource';
import Texture from './texture';
import Framebuffer from './framebuffer';
import {parseUniformName, getUniformSetter} from './uniforms';
import {VertexShader, FragmentShader} from './shader';
import ProgramConfiguration from './program-configuration';
import {withParameters} from '../webgl-context/context-state';
import {assertWebGL2Context, isWebGL2} from '../webgl-utils';
import {getPrimitiveDrawMode} from '../webgl-utils/attribute-utils';
import {log, uid} from '../utils';
import assert from '../utils/assert';

const LOG_PROGRAM_PERF_PRIORITY = 4;

// const GL_INTERLEAVED_ATTRIBS = 0x8C8C;
const GL_SEPARATE_ATTRIBS = 0x8C8D;

export default class Program extends Resource {

  constructor(gl, opts = {}) {
    super(gl, opts);

    // For backwards compatibility, each program creates a vertex array.
    // It can (should) be overridden in draw.
    // this.vertexArray = null;

    // Experimental flag to avoid deleting Program object while it is cached
    this._isCached = false;

    this.initialize(opts);

    this.stubRemovedMethods('v6.0', [
      'Program.reset()',
      'Program.setVertexArray()',
      'Program.setAttributes()',
      'Program.setBuffers()',
      'Program.unsetBuffers()'
    ]);

    Object.seal(this);

    this._setId(opts.id);
  }

  initialize({vs, fs, defaultUniforms, varyings, bufferMode = GL_SEPARATE_ATTRIBS} = {}) {
    // Create shaders if needed
    this.vs = typeof vs === 'string' ? new VertexShader(this.gl, vs) : vs;
    this.fs = typeof fs === 'string' ? new FragmentShader(this.gl, fs) : fs;
    assert(this.vs instanceof VertexShader, 'Program: bad vertex shader');
    assert(this.fs instanceof FragmentShader, 'Program: bad fragment shader');

    this.defaultUniforms = defaultUniforms; // TODO - remove defaultUniforms

    // Setup varyings if supplied
    if (varyings) {
      assertWebGL2Context(this.gl);
      this.varyings = varyings;
      this.gl.transformFeedbackVaryings(this.handle, varyings, bufferMode);
    }

    this._compileAndLink();
    this._readUniformLocationsFromLinkedProgram();
    this.configuration = new ProgramConfiguration(this);

    return this;
  }

  delete(opts = {}) {
    if (this._isCached) {
      // This object is cached, do not delete
      return this;
    }
    return super.delete(opts);
  }

  // A good thing about webGL is that there are so many ways to draw things,
  // e.g. depending on whether data is indexed and/or isInstanced.
  // This function unifies those into a single call with simple parameters
  // that have sane defaults.
  draw({
    logPriority,
    drawMode = GL.TRIANGLES,
    vertexCount,
    offset = 0,
    start,
    end,
    isIndexed = false,
    indexType = GL.UNSIGNED_SHORT,
    isInstanced = false,
    instanceCount = 0,

    vertexArray = null, // VertexArray.getDefaultArray(this.gl),
    transformFeedback,
    framebuffer,
    uniforms = {},
    samplers = {},
    parameters = {}
  }) {
    if (logPriority !== undefined) {
      const fb = framebuffer ? framebuffer.id : 'default';
      const message =
        `Framebuffer=${fb}: mode=${drawMode} verts=${vertexCount} instances=${instanceCount}` +
        ` isIndexed=${isIndexed} isInstanced=${isInstanced}`;
      log.log(logPriority, message)();
    }

    this.gl.useProgram(this.handle);

    // TODO - move vertex array binding and transform feedback binding to withParameters?
    assert(vertexArray);

    vertexArray.bind(() => {

      this.setUniforms(uniforms, samplers);

      if (framebuffer !== undefined) {
        parameters = Object.assign({}, parameters, {framebuffer});
      }

      if (transformFeedback) {
        const primitiveMode = getPrimitiveDrawMode(drawMode);
        transformFeedback.begin(primitiveMode);
      }

      withParameters(this.gl, parameters,
        () => {
          // TODO - Use polyfilled WebGL2RenderingContext instead of ANGLE extension
          if (isIndexed && isInstanced) {
            this.gl.drawElementsInstanced(drawMode, vertexCount, indexType, offset, instanceCount);
          } else if (isIndexed && isWebGL2(this.gl) && !isNaN(start) && !isNaN(end)) {
            this.gl.drawElementsRange(drawMode, start, end, vertexCount, indexType, offset);
          } else if (isIndexed) {
            this.gl.drawElements(drawMode, vertexCount, indexType, offset);
          } else if (isInstanced) {
            this.gl.drawArraysInstanced(drawMode, offset, vertexCount, instanceCount);
          } else {
            this.gl.drawArrays(drawMode, offset, vertexCount);
          }
        }
      );

      if (transformFeedback) {
        transformFeedback.end();
      }

    });

    return this;
  }

  // Apply a set of uniform values to a program
  // Only uniforms actually present in the linked program will be updated.
  /* eslint-disable max-depth */
  setUniforms(uniforms, samplers = {}) {
    this.gl.useProgram(this.handle);

    for (const uniformName in uniforms) {
      let uniform = uniforms[uniformName];
      const uniformSetter = this._uniformSetters[uniformName];
      const sampler = samplers[uniformName];

      if (uniformSetter) {
        if (uniform instanceof Framebuffer) {
          uniform = uniform.texture;
        }
        if (uniform instanceof Texture) {
          if (uniformSetter.textureIndex === undefined) {
            uniformSetter.textureIndex = this._textureIndexCounter++;
          }

          // Bind texture to index
          const texture = uniform;
          const {textureIndex} = uniformSetter;

          texture.bind(textureIndex);

          // Bind a sampler (if supplied) to index
          if (sampler) {
            sampler.bind(textureIndex);
          }

          // Set the uniform sampler to the texture index
          uniformSetter(textureIndex);
        } else {
          // Just set the value
          uniformSetter(uniform);
        }
      }
    }

    return this;
  }

  // PRIVATE METHODS

  getConfiguration() {
    return this.configuration;
  }

  // RESOURCE METHODS

  _createHandle() {
    return this.gl.createProgram();
  }

  _deleteHandle() {
    this.gl.deleteProgram(this.handle);
  }

  // Extract opts needed to initialize a `Program` from an independently created WebGLProgram handle
  _getOptionsFromHandle(handle) {
    const shaderHandles = this.gl.getAttachedShaders(handle);
    const opts = {};
    for (const shaderHandle of shaderHandles) {
      const type = this.gl.getShaderParameter(this.handle, GL.SHADER_TYPE);
      switch (type) {
      case GL.VERTEX_SHADER:
        opts.vs = new VertexShader({handle: shaderHandle});
        break;
      case GL.FRAGMENT_SHADER:
        opts.fs = new FragmentShader({handle: shaderHandle});
        break;
      default:
      }
    }
    return opts;
  }

  _getParameter(pname) {
    return this.gl.getProgramParameter(this.handle, pname);
  }

  // If program is not named, name it after shader names
  // TODO - this.id will already have been initialized
  _setId(id) {
    if (!id) {
      const programName = this._getName();
      this.id = uid(programName);
    }
  }

  // Generate a default name for the program based on names of the shaders
  _getName() {
    let programName = this.vs.getName() || this.fs.getName();
    programName = programName.replace(/shader/i, '');
    programName = programName ? `${programName}-program` : 'program';
    return programName;
  }

  _compileAndLink() {
    const {gl} = this;
    gl.attachShader(this.handle, this.vs.handle);
    gl.attachShader(this.handle, this.fs.handle);
    log.time(LOG_PROGRAM_PERF_PRIORITY, `linkProgram for ${this._getName()}`)();
    gl.linkProgram(this.handle);
    log.timeEnd(LOG_PROGRAM_PERF_PRIORITY, `linkProgram for ${this._getName()}`)();

    // Avoid checking program linking error in production
    if (gl.debug || log.priority > 0) {
      gl.validateProgram(this.handle);
      const linked = gl.getProgramParameter(this.handle, gl.LINK_STATUS);
      if (!linked) {
        throw new Error(`Error linking: ${gl.getProgramInfoLog(this.handle)}`);
      }
    }
  }

  // query uniform locations and build name to setter map.
  _readUniformLocationsFromLinkedProgram() {
    const {gl} = this;
    this._uniformSetters = {};
    this._uniformCount = this.getUniformCount();
    for (let i = 0; i < this._uniformCount; i++) {
      const info = this.getUniformInfo(i);
      const parsedName = parseUniformName(info.name);
      const location = this.getUniformLocation(parsedName.name);
      this._uniformSetters[parsedName.name] =
        getUniformSetter(gl, location, info, parsedName.isArray);
    }
    this._textureIndexCounter = 0;
  }

  // TO BE REMOVED

  reset() {}

  use() {
    this.gl.useProgram(this.handle);
    return this;
  }

  // @return {Number} count (Locations are numeric indices)
  getUniformCount() {
    return this._getParameter(GL.ACTIVE_UNIFORMS);
  }

  getUniformInfo(index) {
    return this.gl.getActiveUniform(this.handle, index);
  }

  getUniformLocation(name) {
    return this.gl.getUniformLocation(this.handle, name);
  }

  getUniformValue(location) {
    return this.gl.getUniform(this.handle, location);
  }

  // Rretrieves information about active uniforms identifed by their indices (`uniformIndices`)
  // For valid `pname` values check :
  // https://
  // developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniforms
  getActiveUniforms(uniformIndices, pname) {
    return this.gl.getActiveUniforms(this.handle, uniformIndices, pname);
  }

  /* eslint-enable max-depth */

  /* TODO - Add stubs
  // Binds a uniform block (`blockIndex`) to a specific binding point (`blockBinding`)
  uniformBlockBinding(blockIndex, blockBinding) {
    assertWebGL2Context(this.gl);
    this.gl.uniformBlockBinding(this.handle, blockIndex, blockBinding);
  }

  //  UNIFORMS API

  // WebGL2
  // @param {GLuint} index
  // @return {WebGLActiveInfo} - object with {name, size, type}
  getVarying(program, index) {
    const result = this.gl.getTransformFeedbackVarying(program, index);
    return result;
  }

  // Retrieves the assigned color number binding for the user-defined varying
  // out variable name for program. program must have previously been linked.
  getFragDataLocation(varyingName) {
    assertWebGL2Context(this.gl);
    return this.gl.getFragDataLocation(this.handle, varyingName);
  }

  // @returns {WebGLShader[]} - array of attached WebGLShader objects
  getAttachedShaders() {
    return this.gl.getAttachedShaders(this.handle);
  }

  // Retrieves the index of a uniform block
  getUniformBlockIndex(blockName) {
    assertWebGL2Context(this.gl);
    return this.gl.getUniformBlockIndex(this.handle, blockName);
  }

  // Retrieves information about an active uniform block (`blockIndex`)
  // For valid `pname` values check :
  // https://
  // developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter
  getActiveUniformBlockParameter(blockIndex, pname) {
    assertWebGL2Context(this.gl);
    return this.gl.getActiveUniformBlockParameter(this.handle, blockIndex, pname);
  }

  // ATTRIBUTES API

  // Query number of attributes in current program's vertex shader
  //  (Locations are numeric indices)
  getAttributeCount() {
    return this._getParameter(GL.ACTIVE_ATTRIBUTES);
  }

  // Query location (index) assigned by shader linker to a named attribute (name per GLSL shader)
  getAttributeLocation(attributeName) {
    return this.gl.getAttribLocation(this.handle, attributeName);
  }

  // Queries an object with info about attribute at index "location"
  // @param {int} location - index of an attribute
  // returns {WebGLActiveInfo} - info about an active attribute, fields: {name, size, type}
  getAttributeInfo(location) {
    return this.gl.getActiveAttrib(this.handle, location);
  }
  */
}

// create uniform setters
// Map of uniform names to setter functions
export function getUniformDescriptors(gl, program) {
  const uniformDescriptors = {};
  const length = program.getUniformCount();
  for (let i = 0; i < length; i++) {
    const info = program.getUniformInfo(i);
    const location = program.getUniformLocation(info.name);
    const descriptor = getUniformSetter(gl, location, info);
    uniformDescriptors[descriptor.name] = descriptor;
  }
  return uniformDescriptors;
}

/*
// Get a map of buffer indices
export function getVaryingMap(varyings, bufferMode) {
  const varyingMap = {};
  let index = 0;
  assert(bufferMode === GL_SEPARATE_ATTRIBS || bufferMode === GL_INTERLEAVED_ATTRIBS);
  const indexIncrement = bufferMode === GL_SEPARATE_ATTRIBS ? 1 : 0;
  for (const varying of varyings) {
    varyingMap[varying] = index;
    index += indexIncrement;
  }
  return varyingMap;
}
*/