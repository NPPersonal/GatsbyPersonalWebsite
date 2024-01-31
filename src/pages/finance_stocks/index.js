import * as React from "react";
import CommonLayout from "../../layouts/common-layout";
import { Box, Chip, Typography } from "@mui/material";
import Seo from "../../components/seo/seo";
import useStockConfig from "../../hooks/use-stock-config";
import ReactLoading from "react-loading";
import { MUIThemeContext } from "../../components/mui-theme/mui-theme-provider";
import GatsbyStyledLink from "../../components/gatsby-styled-link/gatsby-styled-link";

const FinancialStock = (props) => {
  const { theme } = React.useContext(MUIThemeContext);
  const loadingColor = theme.palette.loading.main;
  const { data, error, isLoading } = useStockConfig();
  if (data) {
    console.log("data", data["result"]);
  }
  console.log(props);
  if (isLoading) {
    return (
      <CommonLayout>
        <Box className="flex justify-center">
          <ReactLoading type="balls" color={loadingColor} />
        </Box>
      </CommonLayout>
    );
  }
  if (error) {
    return (
      <CommonLayout>
        <Typography className="my-4" variant="h4" color="error" align="center">
          Something went wrong
        </Typography>
        <Typography color="error" align="center">
          {error.message}
        </Typography>
      </CommonLayout>
    );
  }
  return (
    <CommonLayout>
      <Typography className="my-4" variant="h4" align="center">
        Financial Stocks
      </Typography>

      <Box className="flex justify-center">
        {data
          ? data["result"]["stocks"].map((stock, _) => {
              const { name, symbol } = stock;
              const link = `${props.path}stock`;
              console.log(link);
              return (
                <GatsbyStyledLink
                  key={`${name}(${symbol})`}
                  to={link}
                  state={{ name, symbol }}
                >
                  <Chip
                    className="hover:scale-125"
                    label={`${name}(${symbol})`}
                  />
                </GatsbyStyledLink>
              );
            })
          : null}
      </Box>
    </CommonLayout>
  );
};

export default FinancialStock;

export const Head = () => <Seo title="Stocks" description="Financial stock" />;
