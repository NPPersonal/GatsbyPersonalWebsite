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
import { Brightness7Rounded, Brightness4Rounded } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = ({ title = "", avatarSize = 44, menu = [] }) => {
  const { mode, toggleColorMode } = React.useContext(MUIThemeContext);

  return (
    <AppBar>
      <Toolbar>
        <Box className="mr-4">
          <Avatar alt="Logo" sx={{ width: avatarSize, height: avatarSize }}>
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
        {menu && <Box className="flex grow justify-center">{menu}</Box>}
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
  menu: PropTypes.arrayOf(PropTypes.node),
};

export default NavBar;
