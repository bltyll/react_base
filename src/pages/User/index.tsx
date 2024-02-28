import img from '@/assets/1.jpeg';
import img2 from '@/assets/2.png';
import { LazyLoad } from '@/components/LazyLoad';

const User = () => {
  return (
    <div className=''>
      <LazyLoad>
        <img data-src={img} alt='' className='object-cover h-[300px] w-[500px]' />
      </LazyLoad>
      <div className='h-screen'>User</div>
      <LazyLoad>
        <img data-src={img2} alt='' className='object-cover h-[300px] w-[500px]' />
      </LazyLoad>
      {/* <LazyLoad>
        <iframe
          data-src='https://react.docschina.org/reference/react/forwardRef#exposing-a-dom-node-to-the-parent-component'
          width='500'
          height='500'
        ></iframe>
      </LazyLoad> */}
      <LazyLoad>
        <video
          data-lazyload
          data-src='https://colinbendell.github.io/webperf/animated-gif-decode/1.mp4'
          muted
          autoPlay
          loop
        ></video>
      </LazyLoad>
      <LazyLoad>
        <div>1</div>
      </LazyLoad>
      1
    </div>
  );
};
export default User;
