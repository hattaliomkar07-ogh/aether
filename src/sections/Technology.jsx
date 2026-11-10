import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Bot, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import FloatingShape from '../components/FloatingShape';
import ParallaxLayer from '../components/ParallaxLayer';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    desc: 'Exploring the frontiers of machine learning, neural networks, and intelligent systems that redefine what\'s possible.',
    color: '#3568FF',
    gradient: 'linear-gradient(135deg, #3568FF, #45C8E8)',
  },
  {
    icon: Bot,
    title: 'Robotics',
    desc: 'Where mechanical precision meets digital intelligence — building machines that interact with and understand our world.',
    color: '#8664FF',
    gradient: 'linear-gradient(135deg, #8664FF, #B794F6)',
  },
  {
    icon: Zap,
    title: 'Future Computing',
    desc: 'Quantum processors, edge computing, and the next generation of computational architectures powering tomorrow.',
    color: '#45C8E8',
    gradient: 'linear-gradient(135deg, #45C8E8, #3568FF)',
  },
];

export default function Technology() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to('.tech-bg', {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      gsap.to('.tech-mid', {
        y: -140,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      gsap.to('.tech-fg', {
        y: -240,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });

      // Cards stagger
      gsap.from('.tech-card', {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-cards-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="technology"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #EAF5FF 0%, #F8FAFC 50%, #F1EDFF 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      <div className="tech-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Circuit pattern */}
        <svg viewBox="0 0 400 400" style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', opacity: 0.04 }}>
          <g stroke="#3568FF" strokeWidth="1" fill="none">
            <rect x="50" y="50" width="100" height="100" rx="8" />
            <rect x="200" y="100" width="80" height="80" rx="8" />
            <line x1="150" y1="100" x2="200" y2="140" />
            <circle cx="100" cy="100" r="8" fill="#3568FF" />
            <circle cx="240" cy="140" r="6" fill="#3568FF" />
            <rect x="80" y="220" width="120" height="60" rx="8" />
            <line x1="200" y1="250" x2="280" y2="180" />
            <circle cx="140" cy="250" r="6" fill="#3568FF" />
          </g>
        </svg>
        <FloatingShape shape="circle" size={250} gradient="linear-gradient(135deg, rgba(53,104,255,0.05), rgba(69,200,232,0.03))" top="20%" left="0%" blur={25} duration={14} />
      </div>

      {/* Mid Layer */}
      <div className="tech-mid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="ring" size={80} color="#3568FF" opacity={0.08} top="15%" left="10%" duration={9} />
        <FloatingShape shape="square" size={60} gradient="linear-gradient(135deg, rgba(53,104,255,0.08), rgba(134,100,255,0.05))" top="70%" right="8%" duration={10} delay={2} />
        
        {/* Floating screen */}
        <motion.div
          animate={{ y: [0, -15, 0], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '25%',
            left: '5%',
            width: '160px',
            height: '100px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(53,104,255,0.06), rgba(69,200,232,0.04))',
            border: '1px solid rgba(53,104,255,0.1)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ height: '4px', width: '60%', borderRadius: '2px', background: 'rgba(53,104,255,0.15)' }} />
            <div style={{ height: '4px', width: '80%', borderRadius: '2px', background: 'rgba(53,104,255,0.1)' }} />
            <div style={{ height: '4px', width: '45%', borderRadius: '2px', background: 'rgba(53,104,255,0.08)' }} />
          </div>
        </motion.div>
      </div>

      {/* Foreground Layer */}
      <div className="tech-fg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={18} color="#3568FF" opacity={0.2} top="30%" right="20%" duration={5} />
        <FloatingShape shape="diamond" size={14} color="#45C8E8" opacity={0.2} top="60%" left="25%" duration={6} delay={1} />
        <FloatingShape shape="circle" size={10} color="#8664FF" opacity={0.25} top="40%" left="80%" duration={4} delay={2} />

        {/* Floating sphere */}
        <motion.div
          animate={{ y: [0, -20, 0], rotateZ: [0, 360] }}
          transition={{ y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' } }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(53,104,255,0.12), rgba(69,200,232,0.08))',
            border: '1px solid rgba(53,104,255,0.15)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          title="WHERE IDEAS BECOME REALITY."
          subtitle="Dimension One: Technology — A futuristic realm where innovation drives the impossible into existence."
        />

        <div
          className="tech-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {cards.map(({ icon: Icon, title, desc, color, gradient }, i) => (
            <div key={i} className="tech-card">
              <GlassCard>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: `0 4px 20px ${color}30`,
                  }}
                >
                  <Icon size={26} color="white" />
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: '#1A1A2E',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#4A4A6A',
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
