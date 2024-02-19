import path from "path";
import { defaultLanguage } from "./language.js";

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // create node field for mdx to adapt i18next for localization
  if (node.internal.type === `Mdx`) {
    // get file name
    const name = path.basename(node.internal.contentFilePath, ".mdx");

    let lang = defaultLanguage;
    const locale = name.split(".")[1];
    // if locale is undefiend it means default locale mdx
    // otherwise it is specific locale
    // mdx file name would be
    // my-mdx.mdx ---> default locale
    // my-mdx.en.mdx ---> in English
    // my-mdx.ch-TW.mdx ---> in Chinese Traditional
    if (locale !== undefined) {
      lang = locale;
    }

    createNodeField({ node, name: "locale", value: lang });
  }
};

export const createPages = async (props) => {
  const { graphql, actions, reporter } = props;
  const { createPage } = actions;

  // read through comment to understand 2 graphql queries
  const result = await graphql(`
    {
      # find all mdx files for creating page later
      # make sure to add mdx directory path to gatsby-source-filesystem
      mdx: allFile(filter: { sourceInstanceName: { eq: "mdx" } }) {
        nodes {
          childMdx {
            fields {
              locale
            }
            frontmatter {
              slug
            }
          }
        }
      }

      # find template file and return relative path and source folder
      # for creating page from template later
      # make sure to add src directory path to gatsby-source-filesystem
      # template file name rule e.g: my-project.template.js
      # template must locate under pages directory
      template: allFile(
        filter: {
          extension: { in: ["js", "jsx"] }
          name: { glob: "*.template" }
        }
      ) {
        nodes {
          relativePath
          sourceInstanceName
        }
      }
    }
  `);

  // if errors abort
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query on creating pages.`
    );
    return;
  }

  // collect all template paths
  const templates = result.data.template.nodes.map((node) => {
    const { relativePath, sourceInstanceName } = node;
    const templateFilePath = path.join(sourceInstanceName, relativePath);
    const template = path.resolve(templateFilePath);
    return template;
  });

  // create page for each mdx
  result.data.mdx.nodes.forEach((node) => {
    if (node.childMdx) {
      const { slug } = node.childMdx.frontmatter;
      const isDefault = node.childMdx.fields.locale === defaultLanguage;

      // create page from each templates
      templates.forEach((template) => {
        //get directory name of template file
        const dir = path.basename(path.dirname(template));

        // make sure path is in foward slash
        const pagePath = path.join(dir, slug).replace(/\\/g, "/");
        const pageData = {
          path: pagePath,
          component: template,
          context: {
            slug, //add slug from mdx to page context
          },
        };

        // only create page if it is default language
        if (isDefault) {
          createPage(pageData);
        }
      });
    }
  });
};
