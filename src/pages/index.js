import * as React from "react";
import { Typography } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import SpinText from "../components/spin-text/spin-text";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";
import RenderInView from "../components/render-in-view/render-in-view";

const IndexPage = () => {
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  return (
    <CommonLayout>
      <RenderInView
        options={{
          delay: 1000,
          triggerOnce: true,
          trackVisibility: true,
        }}
      >
        <Typography className="leading-loose" variant="h3" align="center">
          <SpinText
            text="HELLO"
            duration={250}
            sequential
            randLetterColor={letterSpinColor}
          />
          <SpinText
            text="WELCOME"
            duration={200}
            delay={1600}
            sequential
            randLetterColor={letterSpinColor}
          />
        </Typography>
      </RenderInView>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" description="This is home page" />;
