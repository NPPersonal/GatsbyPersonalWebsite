import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import a11yEmoji from "@fec/remark-a11y-emoji";

const MarkdownRenderer = ({ components = null, children }) => {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm, a11yEmoji]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </Markdown>
  );
};

export default MarkdownRenderer;
