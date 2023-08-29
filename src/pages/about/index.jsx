import * as React from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>about me personally</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="About Me" />;
