import * as React from "react";
import { graphql } from "gatsby";
import { Masonry } from "@mui/lab";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import WorksLayout from "../../../layouts/works-layout";

const ML = ({ data }) => {
  return (
    <WorksLayout>
      <Typography className="my-4" variant="h3" align="center">
        Machine Learning
      </Typography>
    </WorksLayout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { category: { eq: "machine-learning" } } }) {
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

export default ML;
