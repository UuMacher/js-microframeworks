import { h } from 'hyperapp';

export const Incrementer = ({ count, onIncrement }) => {
    return (
        <div>
            <button type="button" onclick={onIncrement}>Increment (+)</button>
            <output>{count}</output>
        </div >
    );
};