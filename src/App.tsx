import { RouterProvider } from 'react-router-dom';
import './app.css';
import { route } from './routes';
import { getTemplate } from './servers/test';
import { useAuthDispatch, useToken } from './stores';
import { useGlobalDispatch, useTheme } from './stores/globalStore';
function App() {
  const { setTheme } = useGlobalDispatch();
  const { signOut, signIn } = useAuthDispatch();
  const token = useToken();
  const theme = useTheme();
  return (
    <div className='bg-white dark:bg-black'>
      {token}
      {theme}
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
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
