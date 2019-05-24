import { h } from "hyperapp";

export const Button = ({onClick}, children) => {
    return (<button type="button" onclick={onClick}>{children}</button>)
};