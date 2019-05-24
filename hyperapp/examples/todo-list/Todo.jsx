import { h } from "hyperapp";

export const Todo = ({ item, onCheck, onUncheck }) => (
    <label class={item.done ? 'is-done' : ''}>
        <input type="checkbox" checked={item.done} onClick={() => item.done ? onUncheck(item) : onCheck(item)} />
        <span>{item.title}</span>
    </label>
);