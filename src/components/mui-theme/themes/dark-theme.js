import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import { MUITailwindCSSPortalConfig } from "./mui-tailwindcss";

const theme = createTheme({});

const colorProps = {
  main: "#024950",
  light: "#7ac1c8",
  dark: "#003135",
  contrastText: theme.palette.getContrastText("#024950"),
};

const createDarkTheme = () =>
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
        mode: "dark",
        primary: {
          ...colorProps,
        },
        loading: {
          main: colorProps.light,
        },
        background: {
          footer: colorProps.main,
          gradient:
            "linear-gradient(180deg, rgba(2,73,80,1) 0%, rgba(42,113,120,1) 100%);",
        },
        spinLetter: {
          main: colorProps.light,
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

export default createDarkTheme;
