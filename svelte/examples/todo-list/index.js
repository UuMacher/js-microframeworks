import {createMountContainer} from '../../../dom-util';
import TodoApp from './TodoApp.svelte';

import './index.css';

const app = new TodoApp({
	// could be any DOM-node, e.g.: document.body
	target: createMountContainer('svelte')
});