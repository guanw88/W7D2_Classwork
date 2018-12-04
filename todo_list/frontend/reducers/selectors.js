const allTodos = (state_todos) => {
  const keys = Object.keys(state_todos);
  return keys.map(idx => {
    return state_todos[idx];
  });
};

window.allTodos = allTodos;

export default allTodos;
