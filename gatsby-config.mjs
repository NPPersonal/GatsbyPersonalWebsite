import { dirname } from "path";
import { fileURLToPath } from "url";
import { languages, defaultLanguage } from "./language.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const siteUrl = process.env.URL || "http://localhost:8000";

const config = {
  siteMetadata: {
    title: `Nelson Punch Web`,
    description: `I'm MING-CHUN HUNG(Nelson) and this is my personal website`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Personal Web",
        short_name: "Personal Web",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/mdx`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/templates`,
        name: `templates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Lato`,
            file: `https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap`,
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
