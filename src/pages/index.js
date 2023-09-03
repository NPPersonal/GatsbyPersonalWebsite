import * as React from "react";
import MainLayout from "../layouts/main-layout";
import { Button } from "@mui/material";

const IndexPage = () => {
  return (
    <MainLayout>
      <Button variant="contained">Hello</Button>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
