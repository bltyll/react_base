import { Home } from '@/pages';
import './app.css';
import { useThemeDispatch } from './stores/themeStore';
function App() {
  const { setTheme, theme } = useThemeDispatch();
  return (
    <div className='dark:bg-black bg-white'>
      <Home></Home>
      <button
        className='border border-solid'
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}
      >
        button
      </button>
    </div>
  );
}

export default App;
