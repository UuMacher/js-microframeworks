import { h, app } from 'hyperapp';
import '../../../index.css';
import { createMountContainer } from '../../../dom-util';
import { TodoList } from './TodoList.jsx';
import { TodoInput } from "./TodoInput.jsx";

import { Add, Check, Uncheck } from './actions';
import { state } from './state';

app({
  init: () => state,
  view: state => (
    <div>
      <TodoInput
        onAdd={Add}
      />
      <TodoList
        todos={state.todos}
        onCheck={todo => [Check, todo]}
        onUncheck={todo => [Uncheck, todo]}
      />
    </div>
  ),
  node: createMountContainer('hyperapp')
})