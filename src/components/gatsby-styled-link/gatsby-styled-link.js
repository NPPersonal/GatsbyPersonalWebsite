import { Link } from "gatsby";
import * as React from "react";

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
