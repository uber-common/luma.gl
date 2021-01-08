// Utils
export {log} from './utils/log';
export {isWebGL, isWebGL2} from './utils/webgl-checks';

// Polyfills to support a subset of WebGL2 APIs on WebGL1 contexts
export {default as polyfillContext} from './polyfill/polyfill-context';

// unified parameter APIs
export {
  getParameters,
  setParameters,
  resetParameters,
  withParameters
} from './state-tracker/unified-parameter-api';

// state tracking
export {
  trackContextState,
  pushContextState,
  popContextState
} from './state-tracker/track-context-state';

export {
  createGLContext,
  resizeGLContext,
  instrumentGLContext,
  getContextDebugInfo
} from './context/context';

export {cssToDeviceRatio, cssToDevicePixels} from './utils/device-pixels';
