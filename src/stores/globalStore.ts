import { create } from 'zustand';
//type
interface State {
  a: string;
}

interface Action {}
//store
export const globalStore = create<State & Action>(set => ({
  a: 'light'
}));
//dispatch
export const useThemeDispatch = () => {
  const {} = globalStore();
  return {
    a: globalStore(state => state.a)
  };
};
