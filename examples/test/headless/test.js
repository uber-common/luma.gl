import {createGLContext, makeDebugContext} from 'luma.gl';
import {setContextDefaults} from 'luma.gl/webgl/context';

import util from 'util';

setContextDefaults({width: 1, height: 1, debug: true, throwOnFailure: false, throwOnError: false});
export const gl = makeDebugContext(createGLContext());

const ext = gl.getExtension('EXT_disjoint_timer_query');
console.error(`EXT_disjoint_timer_query is ${Boolean(ext)} ${ext}`, ext); // eslint-disable-line
util.inspect(ext, {showHidden: true});
