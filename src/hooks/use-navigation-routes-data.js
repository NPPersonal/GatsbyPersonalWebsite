import { graphql, useStaticQuery } from "gatsby";

/**
 * React hook to pull navigation routes data from content
 * @returns an array of navigation routes
 */
export const useNavigationRoutesData = () => {
  const { allMenusJson } = useStaticQuery(graphql`
    query {
      allMenusJson(sort: { order: ASC }) {
        nodes {
          title
          route
          subRoutes {
            title
            route
          }
        }
      }
    }
  `);

  return allMenusJson.nodes;
};
