import { useToken } from '@/stores';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth: FC = ({ children }) => {
  const token = useToken();
  const { pathname } = useLocation();
  //
  if (!token) {
    return <Navigate to={'/login'} state={pathname} replace></Navigate>;
  }
  return <>{children}</>;
};
