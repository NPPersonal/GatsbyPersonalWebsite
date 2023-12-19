import React, { useState } from "react";
import { generateMUITheme } from "./themes/theme-generator";

const defaultMode = "light";

/**
 * The context of Material UI theme
 */
export const MUIThemeContext = React.createContext({
  mode: defaultMode,
  theme: generateMUITheme(defaultMode),
  setColorMode: (mode) => {},
  toggleColorMode: () => {},
});
/**
 * Context provider to provide Material UI's theme,
 * In addition the mode of Material UI and functions to set or toggle
 * between `light` and `dark` mode
 *
 * @returns
 */
const MUIThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(defaultMode);
  const currnetTheme = generateMUITheme(mode);
  const setColorMode = (colorMode) => setMode(colorMode);
  const toggleColorMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <MUIThemeContext.Provider
      value={{
        mode,
        theme: currnetTheme,
        setColorMode,
        toggleColorMode,
      }}
    >
      {children}
    </MUIThemeContext.Provider>
  );
};

export default MUIThemeProvider;
