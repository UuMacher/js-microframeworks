import '../../../index.css';
import {createMountContainer} from '../../../dom-util';
import TodoApp from './TodoApp.svelte';

const app = new TodoApp({
	// could be any DOM-node, e.g.: document.body
	target: createMountContainer('svelte')
});