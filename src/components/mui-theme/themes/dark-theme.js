import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { MUITailwindCSSPortalSetup } from "./mui-tailwindcss";

const createDarkTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "dark",
      },
      ...MUITailwindCSSPortalSetup, //MUI + TailwindCSS setup
    })
  );

export default createDarkTheme;
