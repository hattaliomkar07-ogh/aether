import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const navLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'Journey', target: 'journey' },
  { label: 'Dimensions', target: 'technology' },
  { label: 'Experience', target: 'parallax-showcase' },
  { label: 'About', target: 'final' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScrollProgress();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    navLinks.forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.75rem 2rem' : '1.25rem 2rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '16px',
          padding: '0.75rem 1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: isScrolled
            ? '0 8px 32px rgba(53, 104, 255, 0.1)'
            : '0 4px 16px rgba(53, 104, 255, 0.05)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
          }}
          onClick={() => scrollTo('hero')}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3568FF, #8664FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={20} color="white" />
          </div>
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              background: 'linear-gradient(135deg, #3568FF, #8664FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AETHER
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map(({ label, target }) => (
            <motion.button
              key={target}
              onClick={() => scrollTo(target)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: 500,
                background:
                  activeSection === target
                    ? 'linear-gradient(135deg, #3568FF, #8664FF)'
                    : 'transparent',
                color: activeSection === target ? 'white' : '#4A4A6A',
                transition: 'all 0.3s ease',
                border: 'none',
              }}
            >
              {label}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(53, 104, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('journey')}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '10px',
              fontSize: '0.875rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #3568FF, #8664FF)',
              color: 'white',
              marginLeft: '0.5rem',
              border: 'none',
            }}
          >
            Explore ✦
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '0.5rem',
            color: '#1A1A2E',
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: '2rem',
              right: '2rem',
              marginTop: '0.5rem',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(53, 104, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map(({ label, target }) => (
              <motion.button
                key={target}
                onClick={() => scrollTo(target)}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  background:
                    activeSection === target
                      ? 'linear-gradient(135deg, #3568FF, #8664FF)'
                      : 'transparent',
                  color: activeSection === target ? 'white' : '#4A4A6A',
                  textAlign: 'left',
                  border: 'none',
                }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
