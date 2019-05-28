import { h, app } from "hyperapp";
import '../../../index.css';
import {createMountContainer} from '../../../dom-util';
import {Hello} from './hello.jsx';

app({
    view: () => (
      <div>
        <Hello name="Hyperapp"/>
      </div>
    ),
    node: createMountContainer('hyperapp')
  })