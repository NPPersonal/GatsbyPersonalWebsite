import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import { MUITailwindCSSPortalConfig } from "./mui-tailwindcss";

const theme = createTheme({});

const colorProps = {
  main: "#12b9c6",
  light: "#AFDDE5",
  dark: "#024950",
  contrastText: theme.palette.getContrastText("#AFDDE5"),
  form: "#13cedd",
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
        loading: {
          main: colorProps.dark,
        },
        background: {
          footer: colorProps.main,
          gradient:
            "linear-gradient(180deg, rgba(18,185,198,1) 0%, rgba(20,206,221,1) 100%);",
        },
        spinLetter: {
          main: colorProps.dark,
        },
        form: {
          main: colorProps.form,
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
