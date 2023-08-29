import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>about me personally</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>About</title>
    <meta name="description" content="Your description" />
  </>
);
