import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = (props) => {
  const { pageTitle, children } = props;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="m-[auto] max-w-[500px]">
      <header className="text-gray-500 text-4xl font-bold mt-6">
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className="flex flex-row mb-6 mt-6">
          <li className="mr-6">
            <Link to="/" className="text-blue-700 underline">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/about" className="text-blue-700 underline">
              About
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/blog" className="text-blue-700 underline">
              blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
