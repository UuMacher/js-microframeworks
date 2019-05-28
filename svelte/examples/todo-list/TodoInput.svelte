<script>
  export let onAdd;

  const onSubmit = e => {
    e.preventDefault();

    const input = e.target.children[0];
    const value = input.value.trim();

    if(!value || !value.length || !onAdd){
      return;
    }
    input.value = null;
    onAdd({ title: value, done: false });
  }
</script>

<form on:submit={onSubmit}>
  <input autocomplete="off" type="text" placeholder="Add Todo" />
</form>
