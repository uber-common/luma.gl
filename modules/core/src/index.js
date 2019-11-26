// CORE MODULE EXPORTS FOR LUMA.GL

// WEBGL CONTEXT
export {
  isWebGL,
  isWebGL2,
  lumaStats,
  createGLContext,
  resizeGLContext,
  getContextInfo,
  getGLContextInfo,
  getContextLimits,
  FEATURES,
  hasFeature,
  hasFeatures,
  getFeatures,
  canCompileGLGSExtension,
  cloneTextureFrom,
  getKeyValue,
  getKey,
  cssToDeviceRatio,
  cssToDevicePixels
} from '@luma.gl/webgl';

export {
  trackContextState,
  resetParameters,
  getParameters,
  setParameters,
  withParameters
} from '@luma.gl/gltools';

// WEBGL1 OBJECTS/FUNCTIONS
export {
  Buffer,
  Shader,
  VertexShader,
  FragmentShader,
  Program,
  Framebuffer,
  Renderbuffer,
  Texture2D,
  TextureCube,
  clear,
  clearBuffer,
  // Copy and Blit
  readPixelsToArray,
  readPixelsToBuffer,
  copyToDataUrl,
  copyToImage,
  copyToTexture,
  blit
} from '@luma.gl/webgl';

export {
  // WebGL2 classes & Extensions
  Query,
  Texture3D,
  TransformFeedback,
  VertexArrayObject,
  VertexArray,
  UniformBufferLayout,
  setPathPrefix,
  loadFile,
  loadImage,
  // experimental WebGL exports
  Accessor as _Accessor,
  clearBuffer as _clearBuffer
} from '@luma.gl/webgl';

// CORE - WEBGL INDEPENDENT
export {
  AnimationLoop,
  Model,
  Transform,
  ProgramManager,
  Timeline,
  Geometry,
  ClipSpace,
  ConeGeometry,
  CubeGeometry,
  CylinderGeometry,
  IcoSphereGeometry,
  PlaneGeometry,
  SphereGeometry,
  TruncatedConeGeometry
} from '@luma.gl/engine';

// TODO/CLEAN UP FOR V7
//  We should have a minimal set of forwarding exports from shadertools (ideally none)
//  Analyze risk of breaking apps
export {
  // HELPERS
  combineInjects,
  normalizeShaderModule,
  // SHADER MODULES
  fp32,
  fp64,
  project,
  lights,
  dirlight,
  picking,
  gouraudLighting,
  phongLighting,
  pbr,
  getQualifierDetails,
  getPassthroughFS,
  typeToChannelSuffix,
  typeToChannelCount,
  convertToVec4
} from '@luma.gl/shadertools';

// UTILS: undocumented API for other luma.gl modules
export {log, assert, uid, self, window, global, document} from '@luma.gl/webgl';
