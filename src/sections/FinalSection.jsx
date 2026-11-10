import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, Sparkles, Compass } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FloatingShape from '../components/FloatingShape';

gsap.registerPlugin(ScrollTrigger);

export default function FinalSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background layer
      gsap.to('.final-bg', {
        y: -50,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      // Mid layer
      gsap.to('.final-mid', {
        y: -120,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      // Foreground
      gsap.to('.final-fg', {
        y: -210,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="final"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #F1EDFF 0%, #EAF5FF 30%, #F8FAFC 60%, #FFFFFF 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      <div className="final-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(53,104,255,0.08) 0%, rgba(134,100,255,0.04) 45%, transparent 70%)',
          filter: 'blur(16px)',
        }} />
        <FloatingShape shape="circle" size={240} gradient="linear-gradient(135deg, rgba(134,100,255,0.05), rgba(53,104,255,0.03))" top="10%" right="8%" blur={24} duration={14} />
      </div>

      {/* Mid Layer: Geometric Sculptures */}
      <div className="final-mid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="ring" size={130} color="#3568FF" opacity={0.06} top="18%" left="8%" duration={10} />
        <FloatingShape shape="diamond" size={90} color="#8664FF" opacity={0.06} top="62%" right="12%" duration={12} delay={2} />
        <FloatingShape shape="square" size={70} gradient="linear-gradient(135deg, rgba(255,128,111,0.06), rgba(255,180,91,0.04))" top="38%" left="72%" duration={11} delay={1} />

        {/* Sculptural geometric frames */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '22%',
            right: '10%',
            width: '120px',
            height: '150px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(53,104,255,0.06), rgba(134,100,255,0.04))',
            border: '1.5px solid rgba(53,104,255,0.09)',
            backdropFilter: 'blur(8px)',
          }}
        />
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '18%',
            left: '6%',
            width: '90px',
            height: '90px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(69,200,232,0.06), rgba(53,104,255,0.04))',
            border: '1.5px solid rgba(69,200,232,0.09)',
            transform: 'rotate(18deg)',
            backdropFilter: 'blur(8px)',
          }}
        />
      </div>

      {/* Foreground Layer */}
      <div className="final-fg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={16} color="#3568FF" opacity={0.25} top="22%" left="28%" duration={5} />
        <FloatingShape shape="circle" size={12} color="#8664FF" opacity={0.3} top="48%" right="22%" duration={4} delay={1} />
        <FloatingShape shape="diamond" size={14} color="#FFB45B" opacity={0.25} top="68%" left="52%" duration={6} delay={2} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '850px',
      }}>
        <SectionHeading
          title="THE JOURNEY DOESN'T END HERE."
          subtitle="Keep exploring. Keep creating. Keep pushing beyond boundaries."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          style={{
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: '0 8px 32px rgba(53,104,255,0.07)',
            marginBottom: '3rem',
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: '#1A1A2E',
            fontWeight: 600,
            marginBottom: '0.75rem',
            fontFamily: 'Space Grotesk, sans-serif',
          }}>
            Crafted with Vision & Motion by Omkar
          </p>
          <p style={{
            fontSize: '0.95rem',
            color: '#4A4A6A',
            lineHeight: 1.75,
            maxWidth: '650px',
            margin: '0 auto',
          }}>
            Demonstrating multi-tiered parallax scrolling velocity ratios, GSAP ScrollTrigger timeline pins, responsive glassmorphic interfaces, and modern creative web architecture.
          </p>
        </motion.div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 12px 35px rgba(53,104,255,0.35)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            style={{
              padding: '1.1rem 2.75rem',
              borderRadius: '16px',
              fontSize: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #3568FF, #8664FF)',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Sparkles size={18} />
            Explore Again
            <ArrowUp size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06, background: 'rgba(53,104,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('parallax-showcase')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '1.1rem 2.25rem',
              borderRadius: '16px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'rgba(255,255,255,0.8)',
              color: '#3568FF',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              border: '1.5px solid rgba(53,104,255,0.25)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Compass size={18} />
            View Showcase Scene
          </motion.button>
        </div>
      </div>

      {/* Ambient floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25 - Math.random() * 35, 0],
            opacity: [0.12, 0.4, 0.12],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            borderRadius: '50%',
            background: ['#3568FF', '#8664FF', '#45C8E8', '#FFB45B'][i % 4],
            top: `${12 + Math.random() * 75}%`,
            left: `${Math.random() * 98}%`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </section>
  );
}

