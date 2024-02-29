import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import NavigationRoute from "../navigation-route/navigation-route";
import { Box, Container, Avatar, Divider, Drawer } from "@mui/material";
import NavigationTreeView from "../navigation-tree-view/navigation-tree-view";
import SocialLinks from "../social-links/social-links";
import SocialLinkData from "../../../static/social-links/social-links.json";

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
const NavBarDrawer = ({ routes, onRouteClick, ...rest }) => {
  const handleRouteClick = (element) => {
    onRouteClick(element);
  };

  // const openLink = (link) => {
  //   window.open(link, "_blank");
  // };
  return (
    <Drawer {...rest}>
      <Container className="my-2 flex flex-col justify-around overflow-visible">
        <Box className="my-2 flex justify-center items-center">
          <Avatar alt="Logo" sx={{ width: 44, height: 44 }}>
            <StaticImage
              src="../../images/logo.png"
              alt="Logo image"
              placeholder="blurred"
              layout="fixed"
              width={48}
              height={48}
            />
          </Avatar>
        </Box>
        <Divider className="my-2" orientation="horizontal" />
        <Box className="my-2 flex justify-center content-center">
          <NavigationTreeView
            routes={routes}
            onTreeItemClicked={handleRouteClick}
          />
        </Box>
        <Divider className="my-2" orientation="horizontal" flexItem />
        <SocialLinks socialLinks={SocialLinkData} />
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
