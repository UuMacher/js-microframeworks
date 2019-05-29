<script>
    import { count } from './store.js';

    const decrement = () => {
        count.update(n => n - 1);
    };

</script>

<button type="button" on:click="{decrement}">Decrement -</button>

<output>{$count}</output>