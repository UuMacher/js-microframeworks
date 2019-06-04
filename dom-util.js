export const createMountContainer = (className=null) => {
    const container = document.createElement('div');
    container.classList.add('code-example');
    className && container.classList.add(className);
    document.body.append(container);
    return container;
};