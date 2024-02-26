import { useToken } from '@/stores';
import { Suspense } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to={'test'}>oop</Link>
      <Link to={'home'}>home</Link>
      <Link to={'user'}>user</Link>
      <Suspense fallback={<div>loading</div>}>
        <RequireAuth>
          <Outlet />
        </RequireAuth>
      </Suspense>
    </div>
  );
};
const RequireAuth: FC = ({ children }) => {
  const token = useToken();
  if (!token) {
    return <Navigate to={'/login'} replace></Navigate>;
  }
  return <>{children}</>;
};
export default Layout;
