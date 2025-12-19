import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#03045E" },   // navy
    secondary: { main: "#0077B6" }, // blue
    info: { main: "#00B4D8" },      // cyan
    background: {
      default: "#FFFFFF",           // ice
      paper: "#FFFFFF",
    },
    text: {
      primary: "#03045E",
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
});
