import * as React from "react";
import PropTypes from "prop-types";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
            data.name
          ) : (
            <GatsbyStyledLink to={data.metadata.route}>
              {data.name}
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
        >
          {data.children.map((item, i) => {
            return (
              <MenuItem key={`${item.name}-${i}`}>
                <Typography>
                  {item.metadata.route ? (
                    <GatsbyStyledLink to={item.metadata.route || ""}>
                      {item.name}
                    </GatsbyStyledLink>
                  ) : (
                    item.name
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
    name: PropTypes.string.isRequired,
    metadata: PropTypes.object,
    children: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default NavigationRoute;
