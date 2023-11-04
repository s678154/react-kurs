import * as React from "react";
import Switch from "@mui/material/Switch";
import { DarkModeContext } from "./DarkModeContext"; // Husk å oppdatere med riktig sti

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return <Switch checked={darkMode} onChange={toggleDarkMode} />;
}
