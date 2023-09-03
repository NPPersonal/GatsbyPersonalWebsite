import * as React from "react";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const RootLayout = ({ children }) => {
  const { theme } = React.useContext(MUIThemeContext);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default RootLayout;
