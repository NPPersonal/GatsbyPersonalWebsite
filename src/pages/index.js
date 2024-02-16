import * as React from "react";
import { Typography, Box, useMediaQuery, Fade, Slide } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import SpinText from "../components/spin-text/spin-text";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import RenderInView from "../components/render-in-view/render-in-view";
import { StaticImage } from "gatsby-plugin-image";
import Landing from "../mdx/landing/landing.mdx";
import { MDXProvider } from "@mdx-js/react";
import GatsbyStyledLink from "../components/gatsby-styled-link/gatsby-styled-link";

const mdxComponents = {
  em: (props) => (
    <Typography className="font-bold  leading-7" variant="body" {...props} />
  ),
  a: (props) => (
    <GatsbyStyledLink
      className="inline font-medium hover:font-extrabold italic"
      to={props.href}
      style={{ color: "inherit", textDecoration: "underline" }}
      {...props}
    />
  ),
};

const Home = () => {
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const isWrap = useMediaQuery(theme.breakpoints.down("lg"));
  const [showLanding, setShowLanding] = React.useState(false);
  const landingTimerRef = React.useRef(null);
  React.useEffect(() => {
    if (landingTimerRef.current === null) {
      const timer = setTimeout(() => {
        setShowLanding(true);
      }, 3500);
      landingTimerRef.current = timer;
    }
    return () => {
      if (landingTimerRef.current !== null) {
        clearTimeout(landingTimerRef.current);
      }
    };
  }, []);
  return (
    <CommonLayout>
      <Box
        className={`flex ${
          isWrap ? "flex-wrap" : "flex-nowrap"
        } flex-row justify-center`}
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
            className="leading-loose mb-4"
            variant="h3"
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
          {showLanding ? (
            <Fade in timeout={2000}>
              <Box>
                <MDXProvider components={mdxComponents}>
                  <Landing />
                </MDXProvider>
              </Box>
            </Fade>
          ) : null}
        </RenderInView>
        {showLanding ? (
          <Slide direction="left" in timeout={2000}>
            <Box className="relative my-14">
              <StaticImage
                className="rounded-lg"
                src="../../assets/landing.jpeg"
                alt="landing"
                layout="constrained"
                height={600}
              />
              <StaticImage
                className="absolute left-[-30px] bottom-[-55px] bg-transparent"
                src="../../assets/tap.png"
                alt="tap-left-bottom"
                width={100}
              />
              <StaticImage
                className="absolute right-[-35px] top-[-60px] rotate-180 bg-transparent"
                src="../../assets/tap.png"
                alt="tap-top-right"
                width={100}
              />
            </Box>
          </Slide>
        ) : null}
      </Box>
    </CommonLayout>
  );
};

export default Home;

export const Head = () => <Seo title="Home" description="This is home page" />;
