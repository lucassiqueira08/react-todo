import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "typeface-roboto";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5c6bc0",
      main: "#303f9f",
      dark: "#303f9f",
      contrastText: "#fff"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
