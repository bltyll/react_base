import { create } from 'zustand';
import { persist } from 'zustand/middleware';
//type
interface State {
  theme: 'light' | 'dark';
  a: string;
}

interface Action {
  setTheme: (theme: State['theme']) => void;
}
//store
export const useGlobalStore = create(
  persist<State & Action>(
    set => ({
      theme: 'light',
      a: '1',
      setTheme: (theme: State['theme']) => set({ theme })
    }),
    {
      //持久化
      name: 'theme',
      partialize: state =>
        ({
          theme: state.theme
        }) as any
    }
  )
);
//dispatch
export const useGlobalDispatch = () => {
  const { setTheme } = useGlobalStore();
  return {
    setTheme: (theme: State['theme'], callback?: () => void) => {
      setTheme(theme);
      if (callback) {
        callback();
      }
      document.documentElement.className = theme;
    }
  };
};
/**
 * 在react环境外获取的最新theme状态
 */
export const getTheme = () => useGlobalStore.getState().theme;
/**
 * 获取theme态
 */
export const useTheme = () => {
  return selectStore('theme');
};
//获取单个state
function selectStore(state: keyof State) {
  return localStorage.getItem(state) ? useGlobalStore(store => store[state]) : null;
}
