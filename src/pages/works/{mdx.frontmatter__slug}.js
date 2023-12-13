import * as React from "react";
import WorksLayout from "../../layouts/works-layout";
import { graphql, navigate } from "gatsby";
import { Button, Box, Typography } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import Carousel from "react-material-ui-carousel";
import CarouselCard from "../../components/carousel-card/carousel-card";

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
      <Carousel
        className="mb-8"
        animation="slide"
        interval={5000}
        navButtonsAlwaysInvisible
        autoPlay
      >
        {data.mdx.frontmatter.images_id.map((image_id, i) => (
          <CarouselCard
            key={`${image_id}-${i}`}
            imageId={image_id}
            imageHeight={400}
          />
        ))}
      </Carousel>

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
        images_id
      }
      id
    }
  }
`;

export default WorkTemplate;
