import * as React from "react";
import { graphql } from "gatsby";
import WorksLayout from "../../../layouts/works-layout";
import { Masonry } from "@mui/lab";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const Mobile = () => {
  return (
    <WorksLayout>
      <Typography className="my-4" variant="h3" align="center">
        Mobile
      </Typography>
    </WorksLayout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { category: { eq: "mobile" } } }) {
      nodes {
        frontmatter {
          author
          name
          slug
          title
          preview
          description
        }
        id
      }
    }
  }
`;

export default Mobile;
