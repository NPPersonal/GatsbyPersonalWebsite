// i18next-extract-mark-ns-start navigation-route

import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useI18next } from "gatsby-plugin-react-i18next";

/**
 * Display a navigation route or a set of sub routes in a menu
 *
 * @param data is an object about the route and sub routes under it
 * @param data.name is this route's name which will be display at top level
 * @param data.metadata **Optional** is this route's internal website route address it use Gatsby's `Link`
 * @param data.children is an array of sub routes in pop up menu when this route is clicked
 * @param data.children.name is sub route's name which will be display in menu
 * @param data.children.metadata **Optional** is sub route's internal website route address it use Gatsby's `Link`
 * @param props any props will be passed to Material UI's `Box` component
 * @returns
 */
const NavigationRoute = ({ data, ...rest }) => {
  const { t } = useI18next();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(data.children && true);
  };
  const handleClose = (_event) => {
    setOpen(false);
  };

  return (
    <Box {...rest}>
      <Box
        className="m-2 flex items-center hover:text-red-500 hover:scale-125 transition duration-150 ease-in-out"
        onClick={handleClick}
      >
        <Typography className="text-2xl cursor-pointer">
          {data.children ? (
            t(data.name)
          ) : (
            <GatsbyStyledLink to={data.metadata.route}>
              {t(data.name)}
            </GatsbyStyledLink>
          )}
        </Typography>
        {data.children && (
          <KeyboardArrowUpIcon
            className={`transition-all ease-in-out ${
              open ? "rotate-180" : "-rotate-"
            } duration-500`}
          />
        )}
      </Box>
      {data.children && (
        <Menu
          id={`${data.name}-menu`}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          disableScrollLock={true}
          disableAutoFocus={true}
          disablePortal={true}
        >
          {data.children.map((item, i) => {
            if (item.metadata.route) {
              return (
                <GatsbyStyledLink
                  key={`${item.name}-${i}`}
                  to={item.metadata.route}
                >
                  <MenuItem>
                    <Typography>{t(item.name)}</Typography>
                  </MenuItem>
                </GatsbyStyledLink>
              );
            } else {
              return (
                <MenuItem key={`${item.name}-${i}`}>
                  <Typography>{t(item.name)}</Typography>
                </MenuItem>
              );
            }
          })}
        </Menu>
      )}
    </Box>
  );
};

NavigationRoute.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    metadata: PropTypes.object,
    children: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default NavigationRoute;
