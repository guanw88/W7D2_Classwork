import React from 'react';

export default ({todo}) => {
  console.log(todo);
  return (
    <li>{todo.title}</li>
  );
};