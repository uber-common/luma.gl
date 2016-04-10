// A scenegraph object node
/* eslint-disable guard-for-in */

// Define some locals
import {MAX_TEXTURES} from './config';
import Object3D from './scenegraph/object-3d';
import {Buffer, draw} from './webgl';
import {splat} from './utils';
import log from './log';
import assert from 'assert';

// TODO - experimental, not yet used
export class Material {
  constructor({shininess = 0, reflection = 0, refraction = 0} = {}) {
    this.shininess = shininess;
    this.reflection = reflection;
    this.refraction = refraction;
  }
}

// Model abstract O3D Class
export default class Model extends Object3D {

  /* eslint-disable max-statements  */
  /* eslint-disable complexity  */
  constructor({
    program,
    geometry,
    material = null, textures = [],
    // Enable instanced rendering (requires shader support and extra attributes)
    instanced = false, instanceCount = 0,
    // Picking
    pickable = false, pick = null,
    // Extra uniforms and attributes (beyond geometry, material, camera)
    uniforms = {},
    attributes = {},
    render = null, onBeforeRender = null, onAfterRender = null,
    ...opts
  } = {}) {
    // assert(program || program instanceof Program);
    assert(program);
    assert(geometry);

    super(opts);

    // set a custom program per o3d
    this.program = program;
    this.geometry = geometry;
    this.material = material;

    // instanced rendering
    this.instanced = instanced;
    this.instanceCount = instanceCount;

    // picking options
    this.pickable = Boolean(pickable);
    this.pick = pick || (() => false);

    // extra uniforms and attribute descriptors
    this.uniforms = uniforms;
    this.attributes = attributes;

    // override the render method, before and after render callbacks
    this.render = render || this.render;
    this.onBeforeRender = onBeforeRender || this.onBeforeRender;
    this.onAfterRender = onAfterRender || this.onAfterRender;

    this.buffers = {};
    this.userData = {};

    this.textures = splat(textures);

    // TODO - remove?
    this.dynamic = false;

    Object.seal(this);
  }
  /* eslint-enable max-statements */
  /* eslint-enable complexity */

  get hash() {
    return this.id + ' ' + this.$pickingIndex;
  }

  setInstanceCount(instanceCount) {
    assert(instanceCount !== undefined);
    this.instanceCount = instanceCount;
    return this;
  }

  getInstanceCount() {
    return this.instanceCount;
  }

  getVertexCount() {
    return this.geometry.getVertexCount();
  }

  isIndexed() {
    return Boolean(this.geometry.indices);
  }

  getProgram() {
    return this.program;
  }

  isPickable() {
    return this.pickable;
  }

  setPickable(pickable = true) {
    this.pickable = Boolean(pickable);
    return this;
  }

  getAttributes() {
    return this.attributes;
  }

  setAttributes(attributes = {}) {
    Object.assign(this.attributes, attributes);
    return this;
  }

  getUniforms() {
    return this.uniforms;
  }

  setUniforms(uniforms = {}) {
    this._checkUniforms(uniforms);
    Object.assign(this.uniforms, uniforms);
    return this;
  }

  onBeforeRender() {
    const {program, attributes} = this;
    program.use();
    this.setAttributes(attributes);
    return this;
  }

  render(gl, {camera, viewMatrix}) {
    // Camera exposes uniforms that can be used directly in shaders
    this.setUniforms(camera.getUniforms());
    this.setUniforms(this.getCoordinateUniforms(viewMatrix));

    let table = this.getAttributesTable(this.geometry.attributes, {
      header: `Attributes for ${this.geometry.id}`
    });
    table = this.getAttributesTable(this.attributes, {table});
    log.table(3, table);

    table = this.getUniformsTable(this.uniforms, {
      header: `Uniforms for ${this.geometry.id}`
    });
    log.table(3, table);

    this.setProgramState();

    const {geometry, instanced, instanceCount} = this;
    const {drawMode} = geometry;
    draw(gl, {
      drawMode,
      vertexCount: this.getVertexCount(),
      indexed: this.isIndexed(),
      instanced,
      instanceCount
    });
  }

  onAfterRender() {
    const {program, attributes} = this;
    program.use();
    this.unsetAttributes(attributes);
    return this;
  }

  setProgramState() {
    const {program} = this;
    program.setUniforms(this.uniforms);
    this.enableAttributes(this.attributes);
    this.enableAttributes(this.geometry.attributes);
    this.setTextures(program);

    // this.setVertices(program);
    // this.setColors(program);
    // this.setPickingColors(program);
    // this.setNormals(program);
    // this.setTexCoords(program);
    // this.setIndices(program);
    return this;
  }

  unsetProgramState() {
    const {program} = this;
    const gl = program.gl;

    // unbind the array and element buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    var attributes = program.attributes;
    for (var name in attributes) {
      gl.disableVertexAttribArray(attributes[name]);
    }
    return this;
  }

  // Makes sure buffers are created for all attributes
  // and that the program is updated with those buffers
  // TODO - do we need the separation between "attributes" and "buffers"
  //  couldn't apps just create buffers directly?
  enableAttributes(attributes) {
    assert(attributes);
    const {program} = this;
    for (const attributeName of Object.keys(attributes)) {
      const attribute = attributes[attributeName];
      const bufferOpts = {
        attribute: attributeName,
        data: attribute.value,
        size: attribute.size,
        instanced: attribute.instanced ? 1 : 0,
        bufferType: attribute.bufferType || attributeName === 'indices' ?
          program.gl.ELEMENT_ARRAY_BUFFER : program.gl.ARRAY_BUFFER,
        drawMode: attribute.drawMode || program.gl.STATIC_DRAW
      };
      if (!this.buffers[attributeName]) {
        this.buffers[attributeName] = new Buffer(program.gl, bufferOpts);
      } else {
        this.buffers[attributeName].update(bufferOpts);
      }
      program.setBuffer(this.buffers[attributeName]);
    }
    return this;
  }

  unsetAttributes(attributes) {
    assert(attributes);
    const {program} = this;
    for (const attributeName of Object.keys(attributes)) {
      assert(this.buffers[attributeName]);
      program.unsetBuffer(this.buffers[attributeName]);
    }
    return this;
  }

  setTextures(force = false) {
    const {program} = this;
    this.textures = this.textures ? splat(this.textures) : [];
    let tex2D = 0;
    let texCube = 0;
    const mtexs = MAX_TEXTURES;
    for (let i = 0, texs = this.textures, l = texs.length; i < mtexs; i++) {
      if (i < l) {
        // rye TODO: update this when TextureCube is implemented.
        // const isCube = app.textureMemo[texs[i]].isCube;
        // if (isCube) {
        //   program.setUniform('hasTextureCube' + (i + 1), true);
        //   program.setTexture(texs[i], gl['TEXTURE' + i]);
        //   program.setUniform('samplerCube' + (texCube + 1), i);
        //   texCube++;
        // } else {
        program.setUniform('hasTexture' + (i + 1), true);
        program.setTexture(texs[i], tex2D);
        program.setUniform('sampler' + (tex2D + 1), i);
        tex2D++;
        // }
      } else {
        program.setUniform('hasTextureCube' + (i + 1), false);
        program.setUniform('hasTexture' + (i + 1), false);
        program.setUniform('sampler' + (++tex2D), i);
        program.setUniform('samplerCube' + (++texCube), i);
      }
    }
    return this;
  }

  // TODO - Move into uniforms manager
  _checkUniforms(uniformMap) {
    for (const key in uniformMap) {
      const value = uniformMap[key];
      this._checkUniformValue(key, value);
    }
  }

  _checkUniformValue(uniform, value) {
    function isNumber(v) {
      return !isNaN(v) && Number(v) === v && v !== undefined;
    }

    let ok = true;
    if (Array.isArray(value) || value instanceof Float32Array) {
      for (const element of value) {
        if (!isNumber(element)) {
          ok = false;
        }
      }
    } else if (!isNumber(value)) {
      ok = false;
    }
    if (!ok) {
      /* eslint-disable no-console */
      /* global console */
      // Value could be unprintable so write the object on console
      console.error(`${this.id} Bad uniform ${uniform}`, value);
      /* eslint-enable no-console */
      throw new Error(`${this.id} Bad uniform ${uniform}`);
    }
  }

  // Todo move to attributes manager
  getAttributesTable(attributes, {header = 'Attributes', table = null} = {}) {
    table = table || {[header]: {}};
    for (const attributeName in attributes) {
      const attribute = attributes[attributeName];
      table = table || {};
      table[attributeName] = {
        Name: attribute.value.constructor.name,
        Instanced: attribute.instanced,
        Verts: attribute.value.length / attribute.size,
        Size: attribute.size,
        Bytes: attribute.value.length * attribute.value.BYTES_PER_ELEMENT
      };
    }
    return table;
  }

  // TODO - Move to uniforms manager
  getUniformsTable(uniforms, {header = 'Uniforms', table = null} = {}) {
    table = table || {[header]: {}};
    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName];
      table[uniformName] = {
        Type: uniform,
        Value: uniform.toString()
      };
    }
    return table;
  }

  // TODO - remove
  /*
  setTexCoords(program) {
    if (!this.$texCoords) {
      return;
    }

    const gl = program.gl;
    const multi = this.$texCoords.constructor.name === 'Object';
    let tex;

    if (!this.buffers.texCoords) {
      if (multi) {
        this.buffers.texCoords = {};
        for (let i = 0, txs = this.textures, l = txs.length; i < l; i++) {
          tex = txs[i];
          this.buffers.texCoords['texCoord' + (i + 1)] = new Buffer(gl, {
            attribute: 'texCoord' + (i + 1),
            data: this.$texCoords[tex],
            size: 2
          });
        }
      } else {
        this.buffers.texCoords = new Buffer(gl, {
          attribute: 'texCoord1',
          data: this.$texCoords,
          size: 2
        });
      }
    } else if (this.dynamic) {
      if (multi) {
        for (let i = 0, txs = this.textures, l = txs.length; i < l; i++) {
          tex = txs[i];
          this.buffers.texCoords['texCoord' + (i + 1)].update({
            data: this.$texCoords[tex]
          });
        }
      } else {
        this.buffers.texCoords.update({
          data: this.$texCoords
        });
      }
    }

    if (multi) {
      for (let i = 0, txs = this.textures, l = txs.length; i < l; i++) {
        tex = txs[i];
        program.setBuffer(this.buffers.texCoords['texCoord' + (i + 1)]);
      }
    } else {
      program.setBuffer(this.buffers.texCoords);
    }
  }

  setVertices(program) {
    if (!this.$vertices) {
      return;
    }
    if (!this.buffers.position) {
      this.buffers.position = new Buffer(program.gl, {
        attribute: 'position',
        data: this.$vertices,
        size: 3
      });
    } else if (this.dynamic) {
      this.buffers.position.update({
        data: this.$vertices
      });
    }

    program.setBuffer(this.buffers.position);
  }

  setNormals(program) {
    if (!this.$normals) {
      return;
    }

    if (!this.buffers.normal) {
      this.buffers.normal = new Buffer(program.gl, {
        attribute: 'normal',
        data: this.$normals,
        size: 3
      });
    } else if (this.dynamic) {
      this.buffers.normal.update({
        data: this.$normals
      });
    }

    program.setBuffer(this.buffers.normal);
  }

  setIndices(program) {
    if (!this.$indices) {
      return;
    }

    const gl = program.gl;

    if (!this.buffers.indices) {
      this.buffers.indices = new Buffer(program.gl, {
        bufferType: gl.ELEMENT_ARRAY_BUFFER,
        drawMode: gl.STATIC_DRAW,
        data: this.$indices,
        size: 1
      });
    } else if (this.dynamic) {
      this.buffers.indices.update({
        data: this.$indices
      });
    }

    program.setBuffer(this.buffers.indices);
  }

  setPickingColors(program) {
    if (!this.$pickingColors) {
      return;
    }

    if (!this.buffers.pickingColors) {
      this.buffers.pickingColors = new Buffer(program.gl, {
        attribute: 'pickingColor',
        data: this.$pickingColors,
        size: 4
      });
    } else if (this.dynamic) {
      this.buffers.pickingColors.update({
        data: this.$pickingColors
      });
    }

    program.setBuffer(this.buffers.pickingColors);
  }

  setColors(program) {
    if (!this.$colors) {
      return;
    }

    if (!this.buffers.colors) {
      this.buffers.colors = new Buffer(program.gl, {
        attribute: 'color',
        data: this.$colors,
        size: 4
      });
    } else if (this.dynamic) {
      this.buffers.colors.update({
        data: this.$colors
      });
    }

    program.setBuffer(this.buffers.colors);
  }
  */
}
