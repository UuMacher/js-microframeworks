import '../../../index.css';
import {createMountContainer} from '../../../dom-util';
import HelloWorld from './HelloWorld.svelte';

const app = new HelloWorld({
	// could be any DOM-node, e.g.: document.body
	target: createMountContainer('svelte')
});