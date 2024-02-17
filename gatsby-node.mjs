import path from "path";
import { defaultLanguage } from "./language.js";

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const name = path.basename(node.internal.contentFilePath, ".mdx");

    let lang = defaultLanguage;
    const locale = name.split(".")[1];
    if (locale !== undefined) {
      lang = locale;
    }

    createNodeField({ node, name: "locale", value: lang });
  }
};
