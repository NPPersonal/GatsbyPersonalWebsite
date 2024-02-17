import * as React from "react";
import { Typography } from "@mui/material";
import GatsbyStyledLink from "../components/gatsby-styled-link/gatsby-styled-link";

const defaultMDXComponents = {
  h2: (props) => (
    <Typography className="font-bold" variant="h2" align="center" {...props} />
  ),
  h4: (props) => <Typography variant="h4" align="center" {...props} />,
  p: (props) => <Typography className="font-bold" variant="body" {...props} />,
  em: (props) => <Typography className="font-bold" {...props} />,
  a: (props) => (
    <GatsbyStyledLink
      className="inline font-medium hover:font-extrabold italic"
      to={props.href}
      style={{ color: "inherit", textDecoration: "underline" }}
      {...props}
    />
  ),
};

export { defaultMDXComponents };
