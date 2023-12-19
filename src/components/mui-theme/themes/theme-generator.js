import createDarkTheme from "./dark-theme";
import createLightTheme from "./light-theme";

/**
 * Generate MUI them by color mode
 * @param {*} colorMode `light` or `dark`
 * @returns MUI theme
 */
const generateMUITheme = (colorMode) => {
  return colorMode === "light" ? createLightTheme() : createDarkTheme();
};

export { generateMUITheme };
