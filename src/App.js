import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, Fab } from "@mui/material";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";

function App() {
  //dark mode. ini dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  //toggle dark mode
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  //applying primary and secondary theme colors
  const theme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: toggleDarkMode ? "#90caf9" : "#3f51b5", //Adjust primary color
      },
      secondary: {
        main: toggleDarkMode ? "#f50057" : "#131052", //Adjust secondary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Floating button */}
        <Fab
          onClick={toggleDarkTheme}
          color="primary"
          aria-label="toggle theme"
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
          }}
        >
          {toggleDarkMode ? <LightMode /> : <DarkMode />}
        </Fab>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
