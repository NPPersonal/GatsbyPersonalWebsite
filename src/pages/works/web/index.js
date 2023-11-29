import * as React from "react";
import { graphql, navigate } from "gatsby";
import WorksLayout from "../../../layouts/works-layout";
import { Masonry } from "@mui/lab";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const Web = ({ data }) => {
  return (
    <WorksLayout>
      <Typography className="my-4" variant="h3" align="center">
        Web
      </Typography>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
      >
        {data.allMdx.nodes.map((item) => (
          <Card
            key={item.id}
            className="group relative cursor-pointer hover:scale-105 transition duration-150 ease-in-out"
            raised
            onClick={() => navigate(`/works/${item.frontmatter.slug}`)}
          >
            <CardMedia
              className="group-hover:blur-sm"
              component="img"
              image={`${item.frontmatter.preview}`}
              alt={`${item.frontmatter.name}`}
            />
            <Box className="absolute invisible group-hover:visible top-0 left-0 right-0 bottom-0 px-4 py-4 text-white backdrop-blur-sm bg-black/50">
              <Typography className="mb-4" variant="h4" align="center">
                {item.frontmatter.name}
              </Typography>
              <Typography variant="body">
                {item.frontmatter.description}
              </Typography>
            </Box>
          </Card>
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
