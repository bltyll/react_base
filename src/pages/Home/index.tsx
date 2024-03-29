import { getTemplate } from '@/servers/test';
import { useAuthDispatch } from '@/stores';
import { useGlobalDispatch, useTheme } from '@/stores/globalStore';
import dayjs from 'dayjs';
import style from './index.m.css';
const Home = () => {
  const { signOut, signIn } = useAuthDispatch();
  const { setTheme } = useGlobalDispatch();
  const theme = useTheme();
  return (
    <div className={style.a}>
      <button
        onClick={() => {
          signOut();
        }}
      >
        signOut
      </button>
      <button
        className='border border-solid'
        onClick={async () => {
          // signIn('token');
          console.log(dayjs('2013-11-18 11:55').format());

          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
          try {
            const a = await getTemplate(1);
            // console.log(a);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        button
      </button>
    </div>
  );
};
export default Home;
