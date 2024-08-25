// i18next-extract-mark-ns-start navigation-route

import React from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useI18next } from "gatsby-plugin-react-i18next";
import { MUIThemeContext } from "../mui-theme/mui-theme-provider";
import { Slide, Zoom } from "@mui/material";

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
  const { theme } = React.useContext(MUIThemeContext);
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
    <React.Fragment>
      <div
        className="relative overflow-hidden inline-block 
      px-4 py-2 rounded-full"
      >
        <div
          className="flex items-center group cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`absolute z-[-1] rounded-full
          transition-all duration-1000 ease-out
          h-[50px] w-[50px] -bottom-[100%] -left-[20%] 
          group-hover:scale-[7] group-hover:-left-3`}
            style={{ backgroundColor: theme.palette.primary.light }}
          />
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
        </div>
      </div>
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
          TransitionComponent={Zoom}
        >
          {data.children.map((item, i) =>
            item.metadata.route ? (
              <GatsbyStyledLink
                key={`${item.name}-${i}`}
                to={item.metadata.route}
              >
                <MenuItem className="relative group">
                  <div
                    className="absolute z-[0] rounded-full
                    transition-all duration-700 ease-out
                    h-full w-[125%] top-0 -left-[125%]
                    group-hover:-left-[10%]"
                    style={{
                      backgroundColor: `${theme.palette.primary.light}`,
                    }}
                  />
                  <Typography zIndex={1}>{t(item.name)}</Typography>
                </MenuItem>
              </GatsbyStyledLink>
            ) : (
              <MenuItem key={`${item.name}-${i}`}>
                <Typography>{t(item.name)}</Typography>
              </MenuItem>
            )
          )}
        </Menu>
      )}
    </React.Fragment>
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
