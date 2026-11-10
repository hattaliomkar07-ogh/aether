import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, FlaskConical, Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import FloatingShape from '../components/FloatingShape';

gsap.registerPlugin(ScrollTrigger);

const innovationCards = [
  {
    icon: Lightbulb,
    title: 'Engineering',
    category: 'SYSTEM ARCHITECTURE',
    desc: 'Constructing robust digital infrastructures, algorithmic pipelines, and structural frameworks that withstand exponential scale.',
    color: '#3568FF',
    gradient: 'linear-gradient(135deg, #3568FF, #45C8E8)',
  },
  {
    icon: Palette,
    title: 'Creativity',
    category: 'AESTHETIC HARMONY',
    desc: 'Bridging technical precision with expressive visual narratives, tactile glassmorphism, and responsive motion physics.',
    color: '#8664FF',
    gradient: 'linear-gradient(135deg, #8664FF, #B794F6)',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Discovery',
    category: 'EXPERIMENTAL RESEARCH',
    desc: 'Empirical experimentation at the convergence of human cognition, computer vision, and computational biology.',
    color: '#45C8E8',
    gradient: 'linear-gradient(135deg, #45C8E8, #3568FF)',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    category: 'VENTURE ACCELERATION',
    desc: 'Translating disruptive concepts into viable ecosystems, scalable platforms, and worldwide transformative impact.',
    color: '#FF806F',
    gradient: 'linear-gradient(135deg, #FF806F, #FFB45B)',
  },
];

export default function Innovation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3 Layers of parallax
      gsap.to('.innov-bg', {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      gsap.to('.innov-mid', {
        y: -140,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
      gsap.to('.innov-fg', {
        y: -250,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });

      // Cards staggered reveal
      gsap.from('.innov-card', {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.innov-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="innovation"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFF0E7 40%, #F1EDFF 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      <div className="innov-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={320} gradient="linear-gradient(135deg, rgba(255,128,111,0.06), rgba(255,180,91,0.03))" top="10%" right="-5%" blur={35} duration={14} />
        <FloatingShape shape="circle" size={280} gradient="linear-gradient(135deg, rgba(134,100,255,0.06), rgba(53,104,255,0.03))" bottom="5%" left="-5%" blur={30} duration={16} delay={3} />
      </div>

      {/* Mid Layer: 3D Shapes & Prisms */}
      <div className="innov-mid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="ring" size={110} color="#FF806F" opacity={0.08} top="20%" left="8%" duration={9} />
        <FloatingShape shape="diamond" size={70} color="#FFB45B" opacity={0.08} top="65%" right="10%" duration={11} delay={2} />
        <FloatingShape shape="square" size={80} gradient="linear-gradient(135deg, rgba(134,100,255,0.08), rgba(53,104,255,0.04))" top="38%" left="75%" duration={10} delay={1} />

        {/* 3D-inspired floating prism */}
        <motion.div
          animate={{ y: [0, -22, 0], rotateZ: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '25%',
            right: '7%',
            width: '110px',
            height: '110px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(255,128,111,0.09), rgba(255,180,91,0.05))',
            border: '1.5px solid rgba(255,128,111,0.12)',
            transform: 'perspective(400px) rotateY(18deg) rotateX(8deg)',
            backdropFilter: 'blur(8px)',
          }}
        />
      </div>

      {/* Foreground Layer */}
      <div className="innov-fg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingShape shape="circle" size={18} color="#FF806F" opacity={0.3} top="28%" left="22%" duration={5} />
        <FloatingShape shape="circle" size={12} color="#FFB45B" opacity={0.35} top="55%" right="26%" duration={4} delay={1} />
        <FloatingShape shape="diamond" size={16} color="#8664FF" opacity={0.25} top="72%" left="60%" duration={6} delay={2} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto' }}>
        <SectionHeading
          title="IMAGINATION HAS NO LIMITS."
          subtitle="Dimension Four: Innovation — A premium showcase of engineering, creativity, science, and entrepreneurship."
        />

        <div className="innov-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
        }}>
          {innovationCards.map(({ icon: Icon, title, category, desc, color, gradient }, i) => (
            <div key={i} className="innov-card">
              <GlassCard style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 6px 20px ${color}35`,
                  }}>
                    <Icon size={26} color="white" />
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: color,
                    background: `${color}15`,
                    padding: '0.35rem 0.65rem',
                    borderRadius: '8px',
                  }}>
                    0{i + 1}
                  </span>
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: '#8A8AAA',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase',
                }}>
                  {category}
                </span>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  marginBottom: '0.85rem',
                  color: '#1A1A2E',
                }}>
                  {title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#4A4A6A',
                  lineHeight: 1.7,
                  marginTop: 'auto',
                }}>
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

