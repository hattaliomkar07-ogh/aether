import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Compass, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxLayer from '../components/ParallaxLayer';
import FloatingShape from '../components/FloatingShape';
import { useMousePosition } from '../hooks/useMousePosition';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text entrance
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });
      gsap.from('.hero-subtitle', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });
      gsap.from('.hero-buttons', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.9,
      });

      // Parallax on scroll
      gsap.to('.hero-bg-layer', {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
      gsap.to('.hero-mid-layer', {
        y: 250,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
      gsap.to('.hero-fg-layer', {
        y: 400,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #EAF5FF 40%, #F1EDFF 70%, #FFF0E7 100%)',
      }}
    >
      {/* Background Layer - Slowest */}
      <div
        className="hero-bg-layer"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Large sun/glow */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: `translate(-50%, 0) translate(${mouse.x * 5}px, ${mouse.y * 5}px)`,
            width: 'min(500px, 70vw)',
            height: 'min(500px, 70vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,180,91,0.35) 0%, rgba(255,128,111,0.15) 40%, transparent 70%)',
            filter: 'blur(2px)',
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Mountain silhouettes - far */}
        <svg
          viewBox="0 0 1440 400"
          style={{
            position: 'absolute',
            bottom: '10%',
            left: 0,
            width: '100%',
            opacity: 0.12,
          }}
        >
          <path d="M0,400 L0,250 Q180,100 360,200 Q540,80 720,180 Q900,60 1080,170 Q1260,100 1440,220 L1440,400 Z" fill="#8664FF" />
        </svg>

        {/* Clouds */}
        <div
          className="animate-drift"
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '180px',
            height: '60px',
            borderRadius: '40px',
            background: 'rgba(255,255,255,0.7)',
            filter: 'blur(8px)',
          }}
        />
        <div
          className="animate-drift"
          style={{
            position: 'absolute',
            top: '15%',
            right: '15%',
            width: '140px',
            height: '45px',
            borderRadius: '30px',
            background: 'rgba(255,255,255,0.5)',
            filter: 'blur(10px)',
            animationDelay: '3s',
          }}
        />
      </div>

      {/* Middle Layer */}
      <div
        className="hero-mid-layer"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Mountain - closer */}
        <svg
          viewBox="0 0 1440 350"
          style={{
            position: 'absolute',
            bottom: '5%',
            left: 0,
            width: '110%',
            marginLeft: '-5%',
            opacity: 0.08,
          }}
        >
          <path d="M0,350 L0,200 Q200,80 400,180 Q600,50 800,150 Q1000,30 1200,130 Q1350,80 1440,180 L1440,350 Z" fill="#3568FF" />
        </svg>

        <FloatingShape shape="ring" size={100} color="#3568FF" opacity={0.12} top="25%" left="8%" duration={8} />
        <FloatingShape shape="circle" size={60} gradient="linear-gradient(135deg, #45C8E8, #3568FF)" opacity={0.1} top="35%" right="10%" duration={7} delay={1} />
        <FloatingShape shape="diamond" size={50} color="#8664FF" opacity={0.1} top="60%" left="15%" duration={9} delay={2} />
        <FloatingShape shape="square" size={40} gradient="linear-gradient(135deg, #FF806F, #FFB45B)" opacity={0.08} top="70%" right="20%" duration={10} delay={0.5} />
      </div>

      {/* Foreground Layer - Fastest */}
      <div
        className="hero-fg-layer"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        <FloatingShape shape="circle" size={25} color="#FFB45B" opacity={0.2} top="30%" left="20%" duration={5} />
        <FloatingShape shape="circle" size={15} color="#FF806F" opacity={0.25} top="55%" right="25%" duration={4} delay={1} />
        <FloatingShape shape="diamond" size={20} color="#45C8E8" opacity={0.2} top="45%" left="75%" duration={6} delay={2} />
        <FloatingShape shape="ring" size={35} color="#8664FF" opacity={0.15} top="65%" left="30%" duration={7} delay={0.5} />
      </div>

      {/* Geometric floating structures */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Translucent geometric prism */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotateZ: [0, 5, 0],
            rotateY: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '12%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(53,104,255,0.08), rgba(134,100,255,0.06))',
            border: '1px solid rgba(53,104,255,0.12)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />
        {/* Hexagonal shape */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '8%',
            width: '90px',
            height: '90px',
            background: 'linear-gradient(135deg, rgba(69,200,232,0.1), rgba(53,104,255,0.06))',
            border: '1px solid rgba(69,200,232,0.15)',
            borderRadius: '24px',
            transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px) rotate(30deg)`,
            transition: 'transform 0.4s ease-out',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 2rem',
          maxWidth: '900px',
        }}
      >
        <motion.div
          className="hero-title"
          style={{
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#8664FF',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            ✦ AETHER — JOURNEY THROUGH DIMENSIONS ✦
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg, #1A1A2E 0%, #3568FF 50%, #8664FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            SCROLL BEYOND
            <br />
            THE ORDINARY.
          </h1>
        </motion.div>

        <p
          className="hero-subtitle"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
            color: '#4A4A6A',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          An immersive journey through creativity, technology and imagination.
        </p>

        <div
          className="hero-buttons"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(53,104,255,0.35)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '1rem 2.5rem',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #3568FF, #8664FF)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none',
            }}
          >
            <Compass size={18} />
            Start Your Journey
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, background: 'rgba(53,104,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '1rem 2.5rem',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'rgba(53,104,255,0.05)',
              color: '#3568FF',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1.5px solid rgba(53,104,255,0.2)',
            }}
          >
            <Layers size={18} />
            Explore Dimensions
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#8A8AAA',
          }}
        >
          Scroll to explore
        </span>
        <ChevronDown size={20} color="#8A8AAA" />
      </motion.div>

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: 3 + Math.random() * 4,
            height: 3 + Math.random() * 4,
            borderRadius: '50%',
            background: ['#3568FF', '#8664FF', '#45C8E8', '#FFB45B', '#FF806F'][i % 5],
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </section>
  );
}
