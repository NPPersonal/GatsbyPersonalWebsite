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
import { Brightness7Rounded, Brightness4Rounded } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";

/**
 * Render navigation routes
 * @param navigationRoutes an array of navigation routes data
 * @returns React node
 */
const renderNavigationRoutes = (navigationRoutes) => {
  return (
    <Box className="flex grow justify-center">
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

  return (
    <AppBar>
      <Toolbar>
        <Box className="mr-4">
          <Avatar alt="Logo" sx={{ width: logoSize, height: logoSize }}>
            <StaticImage
              src="../../images/logo.png"
              alt="Logo image"
              placeholder="blurred"
              layout="constrained"
            />
          </Avatar>
        </Box>
        {title && (
          <Typography className="text-4xl font-bold hidden sm:block">
            {title}
          </Typography>
        )}
        {navigationRoutes && renderNavigationRoutes(navigationRoutes)}
        <Box className="ml-4">
          <IconButton onClick={() => toggleColorMode()}>
            {mode === "light" ? <Brightness7Rounded /> : <Brightness4Rounded />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  avatarSize: PropTypes.number,
  navigationRoutes: PropTypes.arrayOf(NavigationRoute.propTypes.data),
};

export default NavBar;