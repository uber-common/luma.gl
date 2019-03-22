// Note that we do two test runs on luma.gl, with and without headless-gl
// This file imports tests that should run *with* headless-gl included

// helpers
import './accessor.spec';

// webgl
import './buffer.spec';
import './vertex-array-object.spec';
import './vertex-array.spec';
import './uniforms.spec';

import './texture.spec';
import './texture-2d.spec';
import './texture-3d.spec';

import './renderbuffer.spec';
import './framebuffer.spec';

import './program.spec';
import './program-configuration.spec';
import './draw.spec';

import './copy-and-blit.spec.js';

// Extensions / webgl2
import './query.spec';

// webgl2
import './transform-feedback.spec';
