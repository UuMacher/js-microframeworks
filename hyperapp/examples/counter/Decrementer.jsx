import { h } from 'hyperapp';

export const Decrementer = ({ count, onDecrement }) => {
    return (
        <div>
            <button type="button" onclick={onDecrement}>Decrement (-)</button>
            <output>{count}</output>
        </div >
    );
};