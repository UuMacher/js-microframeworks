<script>
  import { derived } from "svelte/store";
  import { count } from "./store.js";

  const progress = derived(count, $count => $count * 2);
</script>

<style>
  .p {
    background-color: deeppink;
    padding: 0.2em;
    margin: 0.2em;
    max-width: 100%;
  }
</style>

<div class="p" style="width:{$progress}px">{$progress}</div>