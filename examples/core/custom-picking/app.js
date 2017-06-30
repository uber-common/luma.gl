/* global document */
import {
  GL, AnimationLoop, setParameters, Matrix4, radians,
  Model, project, picking, pickModels} from 'luma.gl';
import HeightmapGeometry from './heightmap-geometry';

let pickPosition = [0, 0];

function mousemove(e) {
  pickPosition = [e.offsetX, e.offsetY];
}

const animationLoop = new AnimationLoop({
  onInitialize: ({gl}) => {
    addControls();

    setParameters(gl, {
      depthTest: true,
      depthFunc: GL.LEQUAL
    });

    gl.canvas.addEventListener('mousemove', mousemove);

    const heightmap = new Model(gl, {
      id: 'heightmap',
      modules: [project, picking],
      geometry: new HeightmapGeometry()
    });

    return {heightmap};
  },
  onFinalize({gl}) {
    gl.canvas.removeEventListener('mousemove', mousemove);
  },
  onRender: ({gl, tick, aspect, heightmap, framebuffer}) => {
    const projection = Matrix4.perspective({
      fov: radians(60), aspect, near: 0.1, far: 1000
    });
    const view = Matrix4.lookAt({eye: [0, 1.5, 0.75], center: [0, 0.5, 0]});
    const model = new Matrix4().clone(view).rotateY(tick * 0.01);

    heightmap.setUniforms({
      projectionMatrix: projection,
      viewMatrix: view,
      modelMatrix: model,
      hasPickingColors: true
    });

    const pickInfo = pickModels(gl, {
      models: [heightmap],
      position: pickPosition,
      framebuffer
    });

    updatePickInfo(gl, pickInfo);

    heightmap.setModuleUniforms({
      selectedPickingColor: pickInfo && pickInfo.color
    });

    heightmap.render();
  }
});

function updatePickInfo(gl, pickInfo) {
  const div = document.getElementById('pick-info') ||
    gl.canvas.appendChild(document.createElement('div'));
  div.id = 'pick-info';

  if (pickInfo) {
    div.innerHTML = `altitude: ${pickInfo.color[0]}`;
    div.style.top = `${pickPosition[0]}px`;
    div.style.left = `${pickPosition[1]}px`;
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function addControls() {
  /* global document */
  const controlPanel = document.querySelector('.control-panel');
  if (controlPanel) {
    controlPanel.innerHTML = `
      <p>
      Custom Picking on a grid
      <p>
      Uses the luma.gl <code>picking</code> shader module,
      adding detailed picking capabilities to a complex model with
      a few lines of code.
      <div id='pick-info'/>
    `;
  }
}

export default animationLoop;

/* expose on Window for standalone example */
/* global window */
if (typeof window !== 'undefined') {
  window.animationLoop = animationLoop;
}

