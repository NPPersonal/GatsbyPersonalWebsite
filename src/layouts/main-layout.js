import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import navigationRouteData from "../../static/navigation-routes/navigation-routes.json";
import { useTheme } from "@emotion/react";

/**
 * Main layout that included AppBar at top
 * @returns
 */
const MainLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
        minHeight: "100%",
      }}
    >
      <NavBar navigationRoutes={navigationRouteData} />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
