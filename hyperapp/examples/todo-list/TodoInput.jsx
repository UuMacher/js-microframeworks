import { h } from "hyperapp";

const parseTitle = e => {
    e.preventDefault();
    const input = e.target.children[0];
    const value = input.value.trim();

    if (!value.length) {
        return null;
    }
    else {
        input.value = null;
    }

    return { title: value, done: false }
}

export const TodoInput = ({ onAdd }) => {
    return (
        <form onsubmit={[onAdd, parseTitle]}>
            <input autocomplete="off"
                type="text"
                placeholder="Add Todo" />
        </form>
    )
};