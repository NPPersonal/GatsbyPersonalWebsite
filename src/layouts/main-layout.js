import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import NavMenuLink from "../components/nav-menu-link/nav-menu-link";
import { useMenusData } from "../hooks/use-menus-data";

/**
 * Main layout that included AppBar at top
 * @returns
 */
const MainLayout = ({ children }) => {
  const menuData = useMenusData();

  return (
    <Box>
      <NavBar
        menu={menuData.map((data, i) => {
          return (
            <NavMenuLink
              key={`${data.title}-${i}`}
              className="mx-4"
              data={data}
            />
          );
        })}
      />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
