const getElement = () => {
  return typeof document !== "undefined"
    ? document.getElementById("___gatsby")
    : undefined;
};

/**
 *  An object contain MUI's portal setup for tailwindcss
 *
 *  https://mui.com/material-ui/guides/interoperability/#tailwind-css
 */
const MUITailwindCSSPortalConfig = {
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
};

export { MUITailwindCSSPortalConfig };
