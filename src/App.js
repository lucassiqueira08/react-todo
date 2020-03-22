import React, { useState, useEffect } from "react";

import TodoList from "./components/TodoList/index";
import TodoInput from "./components/TodoInput/index";

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setTodo([...todos, { id: 1, name: "Acordar às 5h" }]);
    return () => setTodo([]);
  }, []);

  useEffect(() => {
    document.title = `Você tem ${todos.length} tarefas`;
  });

  const handleAddTodo = () => {
    if (input) {
      setTodo([...todos, { id: Math.random(), name: input }]);
    }
  };

  const handleInput = event => {
    setInput(event.target.value);
  };

  const handleRemoveTodo = id => {
    setTodo(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>Tarefas</h1>
      <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
      <TodoInput handleInput={handleInput} handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
