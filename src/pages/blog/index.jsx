import * as React from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { Link, graphql } from "gatsby";

const IndexPage = (props) => {
  const { data } = props;
  return (
    <Layout pageTitle="My blog posts">
      <ul className="mt-4">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className="mb-4">
            <h2 className="text-blue-600 text-2xl font-bold">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className="text-gray-700 italic font-bold">
              Posted: {node.frontmatter.date}
            </p>
            <p className="py-3">{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM-D-YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog" />;

export default IndexPage;
