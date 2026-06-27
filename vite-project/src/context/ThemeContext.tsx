import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Busca o tema salvo no navegador ou assume escuro por padrão
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("@vendas-online:theme");
    return (savedTheme as Theme) || "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Aplica a classe correspondente no HTML para o Tailwind v4 ler
    if (theme == "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("@vendas-online:theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado para usar o tema nos componentes de forma simples
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
