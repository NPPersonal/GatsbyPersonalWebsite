import * as React from "react";
import PropTypes from "prop-types";
import { Box, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * Display a navigation link or a set of links in a menu
 *
 * @param data is an object about the link and links under it
 * @param data.title is this link's name which will be display at top level
 * @param data.link **Optional** is this link's internal website link address it use Gatsby's `Link`
 * @param data.subLinks is an array of sub links in pop up menu when this link is clicked
 * @param data.subLinks.title is sub link's name which will be display in menu
 * @param data.subLinks.link **Optional** is sub link's internal website link address it use Gatsby's `Link`
 * @param props any props will be passed to Material UI's `Box` component
 * @returns
 */
const NavMenuLink = ({ data, ...rest }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(data.subLinks && true);
  };
  const handleClose = (_event) => {
    setOpen(false);
  };

  return (
    <Box {...rest}>
      <Typography
        className="flex items-center text-2xl cursor-pointer"
        onClick={handleClick}
      >
        {data.link ? (
          <GatsbyStyledLink to={data.link} color={theme.palette.text.primary}>
            {data.title}
          </GatsbyStyledLink>
        ) : (
          data.title
        )}
        <span
          className={`${data.subLinks ? "block" : "hidden"} flex items-center`}
        >
          {data.subLinks && (
            <KeyboardArrowUpIcon
              className={`transition-all ease-in-out ${
                open ? "rotate-180" : "-rotate-"
              } duration-500`}
            />
          )}
        </span>
      </Typography>
      <Menu
        id={`${data.title}-menu`}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
      >
        {data["subLinks"] &&
          data["subLinks"].map((item, i) => {
            return (
              <MenuItem key={`${item.title}-${i}`}>
                <Typography>
                  {item.link ? (
                    <GatsbyStyledLink
                      to={item.link || ""}
                      color={theme.palette.text.primary}
                    >
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
    </Box>
  );
};

NavMenuLink.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    subLinks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
      })
    ),
  }),
};

export default NavMenuLink;
