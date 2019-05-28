import {createMountContainer} from '../../../dom-util';
import Hello from './hello.svelte';

const app = new Hello({
	// could be any DOM-node, e.g.: document.body
	target: createMountContainer('svelte'), 
	props: {
		name: 'Svelte'
	}
});