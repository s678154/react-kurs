import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { DarkModeProvider } from "./components/DarkModeContext"; // Importerer Provider fra DarkModeContext

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <DarkModeProvider>
    <CssBaseline />
    <App />
  </DarkModeProvider>
);
