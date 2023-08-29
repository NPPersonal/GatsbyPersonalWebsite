import * as React from "react";
import { Link } from "gatsby";

const Layout = (props) => {
  const { pageTitle, children } = props;
  return (
    <div className="m-[auto] max-w-[500px]">
      <nav>
        <ul className="flex flex-row">
          <li className="m-1.5">
            <Link to="/" className="text-blue-700 underline">
              Home
            </Link>
          </li>
          <li className="m-1.5">
            <Link to="/about" className="text-blue-700 underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
