import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1.25fr 2fr",
  paddingTop: "100px",
  paddingBottom: "100px",
  height: "100vh",
  alignItems: "start",

  [theme.breakpoints.down("sm")]: {
    gridTemplateRows: "auto auto",
    paddingTop: "10px",
    paddingBottom: "0",
  },
}));
