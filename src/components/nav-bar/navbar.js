import React from "react";
import { MUIThemeContext } from "../mui-theme/mui-theme-provider";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigationRoute from "../navigation-route/navigation-route";
import MenuRounded from "@mui/icons-material/MenuRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import NavBarDrawer from "./navbar-drawer";
import { navigate } from "gatsby";
import LanguageSwitcher from "../language-switcher/language-switcher";
import LightDarkSwitcher from "../light-dark-switcher/light-dakr-switcher";

/**
 * Render navigation routes
 * @param navigationRoutes an array of navigation routes data
 * @returns React node
 */
const renderNavigationRoutes = (navigationRoutes) => {
  return navigationRoutes.map((data, i) => {
    return <NavigationRoute key={`${data.title}-${i}`} data={data} />;
  });
};

/**
 * App bar or navigation bar
 *
 * @param title **Optional** title of app bar
 * @param logoSize **Optional** default `44px`
 * @param navigationRoutes **Optional** an array of data of navigation route
 *
 * @returns
 */
const NavBar = ({ title = "", navigationRoutes = [] }) => {
  const { theme } = React.useContext(MUIThemeContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleColorMode } = React.useContext(MUIThemeContext);
  const [open, setOpen] = React.useState(false);

  const handleMenuClick = (_event) => {
    setOpen(true);
  };
  const handleMenuClose = (_event) => {
    setOpen(false);
  };
  const handleRouteClick = (_element) => {
    setOpen(false);
  };
  const handleHomeClick = (_event) => {
    navigate("/");
  };

  return (
    <Box>
      <AppBar enableColorOnDark>
        <Toolbar
          className="mx-2 flex flex-row justify-evenly items-center"
          disableGutters={true}
        >
          <Box className="mx-1">
            <IconButton
              className={`${isSmallScreen ? "" : "hidden"}`}
              aria-label="open drawer"
              onClick={handleMenuClick}
            >
              <MenuRounded fontSize="large" />
            </IconButton>
          </Box>
          <Box className="mx-1">
            <IconButton aria-label="Home" onClick={handleHomeClick}>
              <HomeRounded fontSize="large" />
            </IconButton>
          </Box>
          {title && (
            <Typography
              className={`text-4xl font-bold ${
                isSmallScreen ? "hidden" : "block"
              }`}
            >
              {title}
            </Typography>
          )}
          {isSmallScreen ? (
            <Box className="grow" />
          ) : (
            <Box className="grow text-center">
              {navigationRoutes && renderNavigationRoutes(navigationRoutes)}
            </Box>
          )}

          <Box className="mx-1">
            <LanguageSwitcher />
          </Box>
          <Box className="mx-1">
            <IconButton
              aria-label="color mode"
              onClick={() => toggleColorMode()}
            >
              <LightDarkSwitcher mode={mode} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <NavBarDrawer
        open={open}
        anchor="left"
        routes={navigationRoutes}
        onRouteClick={handleRouteClick}
        onClose={handleMenuClose}
      />
    </Box>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  avatarSize: PropTypes.number,
  navigationRoutes: PropTypes.arrayOf(NavigationRoute.propTypes.data),
};

export default NavBar;
