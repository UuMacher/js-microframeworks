<script>
  export let item;
  export let onUncheck;
  export let onCheck;
</script>

<label class:is-done={item.done}>
  <input
    type="checkbox"
    on:click={() => (item.done ? onUncheck(item) : onCheck(item))}
    checked={item.done} />
  <span>{item.title}</span>
</label>
