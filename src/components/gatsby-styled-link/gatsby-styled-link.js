import { Link } from "gatsby";
import * as React from "react";

/**
 * A styled [Gatsby Link](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/)
 *
 * @param to **Required** a string of internal website address
 * @param color **Optional** color of text default is white
 *
 * @returns
 */
const GatsbyStyledLink = ({ to, children, color = "white", ...rest }) => {
  return (
    <Link
      to={to}
      activeStyle={{ color: color, textDecoration: "none" }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default GatsbyStyledLink;
