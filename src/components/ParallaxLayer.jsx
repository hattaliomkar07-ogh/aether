import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxLayer({
  children,
  speed = 0,
  rotate = 0,
  scale = 1,
  className = '',
  style = {},
  triggerRef,
}) {
  const layerRef = useRef(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const trigger = triggerRef?.current || el.closest('section') || el;

    const anim = gsap.to(el, {
      y: () => speed * 300,
      rotation: rotate,
      scale: scale,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [speed, rotate, scale, triggerRef]);

  return (
    <div
      ref={layerRef}
      className={className}
      style={{
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
