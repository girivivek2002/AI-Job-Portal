import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

import theme from "./theme/index.js";

import { Provider } from "react-redux";

import { store } from "./app/store";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(
  document.getElementById("root")
).render(



  <Provider store={store}>
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <App />
      <ToastContainer />
    </ThemeProvider>
  </Provider>




);