import "./src/styles/global.css";
import React from "react";
import MUIThemeProvider from "./src/components/mui-theme/mui-theme-provider";
import MainLayout from "./src/layouts/main-layout";

export const wrapRootElement = ({ element }) => {
  return element;
};
export const wrapPageElement = ({ element, props }) => {
  return (
    <MUIThemeProvider>
      <MainLayout {...props}>{element}</MainLayout>
    </MUIThemeProvider>
  );
};
