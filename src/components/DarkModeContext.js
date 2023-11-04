import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Oppretter en context
export const DarkModeContext = React.createContext({
  toggleDarkMode: () => {},
  darkMode: false,
});

// Tilbyr en provider som håndterer temaendring
export function DarkModeProvider({ children }) {
  // Initialiser state til verdien fra localStorage eller false som fallback
  const [darkMode, setDarkMode] = React.useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // Oppdaterer theme basert på darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // Håndterer bytting av dark mode og lagrer det i localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  // Oppdaterer darkMode state basert på endringer i localStorage
  React.useEffect(() => {
    const handleStorageChange = () => {
      const storedMode = localStorage.getItem("darkMode");
      if (storedMode !== null) {
        setDarkMode(JSON.parse(storedMode));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Fjern event listener på cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
}
