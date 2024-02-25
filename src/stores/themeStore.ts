import { create } from 'zustand';
import { persist } from 'zustand/middleware';
//type
interface State {
  theme: 'light' | 'dark';
}

interface Action {
  setTheme: (theme: State['theme']) => void;
}
//store
export const themeStore = create(
  persist<State & Action>(
    set => ({
      theme: 'light',
      setTheme: (theme: State['theme']) => set({ theme })
    }),
    { name: 'theme' }
  )
);
//dispatch
export const useThemeDispatch = () => {
  const { setTheme } = themeStore();
  return {
    setTheme: (theme: State['theme'], callback?: () => void) => {
      setTheme(theme);
      if (callback) {
        callback();
      }
      document.documentElement.className = theme;
    },
    theme: themeStore(state => state.theme)
  };
};
