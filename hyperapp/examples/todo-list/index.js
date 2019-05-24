import { h, app } from "hyperapp";
import './index.css';
import { createMountContainer } from '../../../dom-util';
import { TodoList } from './TodoList.jsx';

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
  return {
    ...state,
    title: null,
    todos: [...state.todos, todo]
  }
};

const Input = (state, value) => {
  return { ...state, title: value }
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
      <TodoList
        todos={state.todos}
        title={state.title}
        onInput={Input}
        onAdd={Add}
        onCheck={todo => [Check, todo]}
        onUncheck={todo => [Uncheck, todo]}
      />
  ),
  node: createMountContainer('hyperapp')
})