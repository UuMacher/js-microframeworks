import { h, app } from "hyperapp";
import {createMountContainer} from '../../../dom-util';
import {HelloWorld} from './hello-world.jsx';

app({
    view: () => (
      <div>
        <HelloWorld name="Hyperapp"/>
      </div>
    ),
    node: createMountContainer('hyperapp')
  })