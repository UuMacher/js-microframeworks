import { h } from 'hyperapp';

const css = progress => 
({
    backgroundColor: 'deeppink',
    padding: '0.2em',
    margin: '0.2em',
    maxWidth: '100%',
    width: `${progress}px`
});

export const Progress = state => {
    const progress = state.count * 2;
    return (
        <div style={css(progress)}>{progress}</div>
    );
};
