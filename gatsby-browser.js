import "./src/styles/global.css";
import * as React from "react";
import MUIThemeProvider from "./src/components/mui-theme/mui-theme-provider";
import RootLayout from "./src/layouts/ROOT-layout";

export const wrapRootElement = ({ element }) => {
  console.log("wrap root");
  return <MUIThemeProvider>{element}</MUIThemeProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  console.log("wrap page");
  return <RootLayout {...props}>{element}</RootLayout>;
};
