import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import * as React from "react";
import theme from "../themes/theme";

const RootLayout = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default RootLayout;
