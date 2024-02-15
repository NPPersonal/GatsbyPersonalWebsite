import * as React from "react";
import { graphql, navigate } from "gatsby";
import { Box, Typography, IconButton } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import Carousel from "react-material-ui-carousel";
import CarouselCard from "../../components/carousel-card/carousel-card";
import { getCloudinaryImage } from "../../libs/cloudinary";
import GatsbyStyledLink from "../../components/gatsby-styled-link/gatsby-styled-link";
import Seo from "../../components/seo/seo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CommonLayout from "../../layouts/common-layout";
import { MUIThemeContext } from "../../components/mui-theme/mui-theme-provider";
import RenderInView from "../../components/render-in-view/render-in-view";
import SpinText from "../../components/spin-text/spin-text";

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
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const options = {
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  };
  return (
    <CommonLayout>
      <IconButton
        className="my-4"
        aria-label="back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <Box className="mb-8 flex flex-col justify-center items-center">
        <RenderInView options={options}>
          <Typography className="my-4" variant="h3">
            <SpinText
              text={data.mdx.frontmatter.name}
              duration={150}
              sequential
              randLetterColor={letterSpinColor}
            />
          </Typography>
        </RenderInView>
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
    </CommonLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        name
        category
        author
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
