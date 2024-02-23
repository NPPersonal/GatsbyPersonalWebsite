// i18next-extract-mark-ns-start about-me

import * as React from "react";
import CommonLayout from "../../layouts/common-layout";
import { Typography, Box } from "@mui/material";
import Seo from "../../components/seo/seo";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { getCloudinaryImage } from "../../libs/cloudinary";
import { MUIThemeContext } from "../../components/mui-theme/mui-theme-provider";
import RenderInView from "../../components/render-in-view/render-in-view";
import SpinText from "../../components/spin-text/spin-text";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
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
      👉 {props.children}
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

const About = (props) => {
  const { t } = useI18next();
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const options = {
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  };
  return (
    <CommonLayout>
      <RenderInView options={options}>
        <Typography
          className="leading-loose font-bold"
          variant="h3"
          align="center"
        >
          <SpinText
            text={t("about-me-title")}
            duration={200}
            sequential
            randLetterColor={letterSpinColor}
          />
        </Typography>
      </RenderInView>
      <Box className="flex flex-col items-center my-4">
        <AdvancedImage
          className="rounded-lg drop-shadow-2xl"
          style={{ width: 250 }}
          cldImg={getCloudinaryImage(
            "personal-web-image-assets/web-assets/profile"
          )}
          plugins={[
            lazyload(),
            responsive({ steps: 100 }),
            placeholder({ mode: "blur" }),
          ]}
        />
        <Box className="my-4">
          <RenderInView options={options}>
            <Typography
              className="text-xl font-bold"
              variant="caption"
              align="center"
            >
              <SpinText
                text={t("full-name")}
                duration={100}
                delay={2000}
                randLetterColor={letterSpinColor}
              />
            </Typography>
          </RenderInView>
          <RenderInView options={options}>
            <Typography
              className="text-xl font-bold"
              variant="caption"
              align="center"
            >
              <SpinText
                text={t("location")}
                duration={100}
                delay={4000}
                randLetterColor={letterSpinColor}
              />
            </Typography>
          </RenderInView>
          <RenderInView options={options}>
            <Typography
              className="text-xl font-bold"
              variant="caption"
              align="center"
            >
              <SpinText
                text={t("speak-language")}
                duration={100}
                delay={6000}
                randLetterColor={letterSpinColor}
              />
            </Typography>
          </RenderInView>
        </Box>
      </Box>
      <Markdown components={defaultMDXComponents} rehypePlugins={[rehypeRaw]}>
        {props.data.mdx.body}
      </Markdown>
    </CommonLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "about-me"] }
        language: { eq: $language }
      }
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
      frontmatter: { category: { eq: "about-me" } }
    ) {
      frontmatter {
        author
        title
        slug
        preview_img_id
        preview
        name
        images_id
        description
        category
      }
      body
    }
  }
`;

export default About;

export const Head = () => <Seo title="About" description="About me" />;
