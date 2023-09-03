import React, { useState } from "react";

import CreateMUITheme from "./themes/theme";

const defaultMode = "light";

export const MUIThemeContext = React.createContext({
  mode: defaultMode,
  theme: CreateMUITheme(defaultMode),
  setColorMode: (mode) => {},
  toggleColorMode: () => {},
});

const MUIThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(defaultMode);
  const currnetTheme = CreateMUITheme(mode);
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
