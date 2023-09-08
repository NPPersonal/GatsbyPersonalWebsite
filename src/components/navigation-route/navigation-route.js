import * as React from "react";
import PropTypes from "prop-types";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const borderColor = "border-red-500";
const borderWidthTopLeft = "border-l-1 border-t-1 border-b-0 border-r-0";
const borderWidthBottomRight = "border-l-0 border-t-0 border-b-1 border-r-1";
const wExpand = "4";
const hExpand = "4";

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
      <Box className="group relative">
        <Box
          className={`absolute w-0 h-0 rounded-sm border-solid border-transparent ${borderWidthTopLeft} 
          transition-all duration-700 ease-in-out
          group-hover:w-${wExpand} group-hover:h-${hExpand} group-hover:${borderColor}`}
        />
        <Box className="m-2 flex items-center" onClick={handleClick}>
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
        <Box
          className={`absolute bottom-0 right-0 w-0 h-0 
          rounded-sm border-solid border-transparent ${borderWidthBottomRight} 
          transition-all duration-700 ease-in-out
          group-hover:w-${wExpand} group-hover:h-${hExpand} group-hover:${borderColor}`}
        />
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
