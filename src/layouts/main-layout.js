import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import navigationRouteData from "../../static/navigation-routes/navigation-routes.json";

/**
 * Main layout that included AppBar at top
 * @returns
 */
const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar navigationRoutes={navigationRouteData} />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
