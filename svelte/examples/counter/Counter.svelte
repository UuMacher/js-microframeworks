<script>
  import { count } from "./store.js";
  import Decrement from "./Decrement.svelte";
  import Increment from "./Increment.svelte";
  import Timer from "./Timer.svelte";
</script>

<h1>Counter</h1>

<output>Global {$count}</output>

<Timer />
<Increment />
<Decrement />
