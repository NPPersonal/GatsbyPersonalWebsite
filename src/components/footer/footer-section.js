import { Box, Typography } from "@mui/material";
import * as React from "react";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import { useI18next } from "gatsby-plugin-react-i18next";

const FooterSection = ({
  sectionTitle = "",
  sectionLinks = [],
  sectionTitleFontWeight = 800,
  linkFontWeight = 600,
}) => {
  const { t } = useI18next();
  return (
    <Box className="flex flex-col justify-center p-4">
      <Typography
        className="mb-4"
        sx={{ fontWeight: sectionTitleFontWeight, width: "fit-content" }}
      >
        {t(sectionTitle)}
      </Typography>
      <Box className="flex flex-col">
        {sectionLinks.map((link, i) => (
          <React.Fragment key={`${link.title}-${i}`}>
            <Typography
              sx={{ fontWeight: linkFontWeight, width: "fit-content" }}
            >
              <GatsbyStyledLink to={link.link} style={{ width: "fit-content" }}>
                <span className="no-underline hover:underline underline-offset-4 decoration-2">
                  {t(link.title)}
                </span>
              </GatsbyStyledLink>
            </Typography>
            <Box className="pb-2" />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default FooterSection;
