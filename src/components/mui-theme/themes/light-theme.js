import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { MUITailwindCSSPortalSetup } from "./mui-tailwindcss";

const createLightTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "light",
        background: {
          gradient:
            "linear-gradient(90deg, rgba(190,190,190,1) 0%, rgba(212,212,212,1) 15%, rgba(238,238,238,1) 50%, rgba(212,212,212,1) 85%, rgba(190,190,190,1) 100%);",
        },
      },
      ...MUITailwindCSSPortalSetup, //MUI + TailwindCSS setup
    })
  );

export default createLightTheme;
