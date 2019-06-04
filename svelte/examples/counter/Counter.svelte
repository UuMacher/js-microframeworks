<script>
  import { onMount, onDestroy } from "svelte";
  import { count } from "./store.js";
  import Decrement from "./Decrement.svelte";
  import Increment from "./Increment.svelte";
  import Progress from "./Progress.svelte";
  import Reset from "./Reset.svelte";

  let interval;

  onMount(() => {
    interval = setInterval(() => {
      count.update(n => n + 1);
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<h1>Counter</h1>
<output>Global: {$count}</output>
<Increment />
<Decrement />
<Progress />
<Reset />