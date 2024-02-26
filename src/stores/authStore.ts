import { create } from 'zustand';
import { persist } from 'zustand/middleware';
//type
interface State {
  token: string;
}

interface Action {
  setToken: (token: string) => void;
}
//store
export const useAuthStore = create(
  persist<State & Action>(
    set => ({
      token: '',
      setToken: (token: string) => set({ token })
    }),
    { name: 'token' }
  )
);
//状态操作集
export const useAuthDispatch = () => {
  const { setToken } = useAuthStore();
  return {
    signIn: (token: State['token'], callback?: () => void) => {
      if (callback) {
        callback();
      }
      setToken(token);
    },
    signOut: (callback?: () => void) => {
      if (callback) {
        callback();
      }
      setToken('');
    }
  };
};
/**
 * 在react环境外获取的最新Token状态
 */
export const getToken = () => useAuthStore.getState().token;
/**
 * 获取token状态
 */
export const useToken = () => {
  return selectStore('token');
};
//获取单个state
function selectStore(state: keyof State) {
  return useAuthStore(store => store[state]);
}
