import test from 'tape-catch';
import GL from 'luma.gl/constants';
import {createGLContext} from 'luma.gl';
import {VertexArrayObject} from 'luma.gl';

import {fixture} from 'luma.gl/test/setup';

test('WebGL#VertexArrayObject construct/delete', t => {
  const {gl} = fixture;

  t.ok(VertexArrayObject.isSupported(gl), 'VertexArrayObject is supported');

  t.throws(
    () => new VertexArrayObject(),
    'VertexArrayObject throws on missing gl context');

  const vao = new VertexArrayObject(gl);
  t.ok(vao instanceof VertexArrayObject, 'VertexArrayObject construction successful');

  vao.delete();
  t.ok(vao instanceof VertexArrayObject, 'VertexArrayObject delete successful');

  vao.delete();
  t.ok(vao instanceof VertexArrayObject, 'VertexArrayObject repeated delete successful');

  t.end();
});

test('WebGL#VertexArrayObject#enable', t => {
  const gl = createGLContext();

  const vertexAttributes = VertexArrayObject.getDefaultArray(gl);

  const MAX_ATTRIBUTES = VertexArrayObject.getMaxAttributes(gl);
  t.ok(MAX_ATTRIBUTES >= 8, 'vertexAttributes.getMaxAttributes() >= 8');

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    t.equal(vertexAttributes.getParameter(GL.VERTEX_ATTRIB_ARRAY_ENABLED, {location: i}), false,
      `vertex attribute ${i} should initially be disabled`);
  }

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    vertexAttributes.enable(i);
  }

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    t.equal(vertexAttributes.getParameter(GL.VERTEX_ATTRIB_ARRAY_ENABLED, {location: i}), true,
      `vertex attribute ${i} should now be enabled`);
  }

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    vertexAttributes.disable(i);
  }

  t.equal(vertexAttributes.getParameter(GL.VERTEX_ATTRIB_ARRAY_ENABLED, {location: 0}), true,
    'vertex attribute 0 should **NOT** be disabled');

  for (let i = 1; i < MAX_ATTRIBUTES; i++) {
    t.equal(vertexAttributes.getParameter(GL.VERTEX_ATTRIB_ARRAY_ENABLED, {location: i}), false,
      `vertex attribute ${i} should now be disabled`);
  }

  t.end();
});

test('WebGL#vertexArrayObject#WebGL2 support', t => {
  const gl = createGLContext({webgl2: true});

  t.ok(VertexArrayObject.isSupported(gl), 'VertexArrayObject is supported');

  const vertexAttributes = VertexArrayObject.getDefaultArray(gl);

  const MAX_ATTRIBUTES = VertexArrayObject.getMaxAttributes(gl);

  for (let i = 0; i < MAX_ATTRIBUTES; i++) {
    t.equal(vertexAttributes.getParameter(GL.VERTEX_ATTRIB_ARRAY_DIVISOR, {location: i}), 0,
      `vertex attribute ${i} should have 0 divisor`);
  }

  t.end();
});
