import React, { useState } from 'react';

const TodoList = ({ todos, onToggle, onDelete }) => { // Assuming these are passed as props from a parent component

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}> {/* Add the key prop here */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)} // Assuming onToggle is a prop function for handling toggles
          />
          <span>{todo.text}</span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;