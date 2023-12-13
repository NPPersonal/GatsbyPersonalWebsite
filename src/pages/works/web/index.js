import * as React from "react";
import { graphql } from "gatsby";
import WorksLayout from "../../../layouts/works-layout";
import { Typography } from "@mui/material";
import WorkCollection from "../../../components/work-collection/work-collection";

const Web = ({ data }) => {
  if (data.allMdx.nodes.lenght === 0) {
    return (
      <WorksLayout title="Web App">
        <Typography className="my-4" variant="h4" align="center">
          There is no web app at moment
        </Typography>
      </WorksLayout>
    );
  }
  return (
    <WorksLayout title="Web App">
      <WorkCollection mdxDataNodes={data.allMdx.nodes} />
    </WorksLayout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { category: { eq: "web" } } }) {
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

export default Web;
