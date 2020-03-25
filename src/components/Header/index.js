import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header(props) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Tarefas</Typography>
      </Toolbar>
    </AppBar>
  );
}
