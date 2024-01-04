import * as React from "react";
import { Button } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";

const IndexPage = () => {
  return (
    <CommonLayout>
      <Button variant="contained">Hello</Button>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" description="This is home page" />;
