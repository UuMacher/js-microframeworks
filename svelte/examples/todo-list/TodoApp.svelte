<script>
  import TodoInput from "./TodoInput.svelte";
  import TodoList from "./TodoList.svelte";

  let todos = [
    {
      title: "Learn JavaScript",
      done: false
    },
    {
      title: "Learn HTML",
      done: true
    }
  ];

  const onAdd = todo => {
    if (!todos.some(item => item.title === todo.title)) {
      todos = [...todos, todo];
    }
  };

  const update = (todo, payload) => {
    const index = todos.findIndex(item => todo === item);
    todos = [
      ...todos.slice(0, index),
      { ...todo, ...payload },
      ...todos.slice(index + 1, todos.length)
    ];
  };

  const onCheck = todo => {
    update(todo, { done: true });
  };

  const onUncheck = todo => {
    update(todo, { done: false });
  };
</script>

<TodoInput {onAdd} />
<TodoList {todos} {onCheck} {onUncheck} />
