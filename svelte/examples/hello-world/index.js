import {createMountContainer} from '../../../dom-util';
import HelloWorld from './hello-world.svelte';

const app = new HelloWorld({
	target: createMountContainer('svelte'),
	props: {
		name: 'Svelte'
	}
});