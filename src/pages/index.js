// i18next-extract-mark-ns-start index

import * as React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import SpinText from "../components/spin-text/spin-text";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import RenderInView from "../components/render-in-view/render-in-view";
import { StaticImage } from "gatsby-plugin-image";
import {
  ExFade,
  ExSlide,
} from "../components/mui-extension/transition-extension";
import { defaultMDXComponents } from "../mdx/mdx-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import GatsbyStyledLink from "../components/gatsby-styled-link/gatsby-styled-link";

const mdxComponents = {
  p: (props) => (
    <Typography className="font-bold text-lg" variant="body" {...props} />
  ),
  a: (props) => (
    <GatsbyStyledLink
      to={props.href}
      style={{ color: "inherit", textDecoration: "underline" }}
      {...props}
    >
      <Typography
        className="mx-1 inline font-bold text-lg bg-slate-400"
        variant="body"
      >
        {props.children}
      </Typography>
    </GatsbyStyledLink>
  ),
};

const Home = (props) => {
  const { t } = useTranslation();
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const isWrap = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <CommonLayout
      navbarTransition
      navbarTransitionDelay={6900}
      footerTransition
      footerTransitionDelay={6900}
    >
      <Box
        className={`flex ${
          isWrap ? "flex-wrap" : "flex-nowrap"
        } flex-row justify-center items-start`}
      >
        <RenderInView
          className="mx-8 shrink-[2]"
          options={{
            delay: 1000,
            triggerOnce: true,
            trackVisibility: true,
          }}
        >
          <Typography
            className="leading-[1.5] mb-4 font-bold"
            variant="h2"
            align="center"
          >
            <SpinText
              text={t("hello")}
              duration={250}
              sequential
              randLetters={t("randLetters")}
              randLetterColor={letterSpinColor}
            />
            <SpinText
              text={t("welcome")}
              duration={200}
              delay={1600}
              sequential
              randLetters={t("randLetters")}
              randLetterColor={letterSpinColor}
            />
          </Typography>
          <ExFade in delay={4000} timeout={2000}>
            <Markdown
              components={{ ...defaultMDXComponents, ...mdxComponents }}
              rehypePlugins={[rehypeRaw]}
            >
              {props.data.mdx.body}
            </Markdown>
          </ExFade>
        </RenderInView>
        <ExSlide direction="left" delay={4900} in timeout={2000}>
          <Box className="relative my-14">
            <StaticImage
              className="rounded-lg"
              src="../../assets/landing.jpeg"
              placeholder="blurred"
              alt="landing"
              layout="constrained"
              height={600}
            />
            <StaticImage
              className="absolute left-[-30px] bottom-[-55px] bg-transparent"
              src="../../assets/tap.png"
              placeholder="blurred"
              alt="tap-left-bottom"
              width={100}
            />
            <StaticImage
              className="absolute right-[-35px] top-[-60px] rotate-180 bg-transparent"
              src="../../assets/tap.png"
              placeholder="blurred"
              alt="tap-top-right"
              width={100}
            />
          </Box>
        </ExSlide>
      </Box>
    </CommonLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
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
      frontmatter: { category: { eq: "landing" } }
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

export default Home;

export const Head = () => <Seo title="Home" description="This is home page" />;
