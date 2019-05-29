import '../../../index.css';
import {createMountContainer} from '../../../dom-util';
import Counter from './Counter.svelte';

const app = new Counter({
	// could be any DOM-node, e.g.: document.body
	target: createMountContainer('svelte')
});