import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

/**
 * A styled [Gatsby Link](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/)
 * with Material UI
 *
 * If `to` prop is external link then [Material UI's Link](https://mui.com/material-ui/react-link/#api)
 * will be returned
 *
 * @param to **Required** a string of internal or external address
 * @param color **Optional** color of text default is white
 *
 * @returns
 */
const GatsbyStyledLink = ({ to, children, ...rest }) => {
  if (to.startsWith("http") || to.startsWith("https")) {
    return (
      <a
        style={{ color: "inherit", textDecoration: "none" }}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className="text-inherit no-underline"
      to={to}
      style={{ color: "inherit", textDecoration: "none" }}
      activeStyle={{ color: "inherit", textDecoration: "none" }}
      {...rest}
    >
      {children}
    </Link>
  );
};

GatsbyStyledLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default GatsbyStyledLink;
