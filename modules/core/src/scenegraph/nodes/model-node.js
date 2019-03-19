import {Model} from '@luma.gl/core';
import ScenegraphNode from './scenegraph-node';

export default class ModelNode extends ScenegraphNode {
  constructor(gl, props = {}) {
    super(props);

    // pverride callbacks to make sure we call them with this
    this.onBeforeRender = null;
    this.AfterRender = null;

    // Create new Model or used supplied Model
    if (gl instanceof Model) {
      this.model = gl;
    } else {
      this.model = new Model(gl, props);
    }

    this._setNodelNodeProps(props);
  }

  setProps(props) {
    super.setProps(props);
    this._setNodelNodeProps(props);
  }

  delete() {
    this.model.delete();
  }

  // Forward node methods
  draw(...args) {
    this.model.draw(...args);
    return this;
  }

  setUniforms(...args) {
    this.model.setUniforms(...args);
    return this;
  }

  setAttributes(...args) {
    this.model.setAttributes(...args);
  }

  updateModuleSettings(...args) {
    this.model.updateModuleSettings(...args);
    return this;
  }

  // PRIVATE

  _setNodelNodeProps(props) {
    this.model.setProps(props);
  }
}