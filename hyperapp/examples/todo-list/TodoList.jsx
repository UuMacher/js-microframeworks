import { h } from "hyperapp";
import { Todo } from './Todo.jsx';

export const TodoList = ({ todos, onCheck, onUncheck }) => {
    const doneTodos = todos.filter(todo => todo.done);
    const openTodos = todos.filter(todo => !todo.done);
    return (
        <div>
            <h2>Todo</h2>
            <ul>
                {openTodos.map(todo => <li><Todo item={todo} onCheck={onCheck} /></li>)}
            </ul>
            <h2>Done</h2>
            <ul>
                {doneTodos.map(todo => <li><Todo item={todo} onUncheck={onUncheck} /></li>)}
            </ul>
        </div>);
};