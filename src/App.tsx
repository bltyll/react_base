import { Home } from '@/pages';
import './app.css';
import { getTemplate } from './servers/test';
import { useAuthDispatch, useToken } from './stores';
import { useGlobalDispatch, useTheme } from './stores/themeStore';
function App() {
  const { setTheme } = useGlobalDispatch();
  const { signOut, signIn } = useAuthDispatch();
  const token = useToken();
  const theme = useTheme();
  return (
    <div className='bg-white dark:bg-black'>
      {token}
      {theme}
      <Home></Home>
      <button
        className='border border-solid'
        onClick={async () => {
          signIn('token');
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
          try {
            const a = await getTemplate(1);
            console.log(a);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        button
      </button>
    </div>
  );
}

export default App;
