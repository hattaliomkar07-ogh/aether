import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import FloatingShape from '../components/FloatingShape';

gsap.registerPlugin(ScrollTrigger);

const planets = [
  {
    name: 'Nebula Prime',
    tag: 'CREATIVE CLUSTER',
    desc: 'An iridescent gas giant radiating violet energy and orbiting crystalline matter.',
    size: 150,
    color: 'linear-gradient(135deg, #8664FF, #B794F6)',
    ring: true,
  },
  {
    name: 'Horizon Alpha',
    tag: 'STELLAR CORE',
    desc: 'A luminous sphere positioned at the threshold of computational discovery and insight.',
    size: 110,
    color: 'linear-gradient(135deg, #3568FF, #45C8E8)',
    ring: false,
  },
  {
    name: 'Solstice IV',
    tag: 'ENERGY CRADLE',
    desc: 'A planetary furnace of thermal auroras, inspiring radiant ideas and pioneering concepts.',
    size: 130,
    color: 'linear-gradient(135deg, #FFB45B, #FF806F)',
    ring: true,
  },
];

export default function Space() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background layer - slowest
      gsap.to('.space-bg', {
        y: -50,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });

      // Mid layer - medium
      gsap.to('.space-mid', {
        y: -130,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });

      // Foreground - fastest
      gsap.to('.space-fg', {
        y: -240,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });

      // Planetary rotational drift based on scroll
      gsap.to('.planet-1', { rotation: 25, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 } });
      gsap.to('.planet-2', { rotation: -20, y: -80, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2.5 } });
      gsap.to('.planet-3', { rotation: 30, y: -50, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.8 } });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="space"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #EAF5FF 0%, #F1EDFF 40%, #EAF5FF 70%, #F8FAFC 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer: Stars & Planetary Silhouettes */}
      <div className="space-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 45 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: (i % 5) * 0.7 }}
            style={{
              position: 'absolute',
              width: 2 + (i % 4),
              height: 2 + (i % 4),
              borderRadius: '50%',
              background: ['#3568FF', '#8664FF', '#45C8E8', '#FFB45B'][i % 4],
              top: `${(i * 19) % 96}%`,
              left: `${(i * 27) % 98}%`,
              boxShadow: '0 0 8px rgba(134,100,255,0.4)',
            }}
          />
        ))}

        {/* Massive celestial curvature */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(134,100,255,0.12), rgba(134,100,255,0.02) 65%, transparent 75%)',
          filter: 'blur(10px)',
        }} />
      </div>

      {/* Mid Layer: Orbital Bodies & Rings */}
      <div className="space-mid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Planet 1 - Violet Ringed */}
        <motion.div
          className="planet-1"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '14%', right: '8%' }}
        >
          <div style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(134,100,255,0.22), rgba(53,104,255,0.12))',
            border: '1.5px solid rgba(134,100,255,0.25)',
            boxShadow: '0 10px 40px rgba(134,100,255,0.15)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotateX(72deg)',
              width: '210px',
              height: '210px',
              borderRadius: '50%',
              border: '2.5px solid rgba(134,100,255,0.25)',
            }} />
          </div>
        </motion.div>

        {/* Planet 2 - Cyan Orb */}
        <motion.div
          className="planet-2"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ position: 'absolute', top: '48%', left: '6%' }}
        >
          <div style={{
            width: '85px',
            height: '85px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(53,104,255,0.18), rgba(69,200,232,0.12))',
            border: '1.5px solid rgba(69,200,232,0.2)',
            boxShadow: '0 8px 30px rgba(69,200,232,0.12)',
          }} />
        </motion.div>

        {/* Planet 3 - Warm Amber Ringed */}
        <motion.div
          className="planet-3"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ position: 'absolute', bottom: '16%', right: '18%' }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,180,91,0.2), rgba(255,128,111,0.12))',
            border: '1.5px solid rgba(255,180,91,0.22)',
            boxShadow: '0 8px 30px rgba(255,180,91,0.15)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotateX(75deg)',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '2px solid rgba(255,180,91,0.22)',
            }} />
          </div>
        </motion.div>

        <FloatingShape shape="ring" size={70} color="#8664FF" opacity={0.08} top="35%" left="42%" duration={11} />
      </div>

      {/* Foreground Layer - Satellite particles & sparkles */}
      <div className="space-fg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={14} color="#FFB45B" opacity={0.35} top="22%" left="28%" duration={4} />
        <FloatingShape shape="circle" size={10} color="#8664FF" opacity={0.35} top="58%" right="32%" duration={3.5} delay={1} />
        <FloatingShape shape="diamond" size={16} color="#45C8E8" opacity={0.3} top="42%" left="68%" duration={5} delay={2} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1150px', margin: '0 auto' }}>
        <SectionHeading
          title="EXPLORE WHAT LIES BEYOND."
          subtitle="Dimension Three: Space — A bright cosmic expanse where boundless curiosity traverses planetary vistas."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.25rem',
          marginTop: '2.5rem',
        }}>
          {planets.map(({ name, tag, desc, size, color, ring }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <GlassCard style={{ textAlign: 'center', padding: '2.75rem 2rem' }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#8664FF',
                  marginBottom: '1.25rem',
                }}>
                  {tag}
                </span>

                {/* Planet interactive display */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 12 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 15 }}
                  style={{
                    width: size * 0.6,
                    height: size * 0.6,
                    borderRadius: '50%',
                    background: color,
                    margin: '0 auto 1.75rem',
                    position: 'relative',
                    boxShadow: '0 12px 35px rgba(134,100,255,0.22)',
                  }}
                >
                  {ring && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotateX(70deg)',
                      width: size * 0.9,
                      height: size * 0.9,
                      borderRadius: '50%',
                      border: '3px solid rgba(255,255,255,0.5)',
                      boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                    }} />
                  )}
                </motion.div>

                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  background: color,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#4A4A6A', lineHeight: 1.65 }}>
                  {desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
