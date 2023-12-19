import "./src/styles/global.css";
import * as React from "react";
import MUIThemeProvider from "./src/components/mui-theme/mui-theme-provider";
import RootLayout from "./src/layouts/root-layout";

export const wrapPageElement = ({ element, props }) => {
  return (
    <MUIThemeProvider>
      <RootLayout {...props}>{element}</RootLayout>
    </MUIThemeProvider>
  );
};
