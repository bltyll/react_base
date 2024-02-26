import { Home } from '@/pages';
import './app.css';
import { getTemplate } from './servers/test';
import { useThemeDispatch } from './stores/themeStore';
function App() {
  const { setTheme, theme } = useThemeDispatch();
  return (
    <div className='bg-white dark:bg-black'>
      <Home></Home>
      <button
        className='border border-solid'
        onClick={async () => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
          const a = await getTemplate(1);
          console.log(a);
        }}
      >
        button
      </button>
    </div>
  );
}

export default App;
