// WEBGL BUILT-IN TYPES

/* eslint-disable quotes, no-console */
import {global} from '../utils/globals';
import isBrowser from '../utils/is-browser';

export const ERR_HEADLESSGL_LOAD = `\
luma.gl: loaded under Node.js without headless gl installed, meaning that WebGL \
contexts can not be created. This may not be an error. For example, this is a \
typical configuration for isorender applications running on the server.`;

// TODO(Tarek): OOGLY HACK to avoid webpack requiring headless
//   browser bundles. Will be removed in 8.0 when we
//   remove automatic headless context creation
// NOTE: Rollup does not process the line `const m = module;`
//   and writes it out verbatim in its final output, which ends
//   up falling over in browser environments at runtime. Added
//   a `try/catch` block to fix usage in rollup builds.
let m;
try {
  m = module;
} catch (e) {
  m = null;
}

// Load headless gl dynamically, if available
export let headlessTypes = null;
export function headlessGL(...args) {
  const headless = m.require('gl');
  if (!headless) {
    throw new Error(ERR_HEADLESSGL_LOAD);
  }
  return headless(...args);
}

if (!isBrowser) {
  try {
    headlessTypes = m.require('gl/wrap');
  } catch (error) {
    // /* global console */
    // console.info(ERR_HEADLESSGL_LOAD);
  }
}

class DummyType {}

const {
  WebGLRenderingContext = DummyType,
  WebGLProgram = DummyType,
  WebGLShader = DummyType,
  WebGLBuffer = DummyType,
  WebGLFramebuffer = DummyType,
  WebGLRenderbuffer = DummyType,
  WebGLTexture = DummyType,
  WebGLUniformLocation = DummyType,
  WebGLActiveInfo = DummyType,
  WebGLShaderPrecisionFormat = DummyType
} = headlessTypes || global;

export const webGLTypesAvailable =
  WebGLRenderingContext !== DummyType &&
  WebGLProgram !== DummyType &&
  WebGLShader !== DummyType &&
  WebGLBuffer !== DummyType &&
  WebGLFramebuffer !== DummyType &&
  WebGLRenderbuffer !== DummyType &&
  WebGLTexture !== DummyType &&
  WebGLUniformLocation !== DummyType &&
  WebGLActiveInfo !== DummyType &&
  WebGLShaderPrecisionFormat !== DummyType;

// Ensures that WebGL2RenderingContext is defined in non-WebGL2 environments
// so that apps can test their gl contexts with instanceof
// E.g. if (gl instanceof WebGL2RenderingContext) { }
class WebGL2RenderingContextNotSupported {}
global.WebGL2RenderingContext = global.WebGL2RenderingContext || WebGL2RenderingContextNotSupported;

// Ensure that Image is defined under Node.js
class ImageNotSupported {}
global.Image = global.Image || ImageNotSupported;
