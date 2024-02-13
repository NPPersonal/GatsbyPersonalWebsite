import * as React from "react";
import { Typography } from "@mui/material";
import CommonLayout from "../layouts/common-layout";
import Seo from "../components/seo/seo";
import { useInView } from "react-intersection-observer";

const IndexPage = () => {
  const titleInView = useInView({
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  });
  const subtitleInView = useInView({
    delay: 1000,
    triggerOnce: true,
    trackVisibility: true,
  });
  return (
    <CommonLayout>
      <div ref={titleInView.ref} className="overflow-hidden">
        <Typography
          className={`transition ease-out duration-[800ms] ${
            titleInView.inView ? "translate-y-0" : "translate-y-10"
          }`}
          variant="h2"
          align="center"
        >
          Hello
        </Typography>
      </div>
      <div ref={subtitleInView.ref} className="overflow-hidden">
        <Typography
          className={`transition ease-out delay-[800ms] duration-[800ms] ${
            subtitleInView.inView ? "translate-y-0" : "translate-y-10"
          }`}
          variant="h3"
          align="center"
        >
          Wellcome
        </Typography>
      </div>
    </CommonLayout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" description="This is home page" />;
