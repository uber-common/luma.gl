/* global document */

import {addEvents as addEventsLegacy} from '../../../../../core/event';
import CrosshairCanvas from '../CrosshairCanvas';

export default {
  name: '(legacy) mouse click (document scroll, cache enabled)',
  render(testArea) {
    const canvasElement = document.createElement('canvas');
    canvasElement.height = 2 * document.documentElement.clientHeight;
    canvasElement.width = 2 * document.documentElement.clientWidth;
    testArea.appendChild(canvasElement);
    const crosshairCanvas = new CrosshairCanvas(canvasElement);
    addEventsLegacy(canvasElement, {
      onClick: (eventInfo) => {
        console.log(eventInfo);
        crosshairCanvas.setCrosshair({key: 'click', position: {x: eventInfo.x, y: eventInfo.y}});
      },
      centerOrigin: false
    });
  }
};
