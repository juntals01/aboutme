type ThemeType = {
  color: {
    name: string;
    bg: string;
    text: string;
    decoration: string;
    border: string;
  };
};

type AppContextType = {
  theme: ThemeType;
  setTheme: (state: ThemeType) => void;
};

export type { AppContextType, ThemeType };
