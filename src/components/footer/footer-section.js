import { Box, Typography } from "@mui/material";
import * as React from "react";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";

const FooterSection = ({
  sectionTitle = "",
  sectionLinks = [],
  sectionTitleFontWeight = 800,
  linkFontWeight = 600,
}) => {
  return (
    <Box className="flex flex-col justify-center p-4">
      <Typography
        className="mb-4"
        sx={{ fontWeight: sectionTitleFontWeight, width: "fit-content" }}
      >
        {sectionTitle}
      </Typography>
      <Box className="flex flex-col">
        {sectionLinks.map((link, i) => (
          <React.Fragment key={`${link.title}-${i}`}>
            <Typography
              sx={{ fontWeight: linkFontWeight, width: "fit-content" }}
            >
              <GatsbyStyledLink to={link.link} style={{ width: "fit-content" }}>
                <span className="no-underline hover:underline underline-offset-4 decoration-2">
                  {link.title}
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
