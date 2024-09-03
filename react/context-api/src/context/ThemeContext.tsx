import { createContext, useContext, useState } from "react";
import { Children } from "../types/Children";
import { Theme } from "../types/Theme";

type ThemeContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: readonly string[];
};

const ThemeContext = createContext<ThemeContextState | null>(null);

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState<Theme>("system");
  const themes = ["system", "light", "dark"] as const;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themes,
      }}
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
