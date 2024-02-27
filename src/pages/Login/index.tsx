import { useAuthDispatch } from '@/stores';

const Login = () => {
  const { signIn } = useAuthDispatch();

  return (
    <div>
      <button
        onClick={() => {
          signIn('token');
        }}
      >
        signin
      </button>
    </div>
  );
};
export default Login;
