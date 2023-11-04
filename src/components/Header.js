import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton, Stack } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeToggle from "./DarkModeToggle";
import Clock from "./Clock";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <WbSunnyIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Daily
            </Typography>
            <Clock />
          </Stack>
          <DarkModeToggle />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
