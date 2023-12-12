import * as React from "react";
import { graphql, navigate } from "gatsby";
import { Masonry } from "@mui/lab";
import { Typography } from "@mui/material";
import WorksLayout from "../../../layouts/works-layout";
import WorkCard from "../../../components/work-card/work-card";

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
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
      >
        {data.allMdx.nodes.map((item) => (
          <WorkCard
            key={item.id}
            preivew_img_url={item.frontmatter.preview}
            preview_img_id={item.frontmatter.preview_img_id}
            name={item.frontmatter.name}
            description={item.frontmatter.description}
            onClick={() => navigate(`/works/${item.frontmatter.slug}`)}
          />
        ))}
      </Masonry>
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
