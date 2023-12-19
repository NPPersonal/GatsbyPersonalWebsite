import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { MUITailwindCSSPortalSetup } from "./mui-tailwindcss";

const createDarkTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: "dark",
        background: {
          gradient:
            "linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(58,58,58,1) 15%, rgba(108,108,108,1) 50%, rgba(59,59,59,1) 85%, rgba(18,18,18,1) 100%);",
        },
      },
      ...MUITailwindCSSPortalSetup, //MUI + TailwindCSS setup
    })
  );

export default createDarkTheme;
