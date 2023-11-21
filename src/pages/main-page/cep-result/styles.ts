import { Box, styled } from "@mui/material";

export const StyledResultGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "center",
  width: "100%",
  height: "90%",
  padding: "5px 10px",
  borderRadius: "20px",
  border: "1px solid #7CA697",
  background: "#89B5A5",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    padding: "20px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "20px",
    height: "100%",
  },
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
