import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { MUITailwindCSSPortalSetup } from "./mui-tailwindcss";

const createLightTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "light",
      },
      ...MUITailwindCSSPortalSetup, //MUI + TailwindCSS setup
    })
  );

export default createLightTheme;
