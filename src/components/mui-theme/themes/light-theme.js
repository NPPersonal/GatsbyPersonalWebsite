import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { MUITailwindCSSPortalConfig } from "./mui-tailwindcss";

const theme = createTheme({});

const colorProps = {
  main: "#96B6C5",
  light: "#adc6d2",
  dark: "#6b98ad",
  contrastText: theme.palette.getContrastText("#adc6d2"),
};

const createLightTheme = () =>
  responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: [
          "Lato",
          "Open Sans",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ].join(","),
        fontWeightBold: 700,
        fontWeightLight: 300,
        fontWeightRegular: 400,
      },
      palette: {
        mode: "light",
        primary: {
          ...colorProps,
        },
        background: {
          footer: colorProps.main,
          gradient:
            "linear-gradient(90deg, rgba(163,188,200,1) 0%, rgba(167,192,204,1) 15%, rgba(173,198,210,1) 50%, rgba(167,192,204,1) 85%, rgba(163,188,200,1) 100%);",
        },
      },
      components: {
        MuiList: {
          defaultProps: {
            sx: { backgroundColor: colorProps.main },
          },
        },
        MuiPaper: {
          defaultProps: {
            sx: { backgroundColor: colorProps.main },
          },
        },
        ...MUITailwindCSSPortalConfig, //MUI + TailwindCSS setup
      },
    })
  );

export default createLightTheme;
