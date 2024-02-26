import Layout from '@/layout';
import Error from '@/pages/Error';
import Login from '@/pages/Login';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
//lazy组件只支持默认导出的组件
const User = lazy(() => import('@/pages/User'));
const Home = lazy(() => import('@/pages/Home'));

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: 'user',
        element: <User></User>
      },
      {
        index: true,
        path: 'home',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  { path: '*', element: <Error></Error> }
]);
