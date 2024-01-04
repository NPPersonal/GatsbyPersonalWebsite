import * as React from "react";
import { graphql } from "gatsby";
import { Typography } from "@mui/material";
import WorksLayout from "../../../layouts/works-layout";
import WorkCollection from "../../../components/work-collection/work-collection";
import Seo from "../../../components/seo/seo";

const ML = ({ data }) => {
  if (data.allMdx.nodes.length === 0) {
    return (
      <WorksLayout title="Machine Learning">
        <Typography className="my-4" variant="h4" align="center">
          There is no machine learning app at moment
        </Typography>
      </WorksLayout>
    );
  }
  return (
    <WorksLayout title="Machine Learning">
      <WorkCollection mdxDataNodes={data.allMdx.nodes} />
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
          preview_img_id
        }
        id
      }
    }
  }
`;

export default ML;

export const Head = () => (
  <Seo title="Machine Learning" description="Experience in ML" />
);
