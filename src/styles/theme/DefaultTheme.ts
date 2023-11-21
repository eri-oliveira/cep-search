import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "#D9D9D9",
        },
      },
    },
  },
  typography: {
    fontFamily: "Khand, sans-serif",
  },
});
