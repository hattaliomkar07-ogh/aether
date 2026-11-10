import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import FloatingShape from '../components/FloatingShape';

gsap.registerPlugin(ScrollTrigger);

export default function Nature() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background mountains - slowest
      gsap.to('.nature-bg', {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      // Mid trees
      gsap.to('.nature-mid', {
        y: -140,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      // Foreground leaves - fastest
      gsap.to('.nature-fg', {
        y: -260,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      // Independent clouds
      gsap.to('.nature-cloud-1', {
        x: 120,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
      gsap.to('.nature-cloud-2', {
        x: -100,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2.5 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nature"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #F1EDFF 0%, #EAF5FF 30%, #F0FFF4 60%, #EAF5FF 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer - Distant mountains */}
      <div className="nature-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 500" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', opacity: 0.1 }}>
          <path d="M0,500 L0,300 Q120,180 240,280 Q400,120 560,250 Q720,80 880,230 Q1040,100 1200,220 Q1320,160 1440,260 L1440,500 Z" fill="#45C8E8" />
        </svg>
        <svg viewBox="0 0 1440 500" style={{ position: 'absolute', bottom: 0, left: 0, width: '110%', marginLeft: '-5%', opacity: 0.08 }}>
          <path d="M0,500 L0,320 Q200,200 400,300 Q600,140 800,270 Q1000,130 1200,260 Q1350,200 1500,300 L1500,500 Z" fill="#3568FF" />
        </svg>

        {/* Sunlight glow */}
        <div style={{
          position: 'absolute',
          top: '5%',
          right: '15%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,180,91,0.22) 0%, rgba(255,180,91,0.06) 50%, transparent 70%)',
          filter: 'blur(12px)',
        }} />
      </div>

      {/* Mid Layer - Abstract Trees and Landscape */}
      <div className="nature-mid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[
          { left: '8%', bottom: '15%', height: 130, color: 'rgba(69,200,232,0.1)' },
          { left: '18%', bottom: '12%', height: 105, color: 'rgba(53,104,255,0.08)' },
          { right: '10%', bottom: '18%', height: 145, color: 'rgba(134,100,255,0.09)' },
          { right: '22%', bottom: '10%', height: 95, color: 'rgba(69,200,232,0.08)' },
        ].map((tree, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...tree,
            width: tree.height * 0.5,
          }}>
            <div style={{
              width: '100%',
              height: tree.height,
              background: tree.color,
              borderRadius: '50% 50% 12px 12px',
            }} />
            <div style={{
              width: '6px',
              height: tree.height * 0.3,
              background: tree.color,
              margin: '0 auto',
              borderRadius: '3px',
            }} />
          </div>
        ))}

        <FloatingShape shape="ring" size={90} color="#45C8E8" opacity={0.08} top="30%" left="20%" duration={10} />
        <FloatingShape shape="circle" size={60} gradient="linear-gradient(135deg, rgba(69,200,232,0.1), rgba(53,104,255,0.05))" top="40%" right="25%" duration={12} delay={2} />
      </div>

      {/* Clouds - Independent drift */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="nature-cloud-1" style={{
          position: 'absolute',
          top: '12%',
          left: '12%',
          width: '220px',
          height: '55px',
          borderRadius: '35px',
          background: 'rgba(255,255,255,0.7)',
          filter: 'blur(8px)',
        }} />
        <div className="nature-cloud-2" style={{
          position: 'absolute',
          top: '8%',
          right: '18%',
          width: '180px',
          height: '45px',
          borderRadius: '25px',
          background: 'rgba(255,255,255,0.6)',
          filter: 'blur(10px)',
        }} />
        <div className="nature-cloud-1" style={{
          position: 'absolute',
          top: '24%',
          left: '48%',
          width: '130px',
          height: '38px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.5)',
          filter: 'blur(12px)',
        }} />
      </div>

      {/* Foreground Layer - Leaves and Floating elements */}
      <div className="nature-fg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20 - Math.random() * 25, 0],
              x: [0, (Math.random() - 0.5) * 25, 0],
              rotate: [0, (Math.random() - 0.5) * 45, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: `${12 + Math.random() * 75}%`,
              left: `${Math.random() * 95}%`,
              width: 12 + Math.random() * 16,
              height: 16 + Math.random() * 20,
              borderRadius: '50% 0 50% 0',
              background: ['rgba(69,200,232,0.2)', 'rgba(53,104,255,0.18)', 'rgba(134,100,255,0.15)', 'rgba(255,180,91,0.18)'][i % 4],
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <SectionHeading
          title="INSPIRED BY THE WORLD AROUND US."
          subtitle="Dimension Two: Nature — Drawing organic balance, serenity, and boundless energy from the natural environment."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}>
          {[
            { emoji: '🏔️', title: 'Mountain Silhouettes', text: 'Staggered elevations moving gracefully as you navigate the terrain.' },
            { emoji: '🌊', title: 'Fluid Currents', text: 'Gentle transitions resembling rhythmic tides and cascading streams.' },
            { emoji: '🍃', title: 'Organic Depth', text: 'Floating foliage drifting across the foreground with independent inertia.' },
            { emoji: '☀️', title: 'Luminous Dawn', text: 'Ambient solar hues casting warm highlights over pristine vistas.' },
          ].map(({ emoji, title, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 20px 45px rgba(69,200,232,0.18)' }}
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(16px)',
                borderRadius: '22px',
                padding: '2.25rem 1.75rem',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 8px 30px rgba(69,200,232,0.08)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>{emoji}</div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.6rem', color: '#1A1A2E' }}>{title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#4A4A6A', lineHeight: 1.65 }}>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
