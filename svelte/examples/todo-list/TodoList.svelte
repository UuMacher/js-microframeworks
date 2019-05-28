<script>
  import Todo from "./Todo.svelte";

  export let todos;
  export let onCheck;
  export let onUncheck;

  $: doneTodos = todos.filter(todo => todo.done);
  $: openTodos = todos.filter(todo => !todo.done);
</script>

<div>
  <ul>
    {#each openTodos as todo}
      <li>
        <Todo item={todo} {onCheck} />
      </li>
    {/each}
  </ul>
  <ul>
    {#each doneTodos as todo}
      <Todo item={todo} {onUncheck} />
    {/each}
  </ul>
</div>
