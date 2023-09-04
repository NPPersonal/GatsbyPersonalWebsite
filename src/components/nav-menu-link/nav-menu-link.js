import * as React from "react";
import PropTypes from "prop-types";
import { Box, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
          {data.subLinks && open ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpIcon />
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
