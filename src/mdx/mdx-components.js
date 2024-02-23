import * as React from "react";
import { Typography } from "@mui/material";
import GatsbyStyledLink from "../components/gatsby-styled-link/gatsby-styled-link";

export const defaultMDXComponents = {
  h3: (props) => (
    <Typography className="font-bold" variant="h3" align="center" {...props} />
  ),
  h4: (props) => <Typography variant="h4" align="center" {...props} />,
  p: (props) => (
    <Typography className="font-semibold text-lg" paragraph {...props} />
  ),
  li: (props) => (
    <Typography className="my-1 block font-semibold text-lg" component="li">
      ➡ {props.children}
    </Typography>
  ),
  strong: (props) => (
    <Typography
      className="font-bold text-xl"
      component="strong"
      sx={{ fontStyle: "italic" }}
      {...props}
    />
  ),
  a: (props) => (
    <GatsbyStyledLink
      to={props.href}
      style={{ color: "inherit", textDecoration: "underline" }}
      {...props}
    >
      <Typography
        className="mx-1 inline font-semibold text-lg bg-slate-400"
        component="span"
      >
        {props.children}
      </Typography>
    </GatsbyStyledLink>
  ),
};
