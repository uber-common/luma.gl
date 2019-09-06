import GL from '@luma.gl/constants';
import {getPassthroughFS} from '@luma.gl/shadertools';
import BufferTransform from './buffer-transform';
import TextureTransform from './texture-transform';

import {isWebGL2, getShaderVersion} from '@luma.gl/webgl';
import {assert, isObjectEmpty} from '../../utils';
import Model from '../model';

// takes source and target buffers/textures and setsup the pipeline
export default class Transform {
  static isSupported(gl) {
    // TODO : differentiate writting to buffer vs not
    return isWebGL2(gl);
  }

  constructor(gl, props = {}) {
    this.gl = gl;
    this.model = null;
    this.elementCount = 0;
    this.bufferTransform = null;
    this.textureTransform = null;
    this.elementIDBuffer = null;
    this.initialize(props);
    Object.seal(this);
  }

  // Delete owned resources.
  delete() {
    this.model.delete();
    /* eslint-disable no-unused-expressions */
    this.bufferTransform && this.bufferTransform.delete();
    this.textureTransform && this.textureTransform.delete();
    /* eslint-enable no-unused-expressions */
  }

  // Run one transform loop.
  run(opts = {}) {
    const {clearRenderTarget = true} = opts;

    const updatedOpts = this.updateDrawOptions(opts);

    if (clearRenderTarget && updatedOpts.framebuffer) {
      updatedOpts.framebuffer.clear({color: true});
    }

    this.model.transform(updatedOpts);
  }

  // swap resources if a map is provided
  swap() {
    let swapped = false;
    const resourceTransforms = [this.bufferTransform, this.textureTransform].filter(Boolean);
    for (const resourceTransform of resourceTransforms) {
      swapped = swapped || resourceTransform.swap();
    }
    assert(swapped, 'Nothing to swap');
  }

  // Return Buffer object for given varying name.
  getBuffer(varyingName = null) {
    return this.bufferTransform && this.bufferTransform.getBuffer(varyingName);
  }

  // Return data either from Buffer or from Texture
  getData(opts = {}) {
    const resourceTransforms = [this.bufferTransform, this.textureTransform].filter(Boolean);
    for (const resourceTransform of resourceTransforms) {
      const data = resourceTransform.getData(opts);
      if (data) {
        return data;
      }
    }
    return null;
  }

  // Return framebuffer object if rendering to textures
  getFramebuffer() {
    return this.textureTransform && this.textureTransform.getFramebuffer();
  }

  // Update some or all buffer/texture bindings.
  update(opts = {}) {
    if (opts.elementCount) {
      this.model.setVertexCount(opts.elementCount);
    }
    const resourceTransforms = [this.bufferTransform, this.textureTransform].filter(Boolean);
    for (const resourceTransform of resourceTransforms) {
      resourceTransform.update(opts);
    }
  }

  // Private

  initialize(props = {}) {
    const {gl} = this;
    this.buildResourceTransforms(gl, props);

    props = this.getModelProps(props);
    this.model = new Model(
      gl,
      Object.assign({}, props, {
        fs: props.fs || getPassthroughFS({version: getShaderVersion(props.vs)}),
        id: props.id || 'transform-model',
        drawMode: props.drawMode || GL.POINTS,
        vertexCount: props.elementCount
      })
    );

    /* eslint-disable no-unused-expressions */
    this.bufferTransform && this.bufferTransform.setupResources({model: this.model});
    /* eslint-enable no-unused-expressions */
  }

  getModelProps(props) {
    let updatedProps = Object.assign({}, props);
    const resourceTransforms = [this.bufferTransform, this.textureTransform].filter(Boolean);
    for (const resourceTransform of resourceTransforms) {
      updatedProps = resourceTransform.getModelProps(updatedProps);
    }
    return updatedProps;
  }

  buildResourceTransforms(gl, props) {
    if (this.canCreateBufferTransform(props)) {
      this.bufferTransform = new BufferTransform(gl, props);
    }
    if (this.canCreateTextureTransform(props)) {
      this.textureTransform = new TextureTransform(gl, props);
    }
    assert(
      this.bufferTransform || this.textureTransform,
      'must provide source/feedback buffers or source/target textures'
    );
  }

  canCreateBufferTransform(props) {
    if (
      !isObjectEmpty(props.sourceBuffers) ||
      !isObjectEmpty(props.feedbackBuffers) ||
      (props.varyings && props.varyings.length > 0)
    ) {
      return true;
    }
    return false;
  }

  canCreateTextureTransform(props) {
    if (!isObjectEmpty(props._sourceTextures)) {
      return true;
    }
    if (props._targetTexture || props._targetTextureVarying) {
      return true;
    }

    return false;
  }

  updateDrawOptions(opts) {
    let updatedOpts = Object.assign({}, opts);
    const resourceTransforms = [this.bufferTransform, this.textureTransform].filter(Boolean);
    for (const resourceTransform of resourceTransforms) {
      updatedOpts = Object.assign(updatedOpts, resourceTransform.getDrawOptions(updatedOpts));
    }
    return updatedOpts;
  }
}
