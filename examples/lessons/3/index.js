/* global window, document, LumaGL */
/* eslint-disable max-statements, array-bracket-spacing, no-multi-spaces */
window.webGLStart = function() {

  var makeProgramFromHTMLTemplates = LumaGL.addons.makeProgramFromHTMLTemplates;
  var createGLContext = LumaGL.createGLContext;
  var PerspectiveCamera = LumaGL.PerspectiveCamera;
  var Fx = LumaGL.Fx;
  var Mat4 = LumaGL.Mat4;
  var Model = LumaGL.Model;
  var Geometry = LumaGL.Geometry;
  var Buffer = LumaGL.Buffer;

  var canvas = document.getElementById('lesson03-canvas');
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var gl = createGLContext(canvas);

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0, 0, 1);
  gl.clearDepth(1);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);

  var program = makeProgramFromHTMLTemplates(gl, 'shader-vs', 'shader-fs');

  program.use();

  var triangle = new Model({
    geometry: new Geometry({
      vertices: new Float32Array(
                [ 0,  1, 0,
                 -1, -1, 0,
                  1, -1, 0]),
      colors: new Float32Array(
              [1, 0, 0, 1,
               0, 1, 0, 1,
               0, 0, 1, 1])
    }),
    program: program
  });

  var square = new Model({
    geometry: new Geometry({
      vertices: new Float32Array(
        [ 1,  1, 0,
         -1,  1, 0,
          1, -1, 0,
         -1, -1, 0]),
      colors: new Float32Array(
        [0.5, 0.5, 1, 1,
         0.5, 0.5, 1, 1,
         0.5, 0.5, 1, 1,
         0.5, 0.5, 1, 1])
    }),
    program: program
  });

  var camera = new PerspectiveCamera({
    aspect: canvas.width / canvas.height
  });

  var view = new Mat4();
  var rTri = 0.0;
  var rSquare = 0.0;

  function setupModel(model) {
    // Set up buffers if we haven't already.
    if (!model.userData.buffers) {
      model.userData.buffers = [
        new Buffer(gl, {
          attribute: 'aVertexPosition',
          data: model.geometry.vertices.value,
          size: 3
        }),
        new Buffer(gl, {
          attribute: 'aVertexColor',
          data: model.geometry.colors.value,
          size: 4
        })
      ];
    }

    // update element matrix
    model.update();
    // get new view matrix out of element and camera matrices
    view.mulMat42(camera.view, model.matrix);
    // set buffers with element data
    program.setBuffers(model.userData.buffers);
    // set uniforms
    program.setUniform('uMVMatrix', view);
    program.setUniform('uPMatrix', camera.projection);
  }

  function animate() {
    rTri += 0.01;
    rSquare += 0.1;
  }

  function drawScene() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Draw triangle
    triangle.position.set(-1.5, 0, -7);
    triangle.rotation.set(0, rTri, 0);
    setupModel(triangle);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Draw Square
    square.position.set(1.5, 0, -7);
    square.rotation.set(rSquare, 0, 0);
    setupModel(square);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function tick() {
    drawScene();
    animate();
    Fx.requestAnimationFrame(tick);
  }

  tick();

};
