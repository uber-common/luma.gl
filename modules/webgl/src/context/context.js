/* eslint-disable quotes */
/* global document */
// WebGLRenderingContext related methods
import {trackContextState} from '@luma.gl/gltools';

import {createHeadlessContext} from './create-headless-context';
import {createBrowserContext} from './create-browser-context';
import {getContextDebugInfo} from '../debug/get-context-debug-info';

import {WebGL2RenderingContext} from '../webgl-utils';

import {log, isBrowser, assert, getDevicePixelRatio} from '../utils';
import {global} from '../utils/globals';

export const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
export const ERR_WEBGL = ERR_CONTEXT;
export const ERR_WEBGL2 = 'Requires WebGL2';

const isPage = isBrowser && typeof document !== 'undefined';

export function isWebGL(gl) {
  return Boolean(gl && Number.isFinite(gl._version));
}

export function isWebGL2(gl) {
  return Boolean(gl && gl._version === 2);
}

export function assertWebGLContext(gl) {
  // Need to handle debug context
  assert(isWebGL(gl), ERR_CONTEXT);
}

export function assertWebGL2Context(gl) {
  // Need to handle debug context
  assert(isWebGL2(gl), ERR_WEBGL2);
}

const CONTEST_DEFAULTS = {
  // COMMON CONTEXT PARAMETERS
  // Attempt to allocate WebGL2 context
  webgl2: true, // Attempt to create a WebGL2 context (false to force webgl1)
  webgl1: true, // Attempt to create a WebGL1 context (false to fail if webgl2 not available)
  throwOnFailure: true,
  manageState: true,
  // BROWSER CONTEXT PARAMETERS
  canvas: null, // A canvas element or a canvas string id
  debug: false, // Instrument context (at the expense of performance)
  // HEADLESS CONTEXT PARAMETERS
  width: 800, // width are height are only used by headless gl
  height: 600
  // WEBGL/HEADLESS CONTEXT PARAMETERS
  // Remaining options are passed through to context creator
};

/*
 * Creates a context giving access to the WebGL API
 */
/* eslint-disable complexity, max-statements */
export function createGLContext(options = {}) {
  options = Object.assign({}, CONTEST_DEFAULTS, options);
  const {width, height} = options;

  // Error reporting function, enables exceptions to be disabled
  function onError(message) {
    if (options.throwOnError) {
      throw new Error(message);
    }
    return null;
  }

  let gl;
  if (isBrowser) {
    // Get or create a canvas
    const {canvas} = options;
    const targetCanvas = getCanvas({canvas, width, height, onError});
    // Create a WebGL context in the canvas
    gl = createBrowserContext(targetCanvas, options);
  } else {
    // Create a headless-gl context under Node.js
    gl = createHeadlessContext({...options, width, height, onError});
  }

  if (!gl) {
    return null;
  }

  gl = instrumentGLContext(gl, options);

  // Log some debug info about the newly created context
  logInfo(gl);

  // Add to seer integration
  return gl;
}

export function instrumentGLContext(gl, options = {}) {
  // Avoid multiple instrumentations
  if (gl._instrumented) {
    return gl;
  }

  gl._version = gl._version || getVersion(gl);

  // Cache canvas size information to avoid setting it on every frame.
  gl.luma = gl.luma || {};
  gl.luma.canvasSizeInfo = gl.luma.canvasSizeInfo || {};

  options = Object.assign({}, CONTEST_DEFAULTS, options);
  const {manageState, debug} = options;

  // Install context state tracking
  if (manageState) {
    trackContextState(gl, {
      copyState: false,
      log: (...args) => log.log(1, ...args)()
    });
  }

  // Add debug instrumentation to the context
  if (isBrowser && debug) {
    if (!global.makeDebugContext) {
      log.warn('WebGL debug mode not activated. import "@luma.gl/debug" to enable.')();
    } else {
      gl = global.makeDebugContext(gl, options);
      // Debug forces log level to at least 1
      log.priority = Math.max(log.priority, 1);
    }
  }

  gl._instrumented = true;

  return gl;
}

/**
 * Resize the canvas' drawing buffer.
 *
 * Can match the canvas CSS size, and optionally also consider devicePixelRatio
 * Can be called every frame
 *
 * Regardless of size, the drawing buffer will always be scaled to the viewport, but
 * for best visual results, usually set to either:
 *  canvas CSS width x canvas CSS height
 *  canvas CSS width * devicePixelRatio x canvas CSS height * devicePixelRatio
 * See http://webgl2fundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
 *
 * resizeGLContext(gl, {width, height, useDevicePixels})
 */
export function resizeGLContext(gl, options = {}) {
  // Resize browser context
  if (gl.canvas) {
    const devicePixelRatio = getDevicePixelRatio(options.useDevicePixels);
    setDevicePixelRatio(gl, devicePixelRatio, options);
    return;
  }

  // Resize headless gl context
  const ext = gl.getExtension('STACKGL_resize_drawingbuffer');
  if (ext && `width` in options && `height` in options) {
    ext.resize(options.width, options.height);
  }
}

// HELPER METHODS

function getCanvas({canvas, width = 800, height = 600, onError = () => {}}) {
  let targetCanvas;
  if (typeof canvas === 'string') {
    const isPageLoaded = isPage && document.readyState === 'complete';
    if (!isPageLoaded) {
      onError(`createGLContext called on canvas '${canvas}' before page was loaded`);
    }
    targetCanvas = document.getElementById(canvas);
  } else if (canvas) {
    targetCanvas = canvas;
  } else {
    targetCanvas = document.createElement('canvas');
    targetCanvas.id = 'lumagl-canvas';
    targetCanvas.style.width = Number.isFinite(width) ? `${width}px` : '100%';
    targetCanvas.style.height = Number.isFinite(height) ? `${height}px` : '100%';
    document.body.insertBefore(targetCanvas, document.body.firstChild);
  }

  return targetCanvas;
}

function logInfo(gl) {
  const webGL = isWebGL2(gl) ? 'WebGL2' : 'WebGL1';
  const info = getContextDebugInfo(gl);
  const driver = info ? `(${info.vendor},${info.renderer})` : '';
  const debug = gl.debug ? ' debug' : '';
  log.info(1, `${webGL}${debug} context ${driver}`)();
}

function getVersion(gl) {
  if (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) {
    // WebGL2 context.
    return 2;
  }
  // Must be a WebGL1 context.
  return 1;
}

// use devicePixelRatio to set canvas width and height
function setDevicePixelRatio(gl, devicePixelRatio, options) {
  // NOTE: if options.width and options.height not used remove in v8
  let clientWidth = 'width' in options ? options.width : gl.canvas.clientWidth;
  let clientHeight = 'height' in options ? options.height : gl.canvas.clientHeight;

  if (!clientWidth || !clientHeight) {
    log.log(1, 'Canvas clientWidth/clientHeight is 0')();
    // by forcing devicePixel ratio to 1, we do not scale gl.canvas.width and height in each frame.
    devicePixelRatio = 1;
    clientWidth = gl.canvas.width || 1;
    clientHeight = gl.canvas.height || 1;
  }

  gl.luma = gl.luma || {};
  gl.luma.canvasSizeInfo = gl.luma.canvasSizeInfo || {};
  const cachedSize = gl.luma.canvasSizeInfo;
  // Check if canvas needs to be resized
  if (
    cachedSize.clientWidth !== clientWidth ||
    cachedSize.clientHeight !== clientHeight ||
    cachedSize.devicePixelRatio !== devicePixelRatio
  ) {
    let clampedPixelRatio = devicePixelRatio;

    const canvasWidth = Math.floor(clientWidth * clampedPixelRatio);
    const canvasHeight = Math.floor(clientHeight * clampedPixelRatio);
    gl.canvas.width = canvasWidth;
    gl.canvas.height = canvasHeight;

    // Note: when devicePixelRatio is too high, it is possible we might hit system limit for
    // drawing buffer width and hight, in those cases they get clamped and resulting aspect ration may not be maintained
    // for those cases, reduce devicePixelRatio.
    if (gl.drawingBufferWidth !== canvasWidth || gl.drawingBufferHeight !== canvasHeight) {
      log.warn(`Device pixel ratio clamped`)();
      clampedPixelRatio = Math.min(
        gl.drawingBufferWidth / clientWidth,
        gl.drawingBufferHeight / clientHeight
      );

      gl.canvas.width = Math.floor(clientWidth * clampedPixelRatio);
      gl.canvas.height = Math.floor(clientHeight * clampedPixelRatio);
    }

    Object.assign(gl.luma.canvasSizeInfo, {clientWidth, clientHeight, devicePixelRatio});
  }
}
