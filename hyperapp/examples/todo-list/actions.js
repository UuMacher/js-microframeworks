export const Check = (state, todo) => {
    return {
        ...state,
        todos: [
            ...state.todos.filter(item => item !== todo),
            { ...todo, done: true }
        ]
    }
};

export const Uncheck = (state, todo) => {
    return {
        ...state,
        todos: [
            ...state.todos.filter(item => item !== todo),
            { ...todo, done: false }
        ]
    }
};

export const Add = (state, todo) => {
    if (!todo || !todo.title || !todo.title.length) {
        return { ...state };
    }
    return {
        ...state,
        title: null,
        todos: [...state.todos, todo]
    }
};