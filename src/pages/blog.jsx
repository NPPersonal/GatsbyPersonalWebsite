import * as React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = (props) => {
  const { data } = props;
  return (
    <Layout pageTitle="My blog posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog" />;

export default BlogPage;
