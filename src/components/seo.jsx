import * as React from "react";
import { useSiteMetadata } from "../hooks/use.site.metadata";

export const Seo = (props) => {
  const { title, description, email, icon, siteUrl } = props;
  const {
    title: defaultTitle,
    description: defaultDescription,
    email: defaultEmail,
    icon: defaultIcon,
    siteUrl: deafultSiteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    email: email || defaultEmail,
    icon: icon || defaultIcon,
    siteUrl: siteUrl || deafultSiteUrl,
  };

  return (
    <div>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="email" content={seo.email} />
      <meta name="icon" content={seo.icon} />
      <meta name="siteUrl" content={seo.siteUrl} />
    </div>
  );
};
