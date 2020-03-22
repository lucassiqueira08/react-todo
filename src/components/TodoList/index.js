import React from "react";

// import { Container } from './styles';

export default function TodoList(props) {
  return (
    <>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={() => props.handleRemoveTodo(todo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
