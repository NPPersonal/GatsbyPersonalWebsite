// i18next-extract-mark-ns-start message-me

import React from "react";
import CommonLayout from "../../../layouts/common-layout";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import NetlifyForm from "../../../components/netlify-form/netlify-form";
import Seo from "../../../components/seo/seo";
import SpinText from "../../../components/spin-text/spin-text";
import { MUIThemeContext } from "../../../components/mui-theme/mui-theme-provider";
import RenderInView from "../../../components/render-in-view/render-in-view";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const MessageMe = () => {
  const { t } = useI18next();
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const divierSX = {
    "&::before, &::after": {
      borderTop: `thick solid ${
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.12)"
          : "rgba(255, 255, 255, 0.12)"
      }`,
    },
  };

  return (
    <CommonLayout>
      <RenderInView
        options={{
          delay: 100,
          triggerOnce: true,
          trackVisibility: true,
        }}
      >
        <Typography className="my-4 font-bold" variant="h3" align="center">
          <SpinText
            text={t("message-me-title")}
            duration={150}
            sequential
            randLetterColor={letterSpinColor}
          />
        </Typography>
      </RenderInView>
      <Box className="p-8 shadow-xl rounded-lg">
        <NetlifyForm />
      </Box>
      <Box className="my-8">
        <Divider sx={divierSX} variant="middle" textAlign="center">
          {t("or")}
        </Divider>
      </Box>
      <Box className="flex justify-center">
        <a
          href="mailto:tomneo2004@gmail.com"
          aria-label="Email me"
          style={{ color: "inherit" }}
        >
          <SvgIcon sx={{ fontSize: 50 }}>
            <EmailIcon />
          </SvgIcon>
        </a>
      </Box>
    </CommonLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "message-me"] }
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
  }
`;

export default MessageMe;

export const Head = () => <Seo title="Contact" description="Contact me" />;
