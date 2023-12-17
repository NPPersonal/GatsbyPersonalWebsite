import * as React from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Stack, Typography, Box } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import PropTypes from "prop-types";

/**
 * Display a tree view of routes
 *
 * @param routes is an array of object of route
 * @param routes.name is name of the route
 * @param routes.metadata is an object of metadata about the route
 * @param routes.metadata.route is the route address of the route
 * @param routes.children is an array of child routes
 * @param routes.children.name is the name of child route
 * @param routes.children.metadata is an object of metadata about child route
 * @param routes.children.metadata.route is the route address of the child route
 * @param onTreeItemClicked is a function take an argument which is about the tree item and
 * this function is called when a tree item is clicked
 * @returns
 */
const NavigationTreeView = ({ routes, onTreeItemClicked }) => {
  const data = flattenTree({ name: "tree", children: routes });
  const handleItemClick = (element) => {
    if (onTreeItemClicked) {
      onTreeItemClicked(element);
    }
  };
  return (
    <TreeView
      data={data}
      aria-label="basic example tree"
      nodeRenderer={({
        element,
        isBranch,
        isExpanded,
        isDisabled,
        getNodeProps,
        level,
        handleSelect,
      }) => {
        return (
          <Stack
            direction="row"
            {...getNodeProps()}
            style={{ paddingLeft: 20 * (level - 1) }}
          >
            {isBranch && (
              <PlayArrowIcon
                className={`transition-all ease-in-out ${
                  isExpanded ? "rotate-90" : "-rotate-0"
                } duration-500`}
                fontSize="small"
              />
            )}

            {isBranch ? (
              <Typography variant="button" color="GrayText">
                {element.name}
              </Typography>
            ) : (
              <Typography variant="button">
                <GatsbyStyledLink to={element.metadata.route}>
                  <Box
                    onClick={() => handleItemClick(element)}
                    className="group"
                  >
                    {element.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
                  </Box>
                </GatsbyStyledLink>
              </Typography>
            )}
          </Stack>
        );
      }}
    />
  );
};

NavigationTreeView.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      metadata: PropTypes.object,
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
  onTreeItemClicked: PropTypes.func,
};

export default NavigationTreeView;
