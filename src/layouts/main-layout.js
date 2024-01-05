import * as React from "react";
import { Box, Container, Divider, Toolbar, Typography } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import navigationRouteData from "../../static/navigation-routes/navigation-routes.json";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import Footer from "../components/footer/footer";
import FooterSection from "../components/footer/footer-section";

const footerSections = [
  {
    sectionTitle: "Quick Links",
    sectionLinks: [
      { title: "Home", link: "/" },
      { title: "Blog", link: "/blogs" },
      { title: "Web App", link: "/works/web" },
      { title: "Mobile App", link: "/works/mobile" },
      { title: "Machine Learning", link: "/works/machine-learning" },
      { title: "About", link: "/about" },
      { title: "Message Me", link: "/contact/message-me" },
    ],
  },
];

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
      <Footer sx={{ backgroundColor: theme.palette.background.footer }}>
        <Container>
          <Box className="flex flex-row flex-wrap justify-stretch">
            <Box className="grow-[1]" />
            <Box className="grow-[1]">
              {footerSections.map((section, i) => (
                <FooterSection
                  key={`${section.sectionTitle}-${i}`}
                  sectionTitle={section.sectionTitle}
                  sectionLinks={section.sectionLinks}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Footer>
    </Box>
  );
};

export default MainLayout;
