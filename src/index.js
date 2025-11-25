import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Modern Professional Blue Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F5477", // Deep Blue
      light: "#2F8EA3", // Lighter variant of deep blue
      dark: "#0A3F5C", // Darker variant of deep blue
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2F8EA3", // Teal Blue
      light: "#4AC6D0", // Aqua (accent color)
      dark: "#1F6B7D", // Darker teal
      contrastText: "#ffffff",
    },
    // Accent color for special elements
    tertiary: {
      main: "#4AC6D0", // Aqua
      light: "#6DD4DE", // Lighter aqua
      dark: "#359BA6", // Darker aqua
      contrastText: "#1A1A1A",
    },
    background: {
      default: "#F7F9FA", // Off-White
      paper: "#ffffff",
    },
    text: {
      primary: "#1A1A1A", // Charcoal
      secondary: "#4A4A4A", // Lighter charcoal
      disabled: "#9E9E9E",
    },
    grey: {
      50: "#FAFBFC",
      100: "#F7F9FA", // Off-White background
      200: "#E8EAED",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#1A1A1A", // Charcoal text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: "#1A1A1A",
    },
    h2: {
      color: "#1A1A1A",
    },
    h3: {
      color: "#1A1A1A",
    },
    h4: {
      color: "#1A1A1A",
    },
    h5: {
      color: "#1A1A1A",
    },
    h6: {
      color: "#1A1A1A",
    },
    body1: {
      color: "#1A1A1A",
    },
    body2: {
      color: "#4A4A4A",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
