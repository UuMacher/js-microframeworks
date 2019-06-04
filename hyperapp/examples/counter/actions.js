export const Increment = state => ({
    ...state,
    count: state.count + 1
});

export const Decrement = state => ({
    ...state,
    count: state.count - 1
});

export const Reset = state => ({
    ...state,
    count: 0
});