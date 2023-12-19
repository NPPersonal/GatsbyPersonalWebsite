import * as React from "react";
import { Typography } from "@mui/material";
import CommonLayout from "./common-layout";

const WorksLayout = ({ title, children }) => {
  return (
    <CommonLayout>
      <Typography className="my-4" variant="h3" align="center">
        {title}
      </Typography>
      {children}
    </CommonLayout>
  );
};

export default WorksLayout;
