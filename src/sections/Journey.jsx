import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import FloatingShape from '../components/FloatingShape';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background layer parallax
      gsap.to('.journey-bg', {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Mid layer
      gsap.to('.journey-mid', {
        y: -160,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Foreground
      gsap.to('.journey-fg', {
        y: -280,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Staggered text
      gsap.from('.journey-word', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.journey-text-block',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = ['Every', 'Scroll', 'Opens', 'A', 'New', 'World.'];

  return (
    <section
      id="journey"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #FFF0E7 0%, #F8FAFC 30%, #EAF5FF 100%)',
        padding: '8rem 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      <div className="journey-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={200} gradient="linear-gradient(135deg, rgba(53,104,255,0.06), rgba(134,100,255,0.04))" top="10%" left="5%" blur={20} duration={12} />
        <FloatingShape shape="circle" size={300} gradient="linear-gradient(135deg, rgba(255,128,111,0.06), rgba(255,180,91,0.04))" top="40%" right="0%" blur={30} duration={15} delay={2} />
        {/* Gradient band */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(90deg, transparent, rgba(53,104,255,0.03), rgba(134,100,255,0.03), transparent)',
          transform: 'skewY(-3deg)',
        }} />
      </div>

      {/* Mid Layer */}
      <div className="journey-mid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="ring" size={120} color="#3568FF" opacity={0.08} top="20%" right="15%" duration={9} />
        <FloatingShape shape="diamond" size={70} color="#8664FF" opacity={0.07} top="60%" left="12%" duration={10} delay={1} />
        <FloatingShape shape="square" size={50} gradient="linear-gradient(135deg, rgba(69,200,232,0.1), rgba(53,104,255,0.05))" top="35%" left="70%" duration={8} delay={3} />

        {/* Overlapping decorative panels */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '60%',
          width: '200px',
          height: '250px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(53,104,255,0.04), rgba(134,100,255,0.03))',
          border: '1px solid rgba(53,104,255,0.06)',
          transform: 'rotate(8deg)',
        }} />
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '63%',
          width: '180px',
          height: '230px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(134,100,255,0.04), rgba(69,200,232,0.03))',
          border: '1px solid rgba(134,100,255,0.06)',
          transform: 'rotate(-4deg)',
        }} />
      </div>

      {/* Foreground Layer */}
      <div className="journey-fg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={20} color="#FFB45B" opacity={0.3} top="25%" left="25%" duration={5} />
        <FloatingShape shape="circle" size={12} color="#FF806F" opacity={0.3} top="50%" right="30%" duration={4} delay={1} />
        <FloatingShape shape="diamond" size={16} color="#45C8E8" opacity={0.25} top="70%" left="40%" duration={6} delay={2} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '900px',
      }}>
        <SectionHeading
          title="THE JOURNEY BEGINS"
          subtitle="Where curiosity meets creativity, and every scroll reveals a new dimension waiting to be explored."
        />

        {/* Large staggered text */}
        <div className="journey-text-block" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem 1rem',
          marginTop: '2rem',
        }}>
          {words.map((word, i) => (
            <span
              key={i}
              className="journey-word"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, #3568FF, #8664FF)'
                  : 'linear-gradient(135deg, #FF806F, #FFB45B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
