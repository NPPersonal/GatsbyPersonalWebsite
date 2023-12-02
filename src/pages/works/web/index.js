import * as React from "react";
import { graphql, navigate } from "gatsby";
import WorksLayout from "../../../layouts/works-layout";
import { Masonry } from "@mui/lab";
import WorkCard from "../../../components/work-card/work-card";
import { Typography } from "@mui/material";

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
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
      >
        {data.allMdx.nodes.map((item) => (
          <WorkCard
            key={item.id}
            preivew_img_url={item.frontmatter.preview}
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
    allMdx(filter: { frontmatter: { category: { eq: "web" } } }) {
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

export default Web;
