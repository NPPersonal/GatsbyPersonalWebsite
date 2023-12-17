import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// const rootElement = document.getElementById("___gatsby");

const getElement = () => {
  return typeof document !== "undefined"
    ? document.getElementById("___gatsby")
    : undefined;
};

const CreateMUITheme = (colorMode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: colorMode,
      },
      components: {
        MuiPopover: {
          defaultProps: {
            container: getElement(),
          },
        },
        MuiPopper: {
          defaultProps: {
            container: getElement(),
          },
        },
        MuiDialog: {
          defaultProps: {
            container: getElement(),
          },
        },
        MuiModal: {
          defaultProps: {
            container: getElement(),
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
