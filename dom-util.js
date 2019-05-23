export const createMountContainer = (className=null) => {
    const container = document.createElement('div');
    className && container.classList.add(className);
    document.body.append(container);
    return container;
};