import { useLocation, useNavigate } from 'react-router-dom';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
/**
 * store的Type
 */
interface State {
  token: string | null;
}

interface Action {
  setToken: (token: State['token']) => void;
}
/**
 * store
 */
export const useAuthStore = create(
  persist<State & Action>(
    set => ({
      token: null,
      setToken: (token: State['token']) => set({ token })
    }),
    { name: 'token' }
  )
);
/**
 * 状态操作集
 * @returns
 */
export const useAuthDispatch = () => {
  const { setToken } = useAuthStore();
  const navigate = useNavigate();
  const { state } = useLocation();
  return {
    signIn: (token: State['token'], callback?: () => void) => {
      if (callback) {
        callback();
      }
      setToken(token);
      //跳回上次的页面
      navigate(state);
    },
    signOut: (callback?: () => void) => {
      if (callback) {
        callback();
      }
      setToken(null);
    }
  };
};
/**
 * 在react环境外获取的最新状态
 */
export const getToken = () => useAuthStore.getState().token;
/**
 * 获取token状态
 */
export const useToken = () => {
  return selectStore('token');
};
/**
 * 在react环境外设置token
 */
export const setToken = (token: State['token']) => {
  useAuthStore.setState({ token });
};
/**
 *
 * 获取单个state
 */
function selectStore(state: keyof State) {
  return localStorage.getItem(state) ? useAuthStore(store => store[state]) : null;
}
