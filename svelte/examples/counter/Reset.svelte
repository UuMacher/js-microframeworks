<script>
  import { count } from "./store.js";

  const reset = () => {
    count.set(0);
  };
</script>

<div>
  <button type="reset" on:click={reset}>Reset</button>
</div>
