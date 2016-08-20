// Use stackgl modules for DOM-less reading and writing of images
// NOTE: These are not dependencies of luma.gl.
// They need to be imported by the app.
import getPixels from 'get-pixels';
import savePixels from 'save-pixels';
import ndarray from 'ndarray';
import {readFile, writeFile} from 'fs';

import {promisify, lumaGlobals} from './utils';

/**
 * Returns data bytes representing a compressed image in PNG or JPG format,
 * This data can be saved using file system (f) methods or
 * used in a request.
 * @param {Image} image to save
 * @param {String} opt.type='png' - png, jpg or image/png, image/jpg are valid
 * @param {String} opt.dataURI= - Whether to include a data URI header
 * @return {*} bytes
 */
export function compressImage(image, type = 'png') {
  return savePixels(ndarray(
    image.data,
    [image.width, image.height, 4],
    [4, image.width * 4, 1],
    0), type.replace('image/', ''));
}

const getPixelsAsync = promisify(getPixels);

export function loadImage(url) {
  return getPixelsAsync(url);
}


lumaGlobals.modules.getPixels = getPixels;
lumaGlobals.modules.savePixels = savePixels;
lumaGlobals.modules.ndarray = ndarray;

lumaGlobals.nodeIO = {
  readFile,
  writeFile,
  compressImage,
  loadImage
};
