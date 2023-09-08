import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import NavigationRoute from "../navigation-route/navigation-route";
import {
  Box,
  Container,
  IconButton,
  Avatar,
  Divider,
  Drawer,
} from "@mui/material";
import NavigationTreeView from "../navigation-tree-view/navigation-tree-view";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * Display a drawer
 *
 * @param routes an array of route data
 * @param onItemClick a function take an argument which is route
 * and will be called when a route in drawer is clicked
 * @param logoSize size of logo default 44
 *
 * @returns React node
 */
const NavBarDrawer = ({ routes, onRouteClick, logoSize = 44, ...rest }) => {
  const handleRouteClick = (element) => {
    onRouteClick(element);
  };

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <Drawer {...rest}>
      <Container className="h-[100%] flex flex-col">
        <Box className="m-2 flex justify-center content-center">
          <Avatar alt="Logo" sx={{ width: logoSize, height: logoSize }}>
            <StaticImage
              src="../../images/logo.png"
              alt="Logo image"
              placeholder="blurred"
              layout="constrained"
            />
          </Avatar>
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box className="m-2 grow flex justify-center content-center">
          <NavigationTreeView
            routes={routes}
            onTreeItemClicked={handleRouteClick}
          />
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box className="m-2 flex justify-center content-center">
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              openLink("https://www.linkedin.com/in/ming-chung-hung-38125a117/")
            }
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Drawer>
  );
};

export default NavBarDrawer;

NavBarDrawer.propTypes = {
  routes: PropTypes.arrayOf(NavigationRoute.propTypes.data),
  onRouteClick: PropTypes.func,
  logoSize: PropTypes.number,
};
