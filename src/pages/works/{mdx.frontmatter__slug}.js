import * as React from "react";
import WorksLayout from "../../layouts/works-layout";
import { graphql, navigate } from "gatsby";
import { Button, Box, Typography, IconButton } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import Carousel from "react-material-ui-carousel";
import CarouselCard from "../../components/carousel-card/carousel-card";
import { getCloudinaryImage } from "../../libs/cloudinary";
import GatsbyStyledLink from "../../components/gatsby-styled-link/gatsby-styled-link";
import Seo from "../../components/seo/seo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const mdxComponents = {
  h2: (props) => (
    <Typography className="font-bold" variant="h2" align="center" {...props} />
  ),
  h4: (props) => <Typography variant="h4" align="center" {...props} />,
  em: (props) => <Typography className="font-bold" {...props} />,
  a: (props) => (
    <GatsbyStyledLink
      className="inline font-medium hover:font-extrabold italic"
      to={props.href}
      style={{ color: "inherit", textDecoration: "underline" }}
      {...props}
    />
  ),
};

const WorkTemplate = ({ data, children }) => {
  return (
    <WorksLayout>
      <IconButton
        className="my-4"
        aria-label="back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <Box className="mb-8 flex flex-col justify-center items-center">
        <Typography className="mb-4" variant="h2">
          {data.mdx.frontmatter.name}
        </Typography>
      </Box>
      <div className="mb-8">
        <Carousel
          animation="slide"
          interval={5000}
          navButtonsAlwaysInvisible
          autoPlay
        >
          {data.mdx.frontmatter.images_id.map((image_id, i) => {
            const image = getCloudinaryImage(image_id)
              .format("auto")
              .quality("auto");
            return (
              <CarouselCard
                key={`${image_id}-${i}`}
                cloudinaryImage={image}
                imageHeight={400}
              />
            );
          })}
        </Carousel>
      </div>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
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

export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.name}
    description={data.mdx.frontmatter.title}
  />
);
