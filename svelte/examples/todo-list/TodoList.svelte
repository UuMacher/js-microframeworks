<script>
  import Todo from "./Todo.svelte";

  export let todos;
  export let onCheck;
  export let onUncheck;

  $: openTodos = todos.filter(todo => !todo.done);
  $: doneTodos = todos.filter(todo => todo.done);
</script>

<div>
  <h2>Todo</h2>
  <ul>
    {#each openTodos as todo}
      <li>
        <Todo item={todo} {onCheck} />
      </li>
    {/each}
  </ul>
  <h2>Done</h2>
  <ul>
    {#each doneTodos as todo}
      <li>
        <Todo item={todo} {onUncheck} />
      </li>
    {/each}
  </ul>
</div>