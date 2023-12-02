import * as React from "react";
import { graphql } from "gatsby";
import WorksLayout from "../../../layouts/works-layout";
import { Masonry } from "@mui/lab";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const Mobile = ({ data }) => {
  if (data.allMdx.nodes.length === 0) {
    return (
      <WorksLayout title="Web App">
        <Typography className="my-4" variant="h4" align="center">
          There is no mobile app at moment
        </Typography>
      </WorksLayout>
    );
  }
  return <WorksLayout title="Mobile App"></WorksLayout>;
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
