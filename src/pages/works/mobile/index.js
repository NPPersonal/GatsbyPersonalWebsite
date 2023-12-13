import * as React from "react";
import { graphql } from "gatsby";
import WorksLayout from "../../../layouts/works-layout";
import { Typography } from "@mui/material";
import WorkCollection from "../../../components/work-collection/work-collection";

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
  return (
    <WorksLayout title="Mobile App">
      <WorkCollection mdxDataNodes={data.allMdx.nodes} />
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
          preview_img_id
        }
        id
      }
    }
  }
`;

export default Mobile;
