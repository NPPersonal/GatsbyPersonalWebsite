import * as React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import SpinText from "../components/spin-text/spin-text";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import RenderInView from "../components/render-in-view/render-in-view";
import { StaticImage } from "gatsby-plugin-image";
import Landing from "../mdx/landing/landing.mdx";
import { MDXProvider } from "@mdx-js/react";
import {
  ExFade,
  ExSlide,
} from "../components/mui-extension/transition-extension";
import { defaultMDXComponents } from "../mdx/mdx-components";
import {
  Link,
  useI18next,
  Trans,
  useTranslation,
} from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const mdxComponents = {
  p: (props) => (
    <Typography className="font-bold text-lg" variant="body" {...props} />
  ),
};

const Home = (props) => {
  const { t } = useTranslation();
  const { languages, originalPath } = useI18next();
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const isWrap = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(t("title"));
  console.log(props);
  return (
    <CommonLayout>
      <Box>
        <Trans i18nKey="title">Hi</Trans>
      </Box>
      <ul>
        {languages.map((lang) => {
          return (
            <li key={lang}>
              <Link to={originalPath} language={lang}>
                {lang}
              </Link>
            </li>
          );
        })}
      </ul>
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
              text="HELLO"
              duration={250}
              sequential
              randLetterColor={letterSpinColor}
            />
            <SpinText
              text="WELCOME"
              duration={200}
              delay={1600}
              sequential
              randLetterColor={letterSpinColor}
            />
          </Typography>
          <ExFade in delay={4000} timeout={2000}>
            <MDXProvider
              components={{ ...defaultMDXComponents, ...mdxComponents }}
            >
              <Landing />
            </MDXProvider>
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
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default Home;

export const Head = () => <Seo title="Home" description="This is home page" />;
