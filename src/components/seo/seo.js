import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Seo = ({ title, description, children }) => {
  const metadata = useSiteMetadata();

  const seo = {
    title: title || metadata.title || "Page",
    description: description || metadata.description || "Description",
    siteURL: metadata.siteUrl || "",
  };

  return (
    <React.Fragment>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="siteURL" content={seo.siteURL} />
      {children}
    </React.Fragment>
  );
};

export default Seo;
