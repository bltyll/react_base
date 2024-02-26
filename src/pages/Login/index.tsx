import { useAuthDispatch } from '@/stores';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn } = useAuthDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          signIn('token', () => {
            navigate('/home');
          });
        }}
      >
        signin
      </button>
    </div>
  );
};
export default Login;
