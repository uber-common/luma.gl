import {IcoSphereGeometry} from '../../geometries';
import {uid} from '../../utils';
import ModelNode from '../nodes/model-node';

export default class IcoSphere extends ModelNode {
  constructor(gl, props = {}) {
    const {id = uid('ico-sphere')} = props;
    super(gl, Object.assign({id}, props, {geometry: new IcoSphereGeometry(props)}));
  }
}
