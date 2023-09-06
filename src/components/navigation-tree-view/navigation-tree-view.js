import * as React from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Stack, Typography } from "@mui/material";

const folder = {
  name: "top",
  children: [
    {
      name: "src",
      metadata: { prefix: "section" },
      children: [
        { name: "index.js", metadata: { prefix: "link" } },
        { name: "styles.css" },
      ],
    },
    {
      name: "node_modules",
      children: [
        {
          name: "react-accessible-treeview",
          children: [{ name: "bundle.js" }],
        },
        { name: "react", children: [{ name: "bundle.js" }] },
      ],
    },
    {
      name: ".npmignore",
    },
    {
      name: "package.json",
    },
    {
      name: "webpack.config.js",
    },
  ],
};

const data = flattenTree(folder);

const NavigationTreeView = () => {
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
              />
            )}
            <Typography>{element.name}</Typography>
          </Stack>
        );
      }}
    />
  );
};

export default NavigationTreeView;
