import * as React from "react";
import { graphql, navigate } from "gatsby";
import { Box, Typography, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CarouselCard from "../../components/carousel-card/carousel-card";
import { getCloudinaryImage } from "../../libs/cloudinary";
import Seo from "../../components/seo/seo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CommonLayout from "../../layouts/common-layout";
import { MUIThemeContext } from "../../components/mui-theme/mui-theme-provider";
import RenderInView from "../../components/render-in-view/render-in-view";
import SpinText from "../../components/spin-text/spin-text";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import GatsbyStyledLink from "../../components/gatsby-styled-link/gatsby-styled-link";

const defaultMDXComponents = {
  h3: (props) => (
    <Typography className="font-bold" variant="h3" align="center" {...props} />
  ),
  h4: (props) => <Typography variant="h4" align="center" {...props} />,
  p: (props) => (
    <Typography className="font-semibold text-lg" paragraph {...props} />
  ),
  li: (props) => (
    <Typography className="my-1 block font-semibold text-lg" component="li">
      ➡ {props.children}
    </Typography>
  ),
  strong: (props) => (
    <Typography
      className="font-bold text-xl"
      component="strong"
      sx={{ fontStyle: "italic" }}
      {...props}
    />
  ),
  a: (props) => (
    <GatsbyStyledLink
      to={props.href}
      style={{ color: "inherit", textDecoration: "underline" }}
      {...props}
    >
      <Typography
        className="mx-1 inline font-semibold text-lg bg-slate-400"
        component="span"
      >
        {props.children}
      </Typography>
    </GatsbyStyledLink>
  ),
};

const WorkTemplate = (props) => {
  const { data } = props;
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
          <Typography className="my-4 font-bold" variant="h3">
            <SpinText
              text={data.mdx.frontmatter.name}
              duration={150}
              sequential
              randLetterColor={letterSpinColor}
            />
          </Typography>
        </RenderInView>
      </Box>
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
      <Box className="my-4">
        <Markdown components={defaultMDXComponents} rehypePlugins={[rehypeRaw]}>
          {props.data.mdx.body}
        </Markdown>
      </Box>
    </CommonLayout>
  );
};

export const query = graphql`
  query ($slug: String!, $language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx(
      fields: { locale: { eq: $language } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        slug
        name
        category
        author
        images_id
      }
      id
      body
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
