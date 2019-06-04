import { h } from 'hyperapp';

export const Resetter = ({ count, onReset }) => {
    return (
        <div>
            <button type="reset" onclick={onReset}>Reset</button>
        </div>
    );
};