import { Box, Grid, styled } from "@mui/material";

interface HistoryBoxProps {
  hideWhenSmall: boolean;
  hideWhenLarge: boolean;
}

export const StyledHystoryGrid = styled(Grid)<HistoryBoxProps>(
  ({ theme, hideWhenSmall, hideWhenLarge }) => ({
    display: hideWhenLarge ? "none" : "grid",
    gridTemplateRows: "auto 1fr",
    gap: "20px",

    [theme.breakpoints.down("sm")]: {
      display: hideWhenSmall ? "none" : "grid",
    },

    [theme.breakpoints.down("md")]: {
      display: hideWhenSmall ? "none" : "grid",
    },
  })
);

export const ScrollBox = styled(Grid)(({ theme }) => ({
  boxSizing: "border-box",
  overflowY: "scroll",
  maxHeight: "260px",
  height: "100%",

  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "6px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#666",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },

  [theme.breakpoints.down("sm")]: {
    maxHeight: "100vh",
  },
}));

export const LineBox = styled(Box)(({ theme }) => ({
  display: "grid",
  alignContent: "center",
  gridTemplateColumns: "40px 1fr 100px 50px",
  width: "96%",
  height: "50px",
  padding: "5px 10px",
  borderRadius: "10px",
  border: "1px solid #7CA697",
  background: "#89B5A5",
  marginBottom: "10px",
  cursor: "pointer",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(4, auto)",
  },
}));

export const HistoryHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },
}));
