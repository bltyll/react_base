import { useAuthDispatch } from '@/stores';
import style from './index.m.css';
const Home = () => {
  const { signOut, signIn } = useAuthDispatch();
  return (
    <div className={style.a}>
      <button
        onClick={() => {
          signOut();
        }}
      >
        signOut
      </button>
    </div>
  );
};
export default Home;
