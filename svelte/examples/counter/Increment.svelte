<script>
  import { count } from "./store.js";

  const increment = () => {
    count.update(n => n + 1);
  };
</script>

<div>
  <button type="button" on:click={increment}>Increment (+)</button>
  <output>{$count}</output>
</div>
