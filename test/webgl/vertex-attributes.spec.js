/* eslint-disable max-len */
import test from 'tape-catch';
import 'luma.gl/headless';
import {createGLContext, isWebGL2Context} from 'luma.gl';
import * as VertexAttributes from 'luma.gl/webgl/vertex-attributes';

test('WebGL#VertexAttributes#enable', t => {
  const gl = createGLContext();

  const MAX_ATTRIBUTES = VertexAttributes.getMaxAttributes(gl);
  t.ok(MAX_ATTRIBUTES >= 8, 'VertexAttributes.getMaxAttributes() >= 8');

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    t.equal(VertexAttributes.isEnabled(gl, i), false, `vertex attribute ${i} should initially be disabled`);
  }

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    VertexAttributes.enable(gl, i);
  }

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    t.equal(VertexAttributes.isEnabled(gl, i), true, `vertex attribute ${i} should now be enabled`);
  }

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    VertexAttributes.disable(gl, i);
  }

  t.equal(VertexAttributes.isEnabled(gl, 0), true, 'vertex attribute 0 should **NOT** be disabled');
  for (let i = 1; i < MAX_ATTRIBUTES; i++) {
    t.equal(VertexAttributes.isEnabled(gl, i), false, `vertex attribute ${i} should now be disabled`);
  }

  t.end();
});

test('WebGL#VertexAttributes#WebGL2 support', t => {
  const gl = createGLContext({webgl2: true});

  if (!isWebGL2Context(gl)) {
    t.comment('- WebGL2 NOT ENABLED: skipping tests');
    t.end();
    return;
  }
  const MAX_ATTRIBUTES = VertexAttributes.getMaxAttributes(gl);

  t.ok(MAX_ATTRIBUTES >= 8, 'VertexAttributes.getMaxAttributes() >= 8');

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    t.equal(VertexAttributes.wegl2getDivisor(gl, i), 0, `vertex attribute ${i} should have 0 divisor`);
  }

  t.end();
});
