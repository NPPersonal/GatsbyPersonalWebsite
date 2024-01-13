import * as React from "react";
import { Container } from "@mui/material";
import ParticleBG from "../components/particle-bg/particle-bg";
import { config as floatingSnowConfig } from "../components/particle-bg/floating-snow-config";

/**
 * Common layout that use MainLayout
 * and wrap child with container which
 * include a gap on left and right
 * @returns
 */
const CommonLayout = ({ children }) => {
  return (
    <React.Fragment>
      <ParticleBG particleConfig={floatingSnowConfig} />
      <Container className="relative">{children}</Container>
    </React.Fragment>
  );
};

export default CommonLayout;
