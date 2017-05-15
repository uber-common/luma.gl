/* eslint-disable no-var, max-statements */
/* eslint-disable array-bracket-spacing, no-multi-spaces */
/* global window, document */
import {AnimationLoop, loadTextures, Program, Geometry, PerspectiveCamera, Scene, addEvents, Fx, Model, Shaders, Vec3} from 'luma.gl';
var $id = function(d) {
  return document.getElementById(d);
};

window.webGLStart = function() {
  var canvas = document.getElementById('lesson09-canvas');
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var gl = createGLContext({canvas});

  var tStar;
  var twinkle = $id('twinkle');

  class Star extends Model {
    constructor(startingDistance, rotationSpeed) {
      var colorUniformFS = [

        '#ifdef GL_ES',
        'precision highp float;',
        '#endif',

        'varying vec4 vColor;',
        'varying vec2 vTexCoord;',
        'varying vec3 lightWeighting;',

        'uniform bool hasTexture1;',
        'uniform sampler2D sampler1;',
        'uniform vec3 uColor;',

        'void main(){',
        '  if (hasTexture1) {',
        '    gl_FragColor = vec4(texture2D(sampler1,',
        '      vec2(vTexCoord.s, vTexCoord.t)).rgb * lightWeighting, 1.0) *',
        '      vec4(uColor, 1.0);',
        '  }',
        '}'

      ].join('\n');

      var program = new Program(gl, {fs: colorUniformFS});

      super({
        program,
        geometry: new Geometry({
          positions: new Float32Array([
            -1.0, -1.0,  0.0,
            1.0, -1.0,  0.0,
            -1.0,  1.0,  0.0,
            1.0,  1.0,  0.0
          ]),
          texCoords: new Float32Array([
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0
          ]),
          indices: new Uint16Array([0, 1, 3, 3, 2, 0])
        }),
        uniforms: {
          hasTexture1: true,
          sampler1: tStar
        },
        onBeforeRender() {
          var min = Math.min;
          var isTwinkle = twinkle.checked;
          var r = isTwinkle ? min(1, this.r + this.twinklerR) : this.r;
          var g = isTwinkle ? min(1, this.g + this.twinklerG) : this.g;
          var b = isTwinkle ? min(1, this.b + this.twinklerB) : this.b;
          this.setUniforms({uColor: [r, g, b]});
        }
      });

      this.angle = 0;
      this.dist = startingDistance;
      this.rotationSpeed = rotationSpeed;
      this.spin = 0;

      this.randomiseColors();
    }

    randomiseColors() {
      var rd = Math.random;

      this.r = rd();
      this.g = rd();
      this.b = rd();

      this.twinklerR = rd();
      this.twinklerG = rd();
      this.twinklerB = rd();
    }

    animate(elapsedTime, twinkle) {
      this.angle += this.rotationSpeed / 10;

      this.dist -= 0.001;

      if (this.dist < 0) {
        this.dist += 5;
        this.randomiseColors();
      }

      // update position
      this.position.set(
        Math.cos(this.angle) * this.dist,
        Math.sin(this.angle) * this.dist,
        0
      );
      this.setRotation(new Vec3(0, 0, this.spin));
      this.spin += 0.1;
      this.updateMatrix();
    }
  }

  var zoom = -15;
  var tilt = 90;

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
  gl.enable(gl.BLEND);

  var camera = new PerspectiveCamera({
    aspect: canvas.width / canvas.height
  });

  var scene = new Scene(gl);

  addEvents(canvas, {
    onKeyDown: function(e) {
      switch (e.key) {
      case 'up':
        tilt -= 1.5;
        break;
      case 'down':
        tilt += 1.5;
        break;
      // handle page up/down
      default:
        if (e.code === 33) {
          zoom -= 0.1;
        } else if (e.code === 34) {
          zoom += 0.1;
        }
      }
    }
  });

  loadTextures(gl, {
    urls: ['star.gif'],
    parameters: [{
      magFilter: gl.LINEAR,
      minFilter: gl.LINEAR_MIPMAP_NEAREST,
      generateMipmap: true
    }]
  })
  .then(function(textures) {
    tStar = textures[0];

    // Load all world objects
    var numStars = 50;
    for (var i = 0; i < numStars; i++) {
      scene.add(new Star(i / numStars * 5.0, i / numStars));
    }

    function animate() {
      scene.children.forEach(function(star) {
        star.animate();
      });
    }

    function drawScene() {
      // Update Camera Position
      var radTilt = tilt / 180 * Math.PI;
      camera.position.set(0, Math.cos(radTilt) * zoom,
                             Math.sin(radTilt) * zoom);
      camera.update();
      // Render all elements in the Scene
      scene.render({camera});
    }

    function tick() {
      drawScene();
      animate();
      Fx.requestAnimationFrame(tick);
    }

    tick();
  });

};
