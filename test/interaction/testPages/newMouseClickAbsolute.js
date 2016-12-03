/* global document */

import {addEvents} from '../../../src/core/event';
import CrosshairCanvas from '../CrosshairCanvas';

export default {
  name: '(new) mouse click (absolute position)',
  render(testArea) {
    const canvasElement = document.createElement('canvas');
    canvasElement.height = document.documentElement.clientHeight;
    canvasElement.width = document.documentElement.clientWidth;
    canvasElement.setAttribute('style', 'position: absolute; top: 300px; left: 400px;');
    testArea.appendChild(canvasElement);
    const crosshairCanvas = new CrosshairCanvas(canvasElement);
    addEvents(canvasElement, {
      onClick(eventInfo) {
        console.log(eventInfo);
        crosshairCanvas.setCrosshair({key: 'click', position: eventInfo.pointerPosition});
      }
    });
  }
};
