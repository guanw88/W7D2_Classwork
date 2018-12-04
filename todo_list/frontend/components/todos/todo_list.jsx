import React from "react";
import TodoListItem from "./todo_list_item";


export default ({todos}) => {
  const todoTitles = todos.map(todo => {
    // return <li key={todo.id}>{todo.title}</li>;
    return <TodoListItem key={todo.id} todo={todo}/>
  });
  
  return (
    <>
      <h3>Todo List goes here!</h3>
      <ul>
        {todoTitles}
      </ul>
    </>
  )
  
};
