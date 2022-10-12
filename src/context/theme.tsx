import React, { ReactNode, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
