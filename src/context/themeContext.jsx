import React, { createContext, useContext, useState } from "react";

const ThemeContenxt = createContext();
export const useTheme = () => useContext(ThemeContenxt);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
