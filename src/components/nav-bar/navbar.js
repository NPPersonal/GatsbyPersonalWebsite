import * as React from "react";
import { MUIThemeContext } from "../mui-theme/mui-theme-provider";
import PropTypes from "prop-types";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import NavigationRoute from "../navigation-route/navigation-route";
import {
  Brightness7Rounded,
  Brightness4Rounded,
  MenuRounded,
  HomeRounded,
} from "@mui/icons-material";
import NavBarDrawer from "./navbar-drawer";
import { navigate } from "gatsby";
import LanguageSwitcher from "../language-switcher/language-switcher";

/**
 * Render navigation routes
 * @param navigationRoutes an array of navigation routes data
 * @returns React node
 */
const renderNavigationRoutes = (navigationRoutes) => {
  return (
    <Box className="hidden sm:flex justify-center">
      {navigationRoutes.map((data, i) => {
        return (
          <NavigationRoute
            key={`${data.title}-${i}`}
            className="mx-4"
            data={data}
          />
        );
      })}
    </Box>
  );
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
            <Box className="grow">
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
              {mode === "light" ? (
                <Brightness7Rounded fontSize="large" />
              ) : (
                <Brightness4Rounded fontSize="large" />
              )}
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
