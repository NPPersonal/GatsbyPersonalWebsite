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
