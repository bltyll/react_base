import { RouterProvider } from 'react-router-dom';
import './app.css';
import { route } from './routes';
function App() {
  return (
    <div className='bg-white dark:bg-black'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
