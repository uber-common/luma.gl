#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D sampler1;
uniform vec3 cameraPosition;
varying vec4 vPosition;
varying vec2 vTexCoord;
void main(void) {
  gl_FragColor = texture2D(sampler1, vec2(vTexCoord.x, vTexCoord.y * 2.));
}
