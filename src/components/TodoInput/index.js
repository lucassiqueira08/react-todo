import React from "react";

import { Button, TextField } from '@material-ui/core'

export default function TodoInput(props) {
  return (
    <div className={props.classes.input}>
       <TextField label='Digite a tarefa' onChange={props.handleInput} margin='normal'/>
       <Button  color='primary' variant='contained' onClick={props.handleAddTodo}>Adicionar</Button>
    </div>
  );
}
