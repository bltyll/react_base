import Loading from '@/Loading';
import { RequireAuth } from '@/routes';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <Link to={'test'}>oop</Link>|<Link to={'home'}>home</Link>|<Link to={'user'}>user</Link>|
    <Suspense fallback={<Loading />}>
      <RequireAuth>
        <Outlet />
      </RequireAuth>
    </Suspense>
  </div>
);

export default Layout;
