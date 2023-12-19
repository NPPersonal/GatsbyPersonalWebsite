import * as React from "react";
import { Button } from "@mui/material";
import CommonLayout from "../layouts/common-layout";

const IndexPage = () => {
  return (
    <CommonLayout>
      <Button variant="contained">Hello</Button>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
