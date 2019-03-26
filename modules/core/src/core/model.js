import GL from '@luma.gl/constants';
import {Query, TransformFeedback} from '@luma.gl/webgl';
import {getBuffersFromGeometry} from './model-utils';
import BaseModel from './base-model';
// import {getDrawMode} from '../core/geometry';

// import {removeModel} from '../debug/seer-integration';
import {log, isObjectEmpty, assert} from '../utils';

const ERR_MODEL_PARAMS = 'Model needs drawMode and vertexCount';
const LOG_DRAW_PRIORITY = 2;

export default class Model extends BaseModel {
  /* eslint-disable max-statements  */
  /* eslint-disable complexity  */
  initialize(props = {}) {
    super.initialize(props);

    this.drawMode = props.drawMode !== undefined ? props.drawMode : GL.TRIANGLES;
    this.vertexCount = props.vertexCount || 0;

    // geometry might have set drawMode and vertexCount
    this.isInstanced = props.isInstanced || props.instanced;

    this._setModelProps(props);

    // assert(program || program instanceof Program);
    assert(this.drawMode !== undefined && Number.isFinite(this.vertexCount), ERR_MODEL_PARAMS);
  }
  /* eslint-enable max-statements */

  setProps(props) {
    super.setProps(props);
    this._setModelProps(props);
  }

  // delete is inherited

  destroy() {
    this.delete();
  }

  // GETTERS

  getDrawMode() {
    return this.drawMode;
  }

  getVertexCount() {
    return this.vertexCount;
  }

  getInstanceCount() {
    return this.instanceCount;
  }

  getAttributes() {
    return this.attributes;
  }

  // SETTERS

  setDrawMode(drawMode) {
    this.drawMode = drawMode;
    return this;
  }

  setVertexCount(vertexCount) {
    assert(Number.isFinite(vertexCount));
    this.vertexCount = vertexCount;
    return this;
  }

  setInstanceCount(instanceCount) {
    assert(Number.isFinite(instanceCount));
    this.instanceCount = instanceCount;
    return this;
  }

  // TODO - just set attributes, don't hold on to geometry
  setGeometry(geometry) {
    this.drawMode = geometry.drawMode;
    this.vertexCount = geometry.getVertexCount();
    this.vertexArray.setAttributes(getBuffersFromGeometry(this.gl, geometry));
    return this;
  }

  setAttributes(attributes = {}) {
    // Avoid setting needsRedraw if no attributes
    if (isObjectEmpty(attributes)) {
      return this;
    }

    this.vertexArray.setAttributes(attributes);
    return this;
  }

  // DRAW CALLS

  draw(options = {}) {
    return this.drawGeometry(options);
  }

  // Draw call for transform feedback
  transform(options = {}) {
    const {discard = true, feedbackBuffers, unbindModels = []} = options;

    let {parameters} = options;

    if (feedbackBuffers) {
      this._setFeedbackBuffers(feedbackBuffers);
    }

    if (discard) {
      parameters = Object.assign({}, parameters, {[GL.RASTERIZER_DISCARD]: discard});
    }

    unbindModels.forEach(model => model.vertexArray.unbindBuffers());
    try {
      this.draw(Object.assign({}, options, {parameters}));
    } finally {
      unbindModels.forEach(model => model.vertexArray.bindBuffers());
    }

    return this;
  }

  // DEPRECATED METHODS

  render(uniforms = {}) {
    log.warn('Model.render() is deprecated. Use Model.setUniforms() and Model.draw()')();
    return this.setUniforms(uniforms).draw();
  }

  // PRIVATE METHODS

  _setModelProps(props) {
    // params
    // if ('drawMode' in props) {
    //   this.drawMode = getDrawMode(props.drawMode);
    // }
    // if ('vertexCount' in props) {
    //   this.vertexCount = props.vertexCount;
    // }
    if ('instanceCount' in props) {
      this.instanceCount = props.instanceCount;
    }
    if ('geometry' in props) {
      this.setGeometry(props.geometry);
    }

    // webgl settings
    if ('attributes' in props) {
      this.setAttributes(props.attributes);
    }
    if ('_feedbackBuffers' in props) {
      this._setFeedbackBuffers(props._feedbackBuffers);
    }
  }

  // Updates (evaluates) all function valued uniforms based on a new set of animationProps
  // experimental
  _setAnimationProps(animationProps) {
    if (this.animated) {
      assert(animationProps, 'Model.draw(): animated uniforms but no animationProps');
      const animatedUniforms = this._evaluateAnimateUniforms(animationProps);
      this.program.setUniforms(animatedUniforms, () => {
        // if something changed
        this._checkForDeprecatedUniforms(animatedUniforms);
      });
    }
  }

  // Transform Feedback

  _setFeedbackBuffers(feedbackBuffers = {}) {
    // Avoid setting needsRedraw if no feedbackBuffers
    if (isObjectEmpty(feedbackBuffers)) {
      return this;
    }

    const {gl} = this.program;
    this.transformFeedback =
      this.transformFeedback ||
      new TransformFeedback(gl, {
        program: this.program
      });

    this.transformFeedback.setBuffers(feedbackBuffers);
    return this;
  }

  // Timer Queries

  _timerQueryStart() {
    if (this.timerQueryEnabled === true) {
      if (!this.timeElapsedQuery) {
        this.timeElapsedQuery = new Query(this.gl);
      }
      if (this.lastQueryReturned) {
        this.lastQueryReturned = false;
        this.timeElapsedQuery.beginTimeElapsedQuery();
      }
    }
  }

  _timerQueryEnd() {
    if (this.timerQueryEnabled === true) {
      this.timeElapsedQuery.end();
      // TODO: Skip results if 'gl.getParameter(this.ext.GPU_DISJOINT_EXT)' returns false
      // should this be incorporated into Query object?
      if (this.timeElapsedQuery.isResultAvailable()) {
        this.lastQueryReturned = true;
        const elapsedTime = this.timeElapsedQuery.getTimerMilliseconds();

        // Update stats (e.g. for seer)
        this.stats.lastFrameTime = elapsedTime;
        this.stats.accumulatedFrameTime += elapsedTime;
        this.stats.profileFrameCount++;
        this.stats.averageFrameTime =
          this.stats.accumulatedFrameTime / this.stats.profileFrameCount;

        // Log stats
        log.log(
          LOG_DRAW_PRIORITY,
          `\
GPU time ${this.program.id}: ${this.stats.lastFrameTime}ms \
average ${this.stats.averageFrameTime}ms \
accumulated: ${this.stats.accumulatedFrameTime}ms \
count: ${this.stats.profileFrameCount}`
        )();
      }
    }
  }
}
