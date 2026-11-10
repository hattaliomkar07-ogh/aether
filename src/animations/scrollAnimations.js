import { gsap, ScrollTrigger } from './gsapAnimations';

export function setupSectionParallax(sectionRef, layers) {
  const ctx = gsap.context(() => {
    layers.forEach(({ selector, speed, rotate, scale: scaleVal }) => {
      const elements = sectionRef.querySelectorAll(selector);
      if (!elements.length) return;

      gsap.to(elements, {
        y: () => speed * 300,
        rotation: rotate || 0,
        scale: scaleVal || 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });
    });
  }, sectionRef);

  return ctx;
}

export function setupBackgroundTransition(sectionRef, fromColor, toColor) {
  return gsap.to(sectionRef, {
    backgroundColor: toColor,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });
}

export function createStaggeredReveal(containerRef, childSelector) {
  const children = containerRef.querySelectorAll(childSelector);
  return gsap.from(children, {
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: containerRef,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}
