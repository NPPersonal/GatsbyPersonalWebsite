import * as React from "react";
import MainLayout from "./main-layout";
import { Container } from "@mui/material";

const CommonLayout = ({ children }) => {
  return (
    <MainLayout>
      <Container>{children}</Container>
    </MainLayout>
  );
};

export default CommonLayout;
