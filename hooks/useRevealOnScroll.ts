import { useEffect, useRef } from 'react';

interface Options extends IntersectionObserverInit {
  direction?: 'left' | 'right' | 'up';
}

const useRevealOnScroll = <T extends HTMLElement>(
  animationClass: string,
  { direction = 'up', ...options }: Options = {}
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const baseClass = `reveal-${direction}`;
    node.classList.add(baseClass);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [animationClass, direction, options?.root, options?.rootMargin, options?.threshold]);

  return ref;
};

export default useRevealOnScroll;
