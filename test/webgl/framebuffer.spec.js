import test from 'tape-catch';
import 'luma.gl/headless';
import {createGLContext, Framebuffer} from 'luma.gl';

const fixture = {
  gl: createGLContext()
};

test('WebGL#Framebuffer construct/delete', t => {
  const {gl} = fixture;

  t.throws(
    () => new Framebuffer(),
    /.*WebGLRenderingContext.*/,
    'Framebuffer throws on missing gl context');

  const framebuffer = new Framebuffer(gl);
  t.ok(framebuffer instanceof Framebuffer,
    'Framebuffer construction successful');

  framebuffer.delete();
  t.ok(framebuffer instanceof Framebuffer,
    'Framebuffer delete successful');

  framebuffer.delete();
  t.ok(framebuffer instanceof Framebuffer,
    'Framebuffer repeated delete successful');

  t.end();
});
