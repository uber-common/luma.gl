const {createGLContext, glGetDebugInfo} = require('../../src/headless');
const {isWebGLContext} = require('../../src/webgl/webgl-checks');

const test = require('tape-catch');

test('WebGL#headless context creation', t => {
  const gl = createGLContext();
  t.ok(isWebGLContext(gl), 'Context creation ok');
  t.end();
});

test('WebGL#glGetDebugInfo', t => {
  const gl = createGLContext();
  const info = glGetDebugInfo(gl);
  t.ok(typeof info.vendor === 'string', 'info.vendor ok');
  t.ok(typeof info.renderer === 'string', 'info.renderer ok');
  t.end();
});
