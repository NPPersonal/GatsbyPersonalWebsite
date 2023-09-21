import * as React from "react";

const rss2jsonUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
const mediumFeedUrl = "https://medium.com/feed/@";

export const useMediumRSS = () => {
  const [feed, setFeed] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [error, setError] = React.useState(null);

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

  return { feed, items, fetching, error, getRSSFeed };
};
