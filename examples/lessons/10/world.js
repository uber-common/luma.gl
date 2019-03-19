import {Program, Geometry, Model} from '@luma.gl/core';

const VERTEX_SHADER = `\
attribute vec3 positions;
attribute vec2 texCoords;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec2 vTextureCoord;

void main(void) {
  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);
  vTextureCoord = texCoords;
}
`;

const FRAGMENT_SHADER = `\
precision highp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void) {
  gl_FragColor = vec4(texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t)).rgb, 1.0);
}
`;

function loadWorldGeometry(data) {
  const lines = data.split("\n");
  const vertexPositions = [];
  const vertexTextureCoords = [];
  for (const i in lines) {
    const vals = lines[i].replace(/^\s+/, "").split(/\s+/);
    if (vals.length === 5 && vals[0] !== "//") {
      // It is a line describing a vertex; get X, Y and Z first
      vertexPositions.push(parseFloat(vals[0]));
      vertexPositions.push(parseFloat(vals[1]));
      vertexPositions.push(parseFloat(vals[2]));
      // And then the texture coords
      vertexTextureCoords.push(parseFloat(vals[3]));
      vertexTextureCoords.push(parseFloat(vals[4]));
     }
  }
  return new Geometry({
    attributes: {
      positions: new Float32Array(vertexPositions),
      texCoords: new Float32Array(vertexTextureCoords)
    }
  });
}

export class World extends Model {
  constructor(opts = {}) {
    const program = new Program(opts.gl, {
      fs: FRAGMENT_SHADER,
      vs: VERTEX_SHADER
    });

    super(opts.gl, {
      program,
      geometry: opts.geometry,
      uniforms: {
        uSampler: opts.texture
      },
    });
  }
}

export {loadWorldGeometry};