import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";


export default ({todos, addTodo}) => {
  const todoTitles = todos.map(todo => {
    // return <li key={todo.id}>{todo.title}</li>;
    return <TodoListItem key={todo.id} todo={todo}/>
  });
  
  return (
    <>
      <h3>Todo List goes here!</h3>
      <TodoForm addTodo={addTodo}/>
      <ul>
        {todoTitles}
      </ul>
    </>
  )
  
};
