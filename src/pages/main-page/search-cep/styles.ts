import { Grid, TextField, styled } from "@mui/material";

export const StyledSearchGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  paddingRight: "150px",

  [theme.breakpoints.down("sm")]: {
    paddingRight: "0",
    gap: "20px",
  },
  
  [theme.breakpoints.down("md")]: {
    paddingRight: "0",
    gap: "20px",
  },
}));

export const SearchTextfield = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#404040",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#404040",
    },
  },
}));
