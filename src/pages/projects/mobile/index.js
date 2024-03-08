// i18next-extract-mark-ns-start mobile

import React from "react";
import { graphql } from "gatsby";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkCollection from "../../../components/work-collection/work-collection";
import Seo from "../../../components/seo/seo";
import CommonLayout from "../../../layouts/common-layout";
import { MUIThemeContext } from "../../../components/mui-theme/mui-theme-provider";
import SpinText from "../../../components/spin-text/spin-text";
import RenderInView from "../../../components/render-in-view/render-in-view";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";

const Banner = ({ letterSpinColor, options, t }) => {
  return (
    <Box className="my-4 flex flex-col justify-center items-center">
      <StaticImage
        className="rounded-lg"
        src="../../../images/mobile-dev.png"
        alt="mobile-dev"
        placeholder="blurred"
        layout="constrained"
        height={200}
      />
      <RenderInView options={options}>
        <Typography
          className="leading-loose font-bold"
          variant="h3"
          align="center"
        >
          <SpinText
            text={t("mobile-title")}
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

const Mobile = ({ data }) => {
  const { t } = useI18next();
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const options = {
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  };

  if (data.allMdx.nodes.length === 0) {
    return (
      <CommonLayout>
        <Banner letterSpinColor={letterSpinColor} options={options} t={t} />
        <Typography className="my-4" variant="h4" align="center">
          {t("empty")}
        </Typography>
      </CommonLayout>
    );
  }
  return (
    <CommonLayout>
      <Banner letterSpinColor={letterSpinColor} options={options} t={t} />
      <WorkCollection mdxDataNodes={data.allMdx.nodes} />
    </CommonLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "mobile"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(
      filter: {
        fields: { locale: { eq: $language } }
        frontmatter: { category: { eq: "mobile" } }
      }
      sort: { frontmatter: { title: ASC } }
    ) {
      nodes {
        frontmatter {
          author
          name
          slug
          title
          description
          preview_img_id
        }
        id
      }
    }
  }
`;

export default Mobile;

export const Head = () => (
  <Seo title="Mobile app" description="Experience in mobile app" />
);
