const DEFAULT_HIGHLIGHT_COLOR = new Uint8Array([0, 255, 255, 255]);

const DEFAULT_MODULE_OPTIONS = {
  pickingSelectedColor: null, //  Set to a picking color to visually highlight that item
  pickingHighlightColor: DEFAULT_HIGHLIGHT_COLOR, // Color of visual highlight of "selected" item
  pickingActive: false, // Set to true when rendering to off-screen "picking" buffer
  pickingAttribute: false // Set to true when picking an attribute value instead of object index
};

/* eslint-disable camelcase */
function getUniforms(opts = DEFAULT_MODULE_OPTIONS) {
  const uniforms = {};
  if (opts.pickingSelectedColor !== undefined) {
    if (!opts.pickingSelectedColor) {
      uniforms.picking_uSelectedColorValid = 0;
    } else {
      const selectedColor = opts.pickingSelectedColor.slice(0, 3);
      uniforms.picking_uSelectedColorValid = 1;
      uniforms.picking_uSelectedColor = selectedColor;
    }
  }
  if (opts.pickingHighlightColor) {
    uniforms.picking_uHighlightColor = opts.pickingHighlightColor.map(x => x / 255);
  }
  if (opts.pickingActive !== undefined) {
    uniforms.picking_uActive = Boolean(opts.pickingActive);
    uniforms.picking_uAttribute = Boolean(opts.pickingAttribute);
  }
  return uniforms;
}

const vs = `\
uniform vec3 picking_uSelectedColor;
uniform bool picking_uSelectedColorValid;

out vec4 picking_vRGBcolor_Aselected;

const float COLOR_SCALE = 1. / 255.;
const vec3 PACK_SHIFT = vec3(65536.0, 256.0, 1.0);
const float PACK_UPSCALE = 256.0 / 255.0;
const float PACK_SHIFT_RIGHT = 1. / 256.;

bool isVertexPicked(vec3 vertexColor) {
  return
    picking_uSelectedColorValid &&
    abs(vertexColor.r - picking_uSelectedColor.r) < 0.001 &&
    abs(vertexColor.g - picking_uSelectedColor.g) < 0.001 &&
    abs(vertexColor.b - picking_uSelectedColor.b) < 0.001;
}

void picking_setPickingColor(vec3 pickingColor) {
  // Do the comparison with selected item color in vertex shader as it should mean fewer compares
  picking_vRGBcolor_Aselected.a =
    float(isVertexPicked(pickingColor));

  // Stores the picking color so that the fragment shader can render it during picking
  picking_vRGBcolor_Aselected.rgb = pickingColor * COLOR_SCALE;
}

void picking_setPickingAttribute(vec3 pickingColor, float value) {
  // Encode attribute value into 3x8 bits
  vec3 packedValue = fract(value * PACK_SHIFT);
  packedValue.gb -= packedValue.rg * PACK_SHIFT_RIGHT;
  picking_vRGBcolor_Aselected.rgb = packedValue * PACK_UPSCALE;
  // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
  picking_vRGBcolor_Aselected.a = step(0.5, length(pickingColor));
}
`;

const fs = `\
uniform bool picking_uActive; // true during rendering to offscreen picking buffer
uniform bool picking_uAttribute;
uniform vec3 picking_uSelectedColor;
uniform vec4 picking_uHighlightColor;

in vec4 picking_vRGBcolor_Aselected;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  if (picking_uActive) {
    return color;
  }
  bool selected = bool(picking_vRGBcolor_Aselected.a);

  if (selected) {
    float highLightAlpha = picking_uHighlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking_uHighlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (picking_uAttribute) {
    if (picking_vRGBcolor_Aselected.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Aselected;
  }
  if (picking_uActive) {
    vec3 pickingColor = picking_vRGBcolor_Aselected.rgb;
    if (length(pickingColor) < 0.001) {
      discard;
    }
    return vec4(pickingColor, 1.0);
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highightColor);
}

`;

export default {
  name: 'picking',
  vs,
  fs,
  getUniforms
};
