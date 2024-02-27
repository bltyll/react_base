import Layout from '@/layout';
import Error from '@/pages/Error';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
//lazy组件只支持默认导出的组件
const User = lazy(() => import(/* webpackChunkName: "user" */ '@/pages/User'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/pages/Home'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ '@/pages/Login'));

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
