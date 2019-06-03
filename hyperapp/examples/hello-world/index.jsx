import { h, app } from 'hyperapp';
import '../../../index.css';
import {createMountContainer} from '../../../dom-util';
import {Hello} from './hello.jsx';

app({
    init: {}, // Optional if empty
    view: () => (
      <div>
        <Hello name="Hyperapp"/>
      </div>
    ),
    node: createMountContainer('hyperapp')
  })