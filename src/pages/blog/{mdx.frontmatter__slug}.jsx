import * as React from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { graphql } from "gatsby";

const BlogPost = (props) => {
  const { data } = props;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM-D-YYYY")
      }
      id
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
