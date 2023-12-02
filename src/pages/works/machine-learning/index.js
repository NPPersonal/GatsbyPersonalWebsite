import * as React from "react";
import { graphql } from "gatsby";
import { Masonry } from "@mui/lab";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import WorksLayout from "../../../layouts/works-layout";

const ML = ({ data }) => {
  if (data.allMdx.nodes.length === 0) {
    return (
      <WorksLayout title="Web App">
        <Typography className="my-4" variant="h4" align="center">
          There is no machine learning app at moment
        </Typography>
      </WorksLayout>
    );
  }
  return <WorksLayout title="Machine Learning"></WorksLayout>;
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
