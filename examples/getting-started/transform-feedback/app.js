import {AnimationLoop, Transform, Model} from '@luma.gl/engine';
import {Buffer, clear} from '@luma.gl/webgl';
import {isWebGL2} from '@luma.gl/gltools';

const INFO_HTML = `
Animation via transform feedback.
`;

const ALT_TEXT = "THIS DEMO REQUIRES WEBGL 2, BUT YOUR BROWSER DOESN'T SUPPORT IT";

const transformVs = `\
#version 300 es
#define SIN2 0.03489949
#define COS2 0.99939082

in vec2 position;

out vec2 vPosition;
void main() {
    mat2 rotation = mat2(
        COS2, SIN2,
        -SIN2, COS2
    );
    vPosition = rotation * position;
}
`;

const renderVs = `\
#version 300 es

in vec2 position;
in vec3 color;

out vec3 vColor;
void main() {
    vColor = color;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const renderFs = `\
#version 300 es
precision highp float;

in vec3 vColor;

out vec4 fragColor;
void main() {
    fragColor = vec4(vColor, 1.0);
}
`;

export default class AppAnimationLoop extends AnimationLoop {
  constructor() {
    super({debug: true});
  }

  static getInfo() {
    return INFO_HTML;
  }

  onInitialize({gl}) {
    this.demoNotSupported = !isWebGL2(gl);
    if (this.demoNotSupported) {
      return {};
    }

    const positionBuffer = new Buffer(gl, new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.0, 0.5]));

    const transform = new Transform(gl, {
      vs: transformVs,
      sourceBuffers: {
        position: positionBuffer
      },
      feedbackMap: {
        position: 'vPosition'
      },
      elementCount: 3
    });

    const colorBuffer = new Buffer(
      gl,
      new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0])
    );

    const model = new Model(gl, {
      vs: renderVs,
      fs: renderFs,
      attributes: {
        position: transform.getBuffer('vPosition'),
        color: colorBuffer
      },
      vertexCount: 3
    });

    return {transform, model};
  }

  onRender({gl, transform, model}) {
    if (this.demoNotSupported) {
      return;
    }

    transform.run();

    clear(gl, {color: [0, 0, 0, 1]});
    model.setAttributes({position: transform.getBuffer('vPosition')}).draw();

    transform.swap();
  }

  onFinalize({transform, model}) {
    if (transform) {
      transform.delete();
    }
    if (model) {
      model.delete();
    }
  }

  getAltText() {
    return ALT_TEXT;
  }
}

// @ts-ignore
if (typeof window !== 'undefined' && !window.website) {
  const animationLoop = new AppAnimationLoop();
  animationLoop.start();
}
