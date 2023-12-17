import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// const rootElement = document.getElementById("___gatsby");

const CreateMUITheme = (colorMode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: colorMode,
      },
      components: {
        MuiPopover: {
          defaultProps: {
            container: document.getElementById("___gatsby"),
          },
        },
        MuiPopper: {
          defaultProps: {
            container: document.getElementById("___gatsby"),
          },
        },
        MuiDialog: {
          defaultProps: {
            container: document.getElementById("___gatsby"),
          },
        },
        MuiModal: {
          defaultProps: {
            container: document.getElementById("___gatsby"),
          },
        },
      },
    })
  );

// const CreateMUITheme = (colorMode) =>
//   createTheme({
//     palette: {
//       mode: colorMode,
//     },
//   });

export default CreateMUITheme;
