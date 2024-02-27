import { useAuthDispatch } from '@/stores';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn } = useAuthDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div>
      <button
        onClick={() => {
          signIn('token', () => {
            navigate(state);
          });
        }}
      >
        signin
      </button>
    </div>
  );
};
export default Login;
