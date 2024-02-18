import * as React from "react";
import { Avatar, Box, Container, Divider, Toolbar } from "@mui/material";
import ParticleBG from "../components/particle-bg/particle-bg";
import { config as floatingSnowConfig } from "../components/particle-bg/floating-snow-config";
import { ExSlide } from "../components/mui-extension/transition-extension";
import NavBar from "../components/nav-bar/navbar";
import navigationRouteData from "../../static/navigation-routes/navigation-routes.json";
import footerSectionData from "../../static/footer-sections/footer-sections.json";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import Footer from "../components/footer/footer";
import { StaticImage } from "gatsby-plugin-image";
import FooterSection from "../components/footer/footer-section";
import SocialLinks from "../components/social-links/social-links";
import SocialLinkData from "../../static/social-links/social-links.json";

const getNavbar = () => {
  return (
    <React.Fragment>
      <NavBar navigationRoutes={navigationRouteData} />
      <Toolbar />
    </React.Fragment>
  );
};
const getFooter = (theme) => {
  return (
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
  );
};

/**
 * Common layout
 *
 * This layout included
 * - AppBar at top
 * - Background particle effect
 *
 * Use this layout to wrap any page
 *
 * @returns
 */
const CommonLayout = ({
  navbarTransition = false,
  navbarTransitionDelay = 0,
  navbarTransitionTimeout = 2000,
  footerTransition = false,
  footerTransitionDelay = 0,
  footerTransitionTimeout = 2000,
  children,
}) => {
  const { theme } = React.useContext(MUIThemeContext);
  return (
    <Box className="flex flex-col justify-stretch">
      <ParticleBG particleConfig={floatingSnowConfig} />
      {navbarTransition ? (
        <ExSlide
          direction="down"
          in
          delay={navbarTransitionDelay}
          timeout={navbarTransitionTimeout}
        >
          {getNavbar()}
        </ExSlide>
      ) : (
        getNavbar()
      )}
      <Container className="relative">{children}</Container>
      {footerTransition ? (
        <ExSlide
          direction="up"
          in
          delay={footerTransitionDelay}
          timeout={footerTransitionTimeout}
        >
          {getFooter(theme)}
        </ExSlide>
      ) : (
        getFooter(theme)
      )}
    </Box>
  );
};

export default CommonLayout;
