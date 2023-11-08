import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{
      backgroundColor: "#ffd0b6"
    }}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{
          color: "black"
        }}>
          Daily Planner
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
