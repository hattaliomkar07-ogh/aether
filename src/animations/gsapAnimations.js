import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createParallaxLayer(element, speed, trigger) {
  return gsap.to(element, {
    y: () => speed * ScrollTrigger.maxScroll(window),
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
}

export function createTextReveal(elements, trigger) {
  return gsap.from(elements, {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse',
    },
  });
}

export function createFadeInUp(elements, trigger) {
  return gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: trigger,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

export function createScaleIn(element, trigger) {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: trigger,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

export { gsap, ScrollTrigger };
