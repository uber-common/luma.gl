import test from 'tape-catch';
import queryManager from 'luma.gl/webgl-utils/query-manager';

test('WebGL helpers#queryManager', t => {
  t.ok(queryManager, 'Imported correctly');
  t.end();
});
