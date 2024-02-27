import { useEffect } from 'react';
import NProgress from 'nprogress';

function Loading() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <div>Loading</div>;
}

export default Loading;
