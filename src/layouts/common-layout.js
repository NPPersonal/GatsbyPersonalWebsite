import * as React from "react";
import { Container } from "@mui/material";

/**
 * Common layout that use MainLayout
 * and wrap child with container which
 * include a gap on left and right
 * @returns
 */
const CommonLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CommonLayout;
