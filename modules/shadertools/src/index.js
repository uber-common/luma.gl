// shadertools exports
import MODULAR_VS from './shaders/modular-vertex.glsl';
import MODULAR_FS from './shaders/modular-fragment.glsl';

// DOCUMENTED APIS

export {registerShaderModules, setDefaultShaderModules} from './lib/resolve-modules';
export {assembleShaders} from './lib/assemble-shaders';

// HELPERS

export {combineInjects} from './lib/inject-shader';
export {normalizeShaderModule} from './lib/filters/normalize-module';

export {
  getQualifierDetails,
  getPassthroughFS,
  typeToChannelSuffix,
  typeToChannelCount,
  convertToVec4
} from './utils/shader-utils';

// SHADER MODULES

export {default as fp32} from './modules/fp32/fp32';
export {default as fp64} from './modules/fp64/fp64';
export {default as project} from './modules/project/project';
export {default as lighting} from './modules/lighting/lighting';
export {default as dirlight} from './modules/dirlight/dirlight';
export {default as picking} from './modules/picking/picking';
export {default as diffuse} from './modules/diffuse/diffuse';
export {default as phonglighting} from './modules/phong-lighting/phong-lighting';

// experimental
export {default as _transform} from './modules/transform/transform';

// DEFAULT SHADERS

// A set of base shaders that leverage the shader module system,
// dynamically enabling features depending on which modules are included
export const MODULAR_SHADERS = {
  vs: MODULAR_VS,
  fs: MODULAR_FS,
  defaultUniforms: {}
};
