import React from "react";
import Box from "@mui/material/Box";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";

/**
 * Main layout the top most layout
 *
 * **PS: Do not use this layout to wrap any page**
 *
 * This layout can only be used in `wrapPageElement`
 * in gatsby-browser.js
 * @returns
 */
const MainLayout = ({ location, children }) => {
  const { theme } = React.useContext(MUIThemeContext);
  const bg = theme.palette.background.gradient;
  return (
    <Box
      sx={{
        background: bg,
        minHeight: "100%",
      }}
    >
      <Box>{children}</Box>
    </Box>
  );
};

export default MainLayout;
