import { h, app } from "hyperapp";
import {createMountContainer} from '../../../dom-util';
import {HelloWorld} from './hello-world';

app({
    init: () => 0,
    view: state => (
      <div>
        <HelloWorld name="Hyperapp"/>
      </div>
    ),
    node: createMountContainer('hyperapp')
  })