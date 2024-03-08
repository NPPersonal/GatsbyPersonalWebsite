import React from "react";

const rss2jsonUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
const mediumFeedUrl = "https://medium.com/feed/@";

export const useMediumRSS = () => {
  const [feed, setFeed] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [error, setError] = React.useState(null);
  const thumbnailFromContent = (content) => {
    if (content) {
      const result = /(?=https)(.*?)(?=">)/.exec(content);
      if (result) {
        return result[0];
      }
    }
    return null;
  };
  const htmlToText = (
    htmlString,
    extractStart = undefined,
    extractEnd = undefined,
    suffix = "....."
  ) => {
    if (typeof document !== "undefined" && htmlString) {
      let div = document.createElement("div");
      div.innerHTML = htmlString;
      let text = div.textContent || div.innerText || "";
      if (extractStart !== undefined && extractEnd !== undefined) {
        text = text.substring(extractStart, extractEnd) + suffix;
      }
      return text;
    }
    return "";
  };

  const getRSSFeed = async (username) => {
    try {
      setFetching(true);
      const response = await fetch(`${rss2jsonUrl}${mediumFeedUrl}${username}`);
      const data = await response.json();
      setFetching(false);
      setFeed(data["feed"]);
      setItems(data["items"]);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    feed,
    items,
    fetching,
    error,
    getRSSFeed,
    thumbnailFromContent,
    htmlToText,
  };
};
