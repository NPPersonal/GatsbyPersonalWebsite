import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { MUITailwindCSSPortalConfig } from "./mui-tailwindcss";

const theme = createTheme({});

const colorProps = {
  main: "#667e80",
  light: "#9cafb0",
  dark: "#394647",
  contrastText: theme.palette.getContrastText("#394647"),
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
        background: {
          footer: colorProps.main,
          gradient:
            "linear-gradient(90deg, rgba(77,90,91,1) 0%, rgba(69,82,83,1) 15%, rgba(57,70,71,1) 50%, rgba(69,82,83,1) 85%, rgba(77,90,91,1) 100%);",
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
