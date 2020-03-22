import React from "react";

// import { Container } from './styles';

export default function TodoInput(props) {
  return (
    <>
      <input onChange={props.handleInput}></input>
      <button onClick={props.handleAddTodo}>Adicionar Tarefa</button>
    </>
  );
}
