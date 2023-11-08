import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box  style={{
      
      backgroundImage: "url(https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D)",
      height:"100vh",
    }}> 

    
    <App />
    </Box>
  </ThemeProvider>
);
