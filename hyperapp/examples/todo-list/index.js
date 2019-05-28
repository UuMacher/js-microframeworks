import { h, app } from "hyperapp";
import '../../../index.css';
import { createMountContainer } from '../../../dom-util';
import { TodoList } from './TodoList.jsx';
import { TodoInput } from "./TodoInput.jsx";

// Actions
const Check = (state, todo) => {
  return {
    ...state,
    todos: [...state.todos.filter(item => item !== todo), { ...todo, done: true }]
  }
};

const Uncheck = (state, todo) => {
  return {
    ...state,
    todos: [...state.todos.filter(item => item !== todo), { ...todo, done: false }]
  }
};

const Add = (state, todo) => {
  if (!todo || !todo.title || !todo.title.length) {
    return { ...state };
  }
  return {
    ...state,
    title: null,
    todos: [...state.todos, todo]
  }
};

// State
const state = {
  title: null,
  todos: [
    {
      title: 'Learn JavaScript', done: false
    },
    {
      title: 'Learn HTML', done: true
    }
  ]
};

app({
  init: () => state,
  view: state => (
    <div>

      <TodoInput
        title={state.title}
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