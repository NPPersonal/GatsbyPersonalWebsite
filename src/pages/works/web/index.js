import * as React from "react";
import { graphql } from "gatsby";
import { Typography, Box } from "@mui/material";
import WorkCollection from "../../../components/work-collection/work-collection";
import Seo from "../../../components/seo/seo";
import CommonLayout from "../../../layouts/common-layout";
import RenderInView from "../../../components/render-in-view/render-in-view";
import SpinText from "../../../components/spin-text/spin-text";
import { MUIThemeContext } from "../../../components/mui-theme/mui-theme-provider";
import { StaticImage } from "gatsby-plugin-image";

const Banner = ({ letterSpinColor, options }) => {
  return (
    <Box className="flex flex-col justify-center items-center">
      <StaticImage
        className="rounded-lg"
        src="../../../../assets/web-dev.png"
        alt="web-dev"
        placeholder="blurred"
        layout="constrained"
        height={200}
      />
      <RenderInView options={options}>
        <Typography className="leading-loose" variant="h3" align="center">
          <SpinText
            text="Web App"
            duration={100}
            sequential
            randLetterColor={letterSpinColor}
            delay={500}
          />
        </Typography>
      </RenderInView>
    </Box>
  );
};

const Web = ({ data }) => {
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const options = {
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  };
  if (data.allMdx.nodes.lenght === 0) {
    return (
      <CommonLayout>
        <Banner letterSpinColor={letterSpinColor} options={options} />
        <Typography className="my-4" variant="h4" align="center">
          There is no web app at moment
        </Typography>
      </CommonLayout>
    );
  }
  return (
    <CommonLayout>
      <Banner letterSpinColor={letterSpinColor} options={options} />
      <WorkCollection mdxDataNodes={data.allMdx.nodes} />
    </CommonLayout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { category: { eq: "web" } } }) {
      nodes {
        frontmatter {
          author
          name
          slug
          title
          preview
          description
          preview_img_id
        }
        id
      }
    }
  }
`;

export default Web;

export const Head = () => (
  <Seo title="Web app" description="Experience in web app" />
);
