/* global window, document, LumaGL */
/* eslint-disable no-var, max-statements */
var createGLContext = LumaGL.createGLContext;
var PerspectiveCamera = LumaGL.PerspectiveCamera;
var Program = LumaGL.Program;
var Buffer = LumaGL.Buffer;
var getShadersFromHTML = LumaGL.addons.getShadersFromHTML;

window.webGLStart = function() {
  var canvas = document.getElementById('lesson02-canvas');
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var gl = createGLContext({canvas});

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0, 0, 1);
  gl.clearDepth(1);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);

  var program = new Program(gl, getShadersFromHTML({
    vs: 'shader-vs',
    fs: 'shader-fs'
  }));

  program.use();

  var camera = new PerspectiveCamera({
    aspect: canvas.width / canvas.height
  });

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Draw Triangle
  camera.view.$translate(-1.5, 0, -7);
  program
    .setBuffers({
      positions: new Buffer(gl).setData({
        data: new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0]),
        size: 3
      }),
      colors: new Buffer(gl).setData({
        data: new Float32Array([1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1]),
        size: 4
      })
    })
    .setUniforms({
      uMVMatrix: camera.view,
      uPMatrix: camera.projection
    });
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  // Draw Square
  camera.view.$translate(3, 0, 0);
  program
    .setBuffers({
      positions: new Buffer(gl).setData({
        data: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]),
        size: 3
      }),
      colors: new Buffer(gl).setData({
        data: new Float32Array(
          [0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1]),
        size: 4
      })
    })
    .setUniforms({
      uMVMatrix: camera.view,
      uPMatrix: camera.projection
    });
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};
