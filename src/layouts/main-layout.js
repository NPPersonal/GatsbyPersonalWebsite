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

const NavBar = ({ title = "Title", avatarSiz = 44 }) => {
  const { mode, toggleColorMode } = React.useContext(MUIThemeContext);

  return (
    <AppBar>
      <Toolbar>
        <Typography className="flex grow text-4xl font-bold hidden sm:block">
          {title}
        </Typography>
        <Box className="mx-4">
          <IconButton onClick={() => toggleColorMode()}>
            {mode === "light" ? <Brightness7Rounded /> : <Brightness4Rounded />}
          </IconButton>
        </Box>
        <Box>
          <Avatar alt="avatar" sx={{ width: avatarSiz, height: avatarSiz }}>
            <StaticImage
              src="../images/profile-avatar-small-256x256.png"
              alt="Nelson profile"
              placeholder="blurred"
              layout="constrained"
              width={avatarSiz}
            />
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar title="Website" />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
