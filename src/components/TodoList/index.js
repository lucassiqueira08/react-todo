import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

export default function TodoList(props) {
  return (
    <List>
      {props.todos.map(todo => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.name} />
          <ListItemSecondaryAction>
            <IconButton
              color="primary"
              onClick={() => props.handleRemoveTodo(todo.id)}
            >
              {<Delete />}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
