import React, { useState, useEffect } from "react";

import styles from "./styles";

import Header from "./components/Header/index";
import TodoList from "./components/TodoList/index";
import TodoInput from "./components/TodoInput/index";

import { Paper, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default withStyles(styles)(function App(props) {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const { classes } = props;

  useEffect(() => {
    setTodo([...todos, { id: 1, name: "Acordar às 5h" }]);
    return () => setTodo([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = `Você tem ${todos.length} tarefas`;
  }, [todos]);

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
      <Header/>
      <Container className={classes.content}>
        <Paper className={classes.paper}>
          <Typography
            className={classes.title}
            variant="h1"
            align="center"
            gutterBottom
          >
            Tarefas
          </Typography>
          <TodoInput
            classes={classes}
            handleInput={handleInput}
            handleAddTodo={handleAddTodo}
          />
          <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
        </Paper>
      </Container>
    </>
  );
});
