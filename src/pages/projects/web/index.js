// i18next-extract-mark-ns-start web

import React from "react";
import { graphql } from "gatsby";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkCollection from "../../../components/work-collection/work-collection";
import Seo from "../../../components/seo/seo";
import CommonLayout from "../../../layouts/common-layout";
import RenderInView from "../../../components/render-in-view/render-in-view";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import TypeWriter from "../../../components/type-writer/type-writer";

const Banner = ({ options, t }) => {
  return (
    <Box className="my-4 flex flex-col justify-center items-center">
      <StaticImage
        className="rounded-lg"
        src="../../../images/web-dev.png"
        alt="web-dev"
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
          <TypeWriter
            text={t("web-title")}
            durationMS={1000}
            delayStartMS={500}
          />
        </Typography>
      </RenderInView>
    </Box>
  );
};

const Web = ({ data }) => {
  const { t } = useI18next();
  const options = {
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  };

  if (data.allMdx.nodes.lenght === 0) {
    return (
      <CommonLayout>
        <Banner options={options} t={t} />
        <Typography className="my-4" variant="h4" align="center">
          {t("empty")}
        </Typography>
      </CommonLayout>
    );
  }
  return (
    <CommonLayout>
      <Banner options={options} t={t} />
      <WorkCollection mdxDataNodes={data.allMdx.nodes} />
    </CommonLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "web"] }, language: { eq: $language } }
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
        frontmatter: { category: { eq: "web" } }
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

export default Web;

export const Head = () => (
  <Seo title="Web app" description="Experience in web app" />
);
