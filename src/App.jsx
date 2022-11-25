import './App.css';
import React from "react";
import { theme } from "./styles/styles.jsx";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar/Navbar.jsx";
import Calculator from "./components/calculator/Calculator.jsx";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Calculator />
    </ThemeProvider>
  );
}
