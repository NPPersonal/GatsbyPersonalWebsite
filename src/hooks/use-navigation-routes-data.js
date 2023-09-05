import { graphql, useStaticQuery } from "gatsby";

/**
 * React hook to pull navigation routes data from content
 * @returns an array of navigation routes
 */
export const useNavigationRoutesData = () => {
  const { allRoutesJson } = useStaticQuery(graphql`
    query {
      allRoutesJson(sort: { order: ASC }) {
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

  return allRoutesJson.nodes;
};
