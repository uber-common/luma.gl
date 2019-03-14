// Export core modules for luma.gl

// Initialize any global state
require('./init');

// WebGL
export {isWebGL, isWebGL2} from './webgl/utils/webgl-checks';
export {cloneTextureFrom} from './webgl/utils/texture-utils';
export {getKeyValue, getKey} from './webgl/utils/constants-to-keys';
export {
  createGLContext,
  destroyGLContext,
  resizeGLContext,
  setContextDefaults
} from './webgl/context/context';
export {getContextInfo, getGLContextInfo, getContextLimits} from './webgl/features/limits';
export {getContextDebugInfo as glGetDebugInfo} from './webgl/debug/get-context-debug-info';
export {FEATURES} from './webgl/features/webgl-features-table';
export {hasFeature, hasFeatures, getFeatures} from './webgl/features/features';
export {default as canCompileGLGSExtension} from './webgl/features/check-glsl-extension';
export {
  trackContextState,
  resetParameters,
  getParameter,
  getParameters,
  setParameter,
  setParameters,
  withParameters,
  getModifiedParameters
} from '@luma.gl/webgl-state-tracker';

// WebGL1 classes
export {default as Buffer} from './webgl/classes/buffer';
export {Shader, VertexShader, FragmentShader} from './webgl/classes/shader';
export {default as Program} from './webgl/classes/program';
export {default as Framebuffer} from './webgl/classes/framebuffer';
export {default as Renderbuffer} from './webgl/classes/renderbuffer';
export {default as Texture2D} from './webgl/classes/texture-2d';
export {default as TextureCube} from './webgl/classes/texture-cube';

export {clear, clearBuffer} from './webgl/classes/clear';

// Copy and Blit
export {
  readPixelsToArray,
  readPixelsToBuffer,
  copyToDataUrl,
  copyToImage,
  copyToTexture,
  blit
} from './webgl/classes/copy-and-blit';

// WebGL2 classes & Extensions
export {default as Query} from './webgl/classes/query';
export {default as Sampler} from './webgl/classes/sampler';
export {default as Texture3D} from './webgl/classes/texture-3d';
export {default as Texture2DArray} from './webgl/classes/texture-2d-array';
export {default as TransformFeedback} from './webgl/classes/transform-feedback';
export {default as VertexArrayObject} from './webgl/classes/vertex-array-object';
export {default as VertexArray} from './webgl/classes/vertex-array';
export {default as UniformBufferLayout} from './webgl/classes/uniform-buffer-layout';

// experimental WebGL exports
export {default as _Accessor} from './webgl/classes/accessor';
export {clearBuffer as _clearBuffer} from './webgl/classes/clear';

// CORE
export {default as AnimationLoop} from './core/animation-loop';
export {default as Geometry} from './core/geometry';
export {default as pickModels} from './core/pick-models';
export {encodePickingColor, decodePickingColor, getNullPickingColor} from './core/picking-colors';
export {default as Transform} from './core/transform';
// Experimental core exports
export {default as _Attribute} from './core/attribute';
export {default as _ShaderCache} from './core/shader-cache';
export {default as _AnimationLoopProxy} from './core/animation-loop-proxy';

// SCENEGRAPH
export {default as ScenegraphNode} from './scenegraph/scenegraph-node';
export {default as Group} from './scenegraph/group';
export {default as Camera} from './scenegraph/camera';
export {default as Model} from './scenegraph/model';
export {default as createGLTFObjects} from './scenegraph/gltf/create-gltf-objects';

// Multipass Rendering
export {default as _MultiPassRenderer} from './multipass/multi-pass-renderer';
export {default as _RenderState} from './multipass/render-state';
export {default as _Pass} from './multipass/pass';
export {default as _CompositePass} from './multipass/composite-pass';
export {default as _ClearPass} from './multipass/clear-pass';
export {default as _RenderPass} from './multipass/render-pass';
export {default as _CopyPass} from './multipass/copy-pass';
export {default as _TexturePass} from './multipass/texture-pass';
// export {default as _MaskPass} from './multipass/mask-pass';
// export {default as _ClearMaskPass} from './multipass/clearmask-pass';
export {default as _PickingPass} from './multipass/picking-pass';

export {default as _ShaderModulePass} from './multipass/shader-module-pass';
export {default as _Canvas} from './multipass/canvas';

// Geometries
export {default as ConeGeometry} from './geometries/cone-geometry';
export {default as CubeGeometry} from './geometries/cube-geometry';
export {default as CylinderGeometry} from './geometries/cylinder-geometry';
export {default as IcoSphereGeometry} from './geometries/ico-sphere-geometry';
export {default as PlaneGeometry} from './geometries/plane-geometry';
export {default as SphereGeometry} from './geometries/sphere-geometry';
export {default as TruncatedConeGeometry} from './geometries/truncated-cone-geometry';

// Models
export {default as Cone} from './models/cone';
export {default as Cube} from './models/cube';
export {default as Cylinder} from './models/cylinder';
export {default as IcoSphere} from './models/ico-sphere';
export {default as Plane} from './models/plane';
export {default as Sphere} from './models/sphere';
export {default as TruncatedCone} from './models/truncated-cone';

export {default as ClipSpace} from './models/clip-space';

// IO
export {setPathPrefix, loadFile, loadImage} from './core/load-file';

// lighting
export {DirectionalLight, AmbientLight, PointLight} from './lighting/light-source';

// material
export {default as Material} from './materials/material';
export {default as PhongMaterial} from './materials/phong-material';
export {default as PBRMaterial} from './materials/pbr-material';

// TODO/CLEAN UP FOR V7
//  We should have a minimal set of forwarding exports from shadertools (ideally none)
//  Analyze risk of breaking apps
export {
  registerShaderModules,
  setDefaultShaderModules,
  assembleShaders,
  // HELPERS
  combineInjects,
  normalizeShaderModule,
  // SHADER MODULES
  fp32,
  fp64,
  project,
  legacyLighting,
  lighting,
  dirlight,
  picking,
  diffuse,
  phonglighting,
  // experimental
  _transform,
  MODULAR_SHADERS,
  getQualifierDetails,
  getPassthroughFS,
  typeToChannelSuffix,
  typeToChannelCount,
  convertToVec4
} from '@luma.gl/shadertools';

// DEPRECATED EXPORTS IN v6.0

export {default as ClipSpaceQuad} from './models/clip-space';

// UNDOCUMENTED API
// TODO - Should these be exposed?

export {default as log} from './utils/log';
export {global} from './utils/globals';
