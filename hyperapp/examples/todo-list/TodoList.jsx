import { h } from "hyperapp";
import { Todo } from './Todo.jsx';

export const TodoList = ({ todos, title, onInput, onAdd, onCheck, onUncheck }) => {
    const doneTodos = todos.filter(todo => todo.done);
    const openTodos = todos.filter(todo => !todo.done);
    
    return (
        <div>
            <h2>Todo</h2>
            <ul>
                <li>
                    <form onsubmit={[onAdd, e => ({ title: e.target.children[0].value, done: false })]}>
                        <input autofocus
                            type="text"
                            placeholder="Add Todo"
                            value={title}
                            oninput={[onInput, e => e.target.value.trim()]} />
                    </form>
                </li>
                {openTodos.map(todo => <li><Todo item={todo} onCheck={onCheck} /></li>)}
            </ul>
            <h2>Done</h2>
            <ul>
                {doneTodos.map(todo => <li><Todo item={todo} onUncheck={onUncheck} /></li>)}
            </ul>
        </div>);
};