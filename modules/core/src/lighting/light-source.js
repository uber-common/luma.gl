// default light source parameters
const DEFAULT_LIGHT_POSITION = [0.0, 0.0, 1.0];
const DEFAULT_LIGHT_DIRECTION = [0.0, 0.0, -1.0];
const DEFAULT_LIGHT_INTENSITY = 1.0;
const DEFAULT_LIGHT_COLOR = [255, 255, 255];

class LightSource {
  constructor(props) {
    const {color = DEFAULT_LIGHT_COLOR, intensity = DEFAULT_LIGHT_INTENSITY} = props;
    this.color = color;
    this.intensity = intensity;
  }
}

export class DirectionalLight extends LightSource {
  constructor(props) {
    super(props);
    const {direction = DEFAULT_LIGHT_DIRECTION} = props;
    this.direction = direction;
  }
}

export class AmbientLight extends LightSource {
  constructor(props) {
    super(props);
  }
}

export class PointLight extends LightSource {
  constructor(props) {
    super(props);
    const {position = DEFAULT_LIGHT_POSITION} = props;
    this.position = position;
  }
}
