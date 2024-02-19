import * as React from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { Stack, Typography, Box } from "@mui/material";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import PropTypes from "prop-types";
import { useI18next } from "gatsby-plugin-react-i18next";

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
  const { t } = useI18next();
  const data = flattenTree({ name: "tree", children: routes });
  const handleItemClick = (element) => {
    if (onTreeItemClicked) {
      onTreeItemClicked(element);
    }
  };
  return (
    <TreeView
      className="[&>li]:my-2"
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
            className="my-2"
            direction="row"
            {...getNodeProps()}
            style={{ paddingLeft: 20 * (level - 1) }}
          >
            {isBranch && isExpanded && <RemoveIcon fontSize="small" />}
            {isBranch && !isExpanded && <AddIcon fontSize="small" />}
            {!isBranch && <ShortcutIcon fontSize="small" />}

            {isBranch ? (
              <Typography variant="button" color="primary.dark">
                {t(element.name)}
              </Typography>
            ) : (
              <Typography variant="button">
                <GatsbyStyledLink to={element.metadata.route}>
                  <Box
                    onClick={() => handleItemClick(element)}
                    className="group"
                  >
                    {t(element.name)}
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
