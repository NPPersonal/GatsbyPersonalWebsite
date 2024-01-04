import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import navigationRouteData from "../../static/navigation-routes/navigation-routes.json";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import Footer from "../components/footer/footer";

/**
 * Main layout the top most layout
 *
 * This layout included
 * - AppBar at top
 * - Background management
 *
 * **PS: Do not use this layout to wrap any page**
 *
 * This layout can only be used in `wrapPageElement`
 * in gatsby-browser.js
 * @returns
 */
const MainLayout = ({ children }) => {
  const { theme } = React.useContext(MUIThemeContext);
  const bg = theme.palette.background.gradient;
  return (
    <Box
      className="flex flex-col justify-stretch"
      sx={{
        background: bg,
        minHeight: "100%",
      }}
    >
      <NavBar navigationRoutes={navigationRouteData} />
      <Toolbar />
      <Box className="my-4 grow-[1]">{children}</Box>
      <Footer sx={{ backgroundColor: theme.palette.background.footer }}>
        This is footer
      </Footer>
    </Box>
  );
};

export default MainLayout;
