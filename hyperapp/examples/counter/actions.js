export const Increment = (state) => {
    return {
        ...state,
        count : state.count + 1
    }
};

export const Decrement = (state) => {
    return {
        ...state,
        count : state.count - 1
    }
};