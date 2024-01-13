import * as React from "react";
import { Box, Container, Toolbar, Divider, Avatar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import navigationRouteData from "../../static/navigation-routes/navigation-routes.json";
import footerSectionData from "../../static/footer-sections/footer-sections.json";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import Footer from "../components/footer/footer";
import FooterSection from "../components/footer/footer-section";
import SocialLinks from "../components/social-links/social-links";
import SocialLinkData from "../../static/social-links/social-links.json";
import { StaticImage } from "gatsby-plugin-image";

/**
 * Main layout the top most layout
 *
 * This layout included
 * - AppBar at top
 * - Background management
 *
 * **PS: Do not use this layout to wrap any page**
 *
 * This layout can only be used in `wrapPageElement`
 * in gatsby-browser.js
 * @returns
 */
const MainLayout = ({ children }) => {
  const { theme } = React.useContext(MUIThemeContext);
  const bg = theme.palette.background.gradient;

  return (
    <Box
      className="flex flex-col justify-stretch"
      sx={{
        background: bg,
        minHeight: "100%",
      }}
    >
      <NavBar navigationRoutes={navigationRouteData} />
      <Toolbar />
      <Box className="my-4 grow-[1]">{children}</Box>
      <Footer
        className="relative"
        sx={{ backgroundColor: theme.palette.background.footer }}
      >
        <Container>
          <Box className="flex flex-row flex-wrap justify-stretch ">
            <Box className="flex justify-center items-center p-4 grow-[1]">
              <Avatar alt="Logo" sx={{ width: 100, height: 100 }}>
                <StaticImage
                  src="../images/logo.png"
                  alt="Logo image"
                  placeholder="blurred"
                  layout="constrained"
                />
              </Avatar>
            </Box>
            <Box className="grow-[1]">
              {footerSectionData.map((section, i) => (
                <FooterSection
                  key={`${section.sectionTitle}-${i}`}
                  sectionTitle={section.sectionTitle}
                  sectionLinks={section.sectionLinks}
                />
              ))}
            </Box>
          </Box>
          <Divider />
          <SocialLinks socialLinks={SocialLinkData} />
        </Container>
      </Footer>
    </Box>
  );
};

export default MainLayout;
