import * as React from "react";
import MainLayout from "./main-layout";
import { Container, Typography } from "@mui/material";

const WorksLayout = ({ title, children }) => {
  return (
    <MainLayout>
      <Container>
        <Typography className="my-4" variant="h3" align="center">
          {title}
        </Typography>
        {children}
      </Container>
    </MainLayout>
  );
};

export default WorksLayout;
