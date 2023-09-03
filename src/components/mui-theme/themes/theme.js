import { createTheme } from "@mui/material/styles";

const rootElement = document.getElementById("___gatsby");

const CreateMUITheme = (colorMode) =>
  createTheme({
    palette: {
      mode: colorMode,
    },
    components: {
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiDialog: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiModal: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });

// const CreateMUITheme = (colorMode) =>
//   createTheme({
//     palette: {
//       mode: colorMode,
//     },
//   });

export default CreateMUITheme;
