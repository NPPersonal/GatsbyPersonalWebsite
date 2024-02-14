import * as React from "react";
import { Typography } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import { useInView } from "react-intersection-observer";
import SpinText from "../components/spin-text/spin-text";
import { MUIThemeContext } from "../components/mui-theme/mui-theme-provider";

const IndexPage = () => {
  const { theme } = React.useContext(MUIThemeContext);
  const letterSpinColor = theme.palette.spinLetter.main;
  const titleInView = useInView({
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  });
  return (
    <CommonLayout>
      <div ref={titleInView.ref} className="overflow-hidden">
        {titleInView.inView ? (
          <Typography className="leading-loose" variant="h3" align="center">
            <SpinText
              text="HELLO"
              duration={350}
              randLetterColor={letterSpinColor}
            />
            <SpinText
              text="WELCOME"
              duration={300}
              delay={1600}
              randLetterColor={letterSpinColor}
            />
          </Typography>
        ) : null}
      </div>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" description="This is home page" />;
