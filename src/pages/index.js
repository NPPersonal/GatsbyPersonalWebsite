import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="This is first try">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div className="mt-6">
        <StaticImage
          alt="a reddish brown pitbull"
          src="../images/pitbull.jpeg"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Personal webiste</title>;
