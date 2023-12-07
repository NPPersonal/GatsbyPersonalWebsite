import * as React from "react";
import CommonLayout from "../../layouts/common-layout";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <CommonLayout>
      <Typography className="my-4" variant="h4" align="center">
        About Me
      </Typography>
    </CommonLayout>
  );
};

export default About;
