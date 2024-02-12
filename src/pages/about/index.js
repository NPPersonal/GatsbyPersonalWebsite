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
  return (
    <CommonLayout>
      <Typography className="my-4" variant="h4" align="center">
        About Me
      </Typography>
      <Box className="flex flex-col items-center my-4">
        <AdvancedImage
          className="rounded-lg drop-shadow-2xl"
          style={{ width: 150 }}
          cldImg={getCloudinaryImage(
            "personal-web-image-assets/web-assets/profile"
          )}
          plugins={[
            lazyload(),
            responsive({ steps: 100 }),
            placeholder({ mode: "blur" }),
          ]}
        />
        <Typography className="text-xl" variant="caption">
          Hung Ming-Chun
        </Typography>
        <Typography className="text-xl" variant="caption">
          Taichung, Taiwan
        </Typography>
        <Typography className="text-xl" variant="caption">
          Chinese, English
        </Typography>
      </Box>
      <MDXProvider components={mdxComponents}>
        <AboutMe />
      </MDXProvider>
    </CommonLayout>
  );
};

export default About;

export const Head = () => <Seo title="About" description="About me" />;
