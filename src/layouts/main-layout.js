import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/nav-bar/navbar";
import NavMenuLink from "../components/nav-menu-link/nav-menu-link";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar
        menu={[
          <NavMenuLink
            key="blogs"
            className="mx-4"
            data={{
              title: "Blogs",
              link: "",
            }}
          />,
          <NavMenuLink
            key="works"
            className="mx-4"
            data={{
              title: "Works",
              subLinks: [
                { title: "Web", link: "" },
                { title: "Mobile", link: "" },
                { title: "Machine Learning", link: "" },
              ],
            }}
          />,
          <NavMenuLink
            key="about"
            data={{
              title: "About",
              link: "",
            }}
          />,
          <NavMenuLink
            key="contact"
            className="mx-4"
            data={{
              title: "Contact",
              link: "",
            }}
          />,
        ]}
      />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
