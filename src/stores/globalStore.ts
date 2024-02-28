import { create } from 'zustand';
import { persist } from 'zustand/middleware';
/**
 * type
 */
interface State {
  theme: 'light' | 'dark';
  timezone: string | null;
}

interface Action {
  setTheme: (theme: State['theme']) => void;
}
/**
 * store
 */
export const useGlobalStore = create(
  persist<State & Action>(
    set => ({
      theme: 'light',
      timezone: null,
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
/**
 * 操作集
 * @returns
 */
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
 * 在react环境外获取的最新状态
 */
export const getTheme = () => useGlobalStore.getState().theme;
export const getTimezone = () => useGlobalStore.getState().timezone;

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
