import * as React from "react";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
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

const NavBar = ({ title = "", avatarSiz = 44 }) => {
  const { mode, toggleColorMode } = React.useContext(MUIThemeContext);

  return (
    <AppBar>
      <Toolbar>
        <Box>
          <Avatar
            className="mx-4"
            alt="avatar"
            sx={{ width: avatarSiz, height: avatarSiz }}
          >
            <StaticImage
              src="../images/logo.png"
              alt="Nelson profile"
              placeholder="blurred"
              layout="constrained"
            />
          </Avatar>
        </Box>
        <Typography className="flex grow text-4xl font-bold hidden sm:block">
          {title}
        </Typography>
        <Box className="mx-4">
          <IconButton onClick={() => toggleColorMode()}>
            {mode === "light" ? <Brightness7Rounded /> : <Brightness4Rounded />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
