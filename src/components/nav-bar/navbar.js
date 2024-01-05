import * as React from "react";
import { MUIThemeContext } from "../mui-theme/mui-theme-provider";
import PropTypes from "prop-types";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import NavigationRoute from "../navigation-route/navigation-route";
import {
  Brightness7Rounded,
  Brightness4Rounded,
  MenuRounded,
  HomeRounded,
} from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";
import NavBarDrawer from "./navbar-drawer";
import { navigate } from "gatsby";

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
const NavBar = ({ title = "", logoSize = 44, navigationRoutes = [] }) => {
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
        <Toolbar>
          <IconButton
            className="sm:hidden"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuClick}
          >
            <MenuRounded fontSize="large" />
          </IconButton>
          <Box className="hidden sm:block mr-4">
            <Avatar alt="Logo" sx={{ width: logoSize, height: logoSize }}>
              <StaticImage
                src="../../images/logo.png"
                alt="Logo image"
                placeholder="blurred"
                layout="constrained"
              />
            </Avatar>
          </Box>
          <Box>
            <IconButton aria-label="Home" onClick={handleHomeClick}>
              <HomeRounded fontSize="large" />
            </IconButton>
          </Box>
          {title && (
            <Typography className="text-4xl font-bold hidden sm:block">
              {title}
            </Typography>
          )}
          <Box className="grow">
            {navigationRoutes && renderNavigationRoutes(navigationRoutes)}
          </Box>
          <Box className="ml-4">
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
        logoSize={logoSize}
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
