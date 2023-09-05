import * as React from "react";
import PropTypes from "prop-types";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * Display a navigation route or a set of sub routes in a menu
 *
 * @param data is an object about the route and sub routes under it
 * @param data.title is this route's name which will be display at top level
 * @param data.route **Optional** is this route's internal website route address it use Gatsby's `Link`
 * @param data.subRoutes is an array of sub routes in pop up menu when this route is clicked
 * @param data.subRoutes.title is sub route's name which will be display in menu
 * @param data.subRoutes.route **Optional** is sub route's internal website route address it use Gatsby's `Link`
 * @param props any props will be passed to Material UI's `Box` component
 * @returns
 */
const NavigationRoute = ({ data, ...rest }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(data.subRoutes && true);
  };
  const handleClose = (_event) => {
    setOpen(false);
  };

  return (
    <Box {...rest}>
      <Box className="flex items-center" onClick={handleClick}>
        <Typography className="text-2xl cursor-pointer">
          {data.route ? (
            <GatsbyStyledLink to={data.route}>{data.title}</GatsbyStyledLink>
          ) : (
            data.title
          )}
        </Typography>
        <span
          className={`${data.subRoutes ? "block" : "hidden"} flex items-center`}
        >
          {data.subRoutes && (
            <KeyboardArrowUpIcon
              className={`transition-all ease-in-out ${
                open ? "rotate-180" : "-rotate-"
              } duration-500`}
            />
          )}
        </span>
      </Box>
      {data.subRoutes && !data.route && (
        <Menu
          id={`${data.title}-menu`}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
        >
          {data.subRoutes &&
            data.subRoutes.map((item, i) => {
              return (
                <MenuItem key={`${item.title}-${i}`}>
                  <Typography>
                    {item.route ? (
                      <GatsbyStyledLink to={item.route || ""}>
                        {item.title}
                      </GatsbyStyledLink>
                    ) : (
                      item.title
                    )}
                  </Typography>
                </MenuItem>
              );
            })}
        </Menu>
      )}
    </Box>
  );
};

NavigationRoute.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string,
    subRoutes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        route: PropTypes.string,
      })
    ),
  }),
};

export default NavigationRoute;
