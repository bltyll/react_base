import { ReactElement, useEffect, useRef } from 'react';
interface LazyLoadProps {
  //和React.ReactNode对比，限制了只能传一个子元素，且不能是string之类的类型
  children: ReactElement;
}
const TagNameEnum = ['VIDEO', 'IMG', 'IFRAME'];
type ElementType = HTMLImageElement | HTMLIFrameElement | HTMLVideoElement;
export const LazyLoad: FC<LazyLoadProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //获取data-src属性的元素
    const targetElement = ref.current?.querySelector('[data-src]');
    // 创建IntersectionObserver实例
    const observer = new IntersectionObserver(([entry]) => {
      const lazyElement = entry.target as ElementType;
      // 当资源进入可视区域时，设置资源地址进行加载
      if (entry.isIntersecting) {
        //获取data-src
        const datasetSrc = lazyElement.dataset.src;
        if (TagNameEnum.includes(lazyElement.tagName) && datasetSrc) {
          // element.load();
          lazyElement.src = datasetSrc;
          observer.unobserve(lazyElement);
        }
      }
    });
    if (targetElement) {
      observer.observe(targetElement); //开始观察目标元素
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};
