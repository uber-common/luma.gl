import GL from '../constants';
import Model from './model';
import Buffer from '../webgl/buffer';
import TransformFeedback from '../webgl/transform-feedback';
import {isWebGL2, assertWebGL2Context} from '../webgl-utils';
import assert from '../utils/assert';
import {log} from '../utils';

// Need a minimal fragment shader to make program compile when only vertex shader specified
const EMPTY_FS = `\
void main() {}
`;

export default class Transform {

  static isSupported(gl) {
    // For now WebGL2 only
    return isWebGL2(gl);
  }

  constructor(gl, opts = {}) {
    assertWebGL2Context(gl);

    this.gl = gl;
    this.model = null;
    this._swapBuffers = false;
    this.currentIndex = 0;
    this.sourceBuffers = new Array(2);
    this.feedbackBuffers = new Array(2);
    this.transformFeedbacks = new Array(2);
    this._buffersToDelete = [];

    this.initialize(opts);
    Object.seal(this);
  }

  // Delete owned resources.
  delete() {
    for (const buffer of this._buffersToDelete) {
      buffer.delete();
    }
    this.model.delete();
  }

  get elementCount() {
    return this.model.getVertexCount();
  }

  initialize({
    id,
    vs = null,
    varyings = null,
    drawMode = GL.POINTS,
    elementCount = null,

    sourceBuffers = null,
    feedbackBuffers = null,
    feedbackMap = null,

    // deprecated
    destinationBuffers = null,
    sourceDestinationMap = null
  }) {
    // deprecated support
    feedbackBuffers = feedbackBuffers || destinationBuffers;
    feedbackMap = feedbackMap || sourceDestinationMap;

    assert(sourceBuffers && vs && varyings && elementCount);

    // If feedbackBuffers are not provided, feedbackMap must be provided
    // to create destinaitonBuffers with layout of corresponding source buffer.
    assert(feedbackBuffers || feedbackMap);
    for (const bufferName in feedbackBuffers || {}) {
      assert(feedbackBuffers[bufferName] instanceof Buffer);
    }

    if (feedbackMap) {
      this.feedbackMap = feedbackMap;
      this._swapBuffers = true;
    }

    this._bindBuffers({sourceBuffers, feedbackBuffers});
    this._buildModel({id, vs, varyings, drawMode, elementCount});
  }

  // Update some or all buffer bindings.
  update({sourceBuffers = null, feedbackBuffers = null, elementCount = this.elementCount}) {
    if (!sourceBuffers && !feedbackBuffers) {
      log.warn('Transform : no buffers updated')();
      return this;
    }

    this.model.setVertexCount(elementCount);

    const {currentIndex} = this;
    Object.assign(this.sourceBuffers[currentIndex], sourceBuffers);
    Object.assign(this.feedbackBuffers[currentIndex], feedbackBuffers);

    this.transformFeedbacks[currentIndex].setBuffers(this.feedbackBuffers[currentIndex]);

    if (this._swapBuffers) {
      const nextIndex = (currentIndex + 1) % 2;

      for (const sourceBufferName in this.feedbackMap) {
        const feedbackBufferName = this.feedbackMap[sourceBufferName];
        this.sourceBuffers[nextIndex][sourceBufferName] =
          this.feedbackBuffers[currentIndex][feedbackBufferName];
        this.feedbackBuffers[nextIndex][feedbackBufferName] =
          this.sourceBuffers[currentIndex][sourceBufferName];
        // make sure the new destination buffer is a Buffer object
        assert(this.feedbackBuffers[nextIndex][feedbackBufferName] instanceof Buffer);
      }
      this.transformFeedbacks[nextIndex].setBuffers(this.feedbackBuffers[nextIndex]);
    }
    return this;
  }

  // Run one transform feedback loop.
  run({uniforms = {}} = {}) {
    this.model.setAttributes(this.sourceBuffers[this.currentIndex]);
    this.model.draw({
      transformFeedback: this.transformFeedbacks[this.currentIndex],
      parameters: {[GL.RASTERIZER_DISCARD]: true},
      uniforms
    });
  }

  // Swap source and destination buffers.
  swapBuffers() {
    assert(this._swapBuffers);
    this.currentIndex = (this.currentIndex + 1) % 2;
  }

  // Return Buffer object for given varying name.
  getBuffer(varyingName = null) {
    assert(varyingName && this.feedbackBuffers[this.currentIndex][varyingName]);
    return this.feedbackBuffers[this.currentIndex][varyingName];
  }

  // Private
  // build source and destination buffers
  _bindBuffers({sourceBuffers = null, feedbackBuffers = null}) {
    this.sourceBuffers[0] = Object.assign({}, sourceBuffers);
    this.feedbackBuffers[0] = Object.assign({}, feedbackBuffers);

    if (this._swapBuffers) {
      this.sourceBuffers[1] = {};
      this.feedbackBuffers[1] = {};

      for (const sourceBufferName in this.feedbackMap) {
        const feedbackBufferName = this.feedbackMap[sourceBufferName];
        if (!this.feedbackBuffers[0][feedbackBufferName]) {
          // Create new buffer with same layout and settings as source buffer
          const sourceBuffer = this.sourceBuffers[0][sourceBufferName];
          const {bytes, type, usage, layout} = sourceBuffer;
          this.feedbackBuffers[0][feedbackBufferName] =
            new Buffer(this.gl, {bytes, type, usage, layout});
          this._buffersToDelete.push(this.feedbackBuffers[0][feedbackBufferName]);
        }

        this.sourceBuffers[1][sourceBufferName] =
          this.feedbackBuffers[0][feedbackBufferName];
        this.feedbackBuffers[1][feedbackBufferName] =
          this.sourceBuffers[0][sourceBufferName];
        // make sure the new destination buffer is a Buffer object
        assert(this.feedbackBuffers[1][feedbackBufferName] instanceof Buffer);
      }
    }
  }

  // build Model and TransformFeedback objects
  _buildModel({id, vs, varyings, drawMode, elementCount}) {
    // Append matching version string to the fragment shader to ensure compilation succeeds
    // TODO - is this still needed now that we have shader transpilatio?
    let fs = EMPTY_FS;
    if (vs.indexOf('#version ') === 0) {
      const vsLines = vs.split('\n');
      fs = `${vsLines[0]}\n${EMPTY_FS}`;
    }

    this.model = new Model(this.gl, {
      id: id || 'transform',
      vs,
      fs,
      varyings,
      drawMode,
      vertexCount: elementCount
    });

    this.transformFeedbacks[0] = new TransformFeedback(this.gl, {
      program: this.model.program,
      buffers: this.feedbackBuffers[0]
    });

    if (this._swapBuffers) {
      this.transformFeedbacks[1] = new TransformFeedback(this.gl, {
        program: this.model.program,
        buffers: this.feedbackBuffers[1]
      });
    }
  }
}
