import { graphql, useStaticQuery } from "gatsby";

/**
 * React hook to pull navigation menu data from content
 * @returns
 */
export const useMenusData = () => {
  const { allMenusJson } = useStaticQuery(graphql`
    query {
      allMenusJson(sort: { order: ASC }) {
        nodes {
          title
          link
          subLinks {
            title
            link
          }
        }
      }
    }
  `);

  return allMenusJson.nodes;
};
