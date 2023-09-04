import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
