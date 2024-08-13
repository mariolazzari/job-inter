import { createContext, useContext, useState } from "react";
import { Children } from "../types/Children";
import { Theme } from "../types/Theme";

type ThemeContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: string[];
};

const ThemeContext = createContext<ThemeContextState | null>(null);

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState<Theme>("system");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themes: ["system", "light", "dark"] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("Component not wrapped in ThemeProvider");
  }

  return ctx;
};
