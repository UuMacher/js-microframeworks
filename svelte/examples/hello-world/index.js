import HelloWorld from './hello-world.svelte';

const app = new HelloWorld({
	target: document.body,
	props: {
		name: 'World'
	}
});