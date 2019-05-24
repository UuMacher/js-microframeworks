import { h } from "hyperapp";

export const TodoInput = ({ title, onInput, onAdd}) => {
    return (
        <form onsubmit={[onAdd, e => ({ title: e.target.children[0].value, done: false })]}>
       <input autofocus
            type="text"
            placeholder="Add Todo"
            value={title}
            oninput={[onInput, e => e.target.value.trim()]} />
    </form>
    )
};