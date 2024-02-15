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
import AboutMe from "../../mdx/about-me/about-me.mdx";
import { MDXProvider } from "@mdx-js/react";
import GatsbyStyledLink from "../../components/gatsby-styled-link/gatsby-styled-link";
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

const About = () => {
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const options = {
    delay: 100,
    triggerOnce: true,
    trackVisibility: true,
  };
  return (
    <CommonLayout>
      <RenderInView options={options}>
        <Typography className="leading-loose" variant="h3" align="center">
          <SpinText
            text="About Me"
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
                text="Hung Ming-Chun"
                duration={100}
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
                text="Taichung, Taiwan"
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
                text="Chinese, English"
                duration={100}
                delay={4000}
                randLetterColor={letterSpinColor}
              />
            </Typography>
          </RenderInView>
        </Box>
      </Box>
      <MDXProvider components={mdxComponents}>
        <AboutMe />
      </MDXProvider>
    </CommonLayout>
  );
};

export default About;

export const Head = () => <Seo title="About" description="About me" />;
