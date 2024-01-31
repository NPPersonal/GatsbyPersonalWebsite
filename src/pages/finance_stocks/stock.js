import * as React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CommonLayout from "../../layouts/common-layout";
import useGetStockBySymbol from "../../hooks/use-stock-by-symbol";
import ReactLoading from "react-loading";
import { MUIThemeContext } from "../../components/mui-theme/mui-theme-provider";
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js-finance-dist-min";
import useGetStockPredictionBySymbol from "../../hooks/use-stock-prediction-by-symbol";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { navigate } from "gatsby";

const Plot = createPlotlyComponent(Plotly);

const get_ploty_data = async (data, x_label, y_label) => {
  const newData = { x: [], y: [] };
  data.forEach((el) => {
    newData.x.push(el[x_label]);
    newData.y.push(el[y_label]);
  });
  return newData;
};

const get_ploty_stock_data = (data) => {
  const newData = { x: [], close: [], open: [], high: [], low: [] };
  data.forEach((el) => {
    newData.x.push(el["Date"]);
    newData.close.push(el["Close"]);
    newData.open.push(el["Open"]);
    newData.high.push(el["High"]);
    newData.low.push(el["Low"]);
  });
  return newData;
};

const Stock = ({ location: { state } }) => {
  const { theme } = React.useContext(MUIThemeContext);
  const loadingColor = theme.palette.loading.main;
  const { name, symbol } = state;
  const stock = useGetStockBySymbol(symbol);
  const prediction = useGetStockPredictionBySymbol(symbol);
  const [stockData, setStockData] = React.useState(null);
  const [predictionData, setPredictionData] = React.useState(null);

  React.useEffect(() => {
    const fetchStock = async () => {
      if (stock.data) {
        const data = await get_ploty_stock_data(stock.data["result"]);
        data.x = data.x.map((date, _) => {
          return date.split("T")[0];
        });
        setStockData(data);
      }
    };
    const fetchPrediction = async () => {
      if (prediction.data) {
        const data = await get_ploty_data(
          prediction.data["result"],
          "Date",
          "Prediction"
        );
        data.x = data.x.map((date, _) => {
          return date.split("T")[0];
        });
        setPredictionData(data);
      }
    };
    fetchStock();
    fetchPrediction();
  }, [stock.data, prediction.data]);

  if (
    stock.isLoading ||
    prediction.isLoading ||
    stockData === null ||
    predictionData === null
  ) {
    return (
      <CommonLayout>
        <Box className="flex justify-center">
          <ReactLoading type="balls" color={loadingColor} />
        </Box>
      </CommonLayout>
    );
  }
  if (stock.error || prediction.error) {
    return (
      <CommonLayout>
        <Typography className="my-4" variant="h4" color="error" align="center">
          Something went wrong
        </Typography>
        <Typography color="error" align="center">
          {stock.error.message || prediction.error.message}
        </Typography>
      </CommonLayout>
    );
  }
  return (
    <CommonLayout>
      <IconButton
        className="my-4"
        aria-label="back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <Typography className="my-4" variant="h4" align="center">
        {`${name}(${symbol})`}
      </Typography>
      {stockData ? (
        <Typography className="my-4" variant="h6" align="center">
          {` ${stockData.x[stockData.x.length - 1]}: $${
            Math.round(stockData.close[stockData.close.length - 1] * 100) / 100
          } USD`}
        </Typography>
      ) : null}
      {predictionData ? (
        <Typography className="my-4" variant="h6" align="center">
          {` ${predictionData.x[predictionData.x.length - 1]}: $${
            Math.round(predictionData.y[predictionData.y.length - 1] * 100) /
            100
          } USD`}
        </Typography>
      ) : null}
      {stockData && predictionData ? (
        <Plot
          className="drop-shadow-md"
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          data={[
            {
              ...stockData,
              type: "candlestick",
              name: "Market price history",
            },
            {
              ...predictionData,
              type: "scatter",
              mode: "lines",
              line: { color: "orange" },
              name: "Price forecast",
            },
          ]}
          layout={{
            autosize: true,
            dragmode: "zoom",
            showlegend: true,
            hovermode: "x",
            legend: {
              xanchor: "center",
              yanchor: "top",
              x: 0.5,
              y: 1.3,
              orientation: "h",
            },
            yaxis: { title: "$USD", type: "linear", domain: [0, 1] },
            xaxis: {
              title: "Date",
              type: "date",
              rangeslider: { visible: false },
              tickformat: "%Y-%m-%d",
              rangeselector: {
                buttons: [
                  {
                    count: 7,
                    label: "1w",
                    step: "day",
                    stepmode: "backward",
                  },
                  {
                    count: 1,
                    label: "1m",
                    step: "month",
                    stepmode: "backward",
                  },
                  {
                    count: 6,
                    label: "6m",
                    step: "month",
                    stepmode: "backward",
                  },
                  {
                    count: 1,
                    label: "1y",
                    step: "year",
                    stepmode: "backward",
                  },
                  { step: "all" },
                ],
              },
            },
          }}
          config={{
            displaylogo: false,
            modeBarButtonsToRemove: ["lasso2d", "select2d"],
          }}
        />
      ) : null}
    </CommonLayout>
  );
};

export default Stock;
