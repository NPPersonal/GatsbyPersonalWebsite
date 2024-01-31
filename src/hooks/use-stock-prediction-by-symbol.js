import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const useGetStockPredictionBySymbol = (symbol) => {
  const url = new URL(
    `/get-stock-prediction/${symbol}`,
    process.env.GATSBY_STOCK_API
  );
  const result = useSWR(url.href, fetcher, { errorRetryCount: 0 });
  return result;
};

export default useGetStockPredictionBySymbol;
