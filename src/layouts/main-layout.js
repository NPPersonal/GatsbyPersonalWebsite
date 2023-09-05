import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import { useNavigationRoutesData } from "../hooks/use-navigation-routes-data";

/**
 * Main layout that included AppBar at top
 * @returns
 */
const MainLayout = ({ children }) => {
  const navRouteData = useNavigationRoutesData();

  return (
    <Box>
      <NavBar navigationRoutes={navRouteData} />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
