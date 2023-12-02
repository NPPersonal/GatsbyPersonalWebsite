import * as React from "react";
import WorksLayout from "../../layouts/works-layout";
import { graphql, navigate } from "gatsby";
import { Button, Box, Paper, Container, Typography, Card } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import Carousel from "react-material-ui-carousel";

const WorkTemplate = ({ data, children }) => {
  console.log(children);
  return (
    <WorksLayout>
      <Button className="my-4" variant="contained" onClick={() => navigate(-1)}>
        ⬅ Back
      </Button>
      <Box className="mb-8 flex flex-col justify-center items-center">
        <Typography className="mb-4" variant="h2">
          {data.mdx.frontmatter.name}
        </Typography>
      </Box>
      <Box className="mb-8 flex justify-center items-center">
        <Carousel
          className="w-[30%]"
          animation="slide"
          interval={5000}
          navButtonsAlwaysInvisible
        >
          {data.mdx.frontmatter.images.map((url, i) => (
            <Box
              className="flex justify-center items-center"
              key={`${url}-${i}`}
            >
              <img src={url} alt={url} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <MDXProvider>{children}</MDXProvider>
    </WorksLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        name
        preview
        category
        author
        images
      }
      id
    }
  }
`;

export default WorkTemplate;
