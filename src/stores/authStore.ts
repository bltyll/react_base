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
export const authStore = create(
  persist<State & Action>(
    set => ({
      token: '',
      setToken: (token: string) => set({ token })
    }),
    { name: 'token' }
  )
);
//dispatch
export const useAuthDispatch = () => {
  const { setToken } = authStore();
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
