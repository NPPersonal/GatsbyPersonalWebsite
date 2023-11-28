import * as React from "react";
import MainLayout from "./main-layout";
import { Container } from "@mui/material";

const WorksLayout = ({ children }) => {
  return (
    <MainLayout>
      <Container>{children}</Container>
    </MainLayout>
  );
};

export default WorksLayout;
