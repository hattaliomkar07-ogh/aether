import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

const socialIcons = [
  {
    name: 'GitHub',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Journey', target: 'journey' },
    { label: 'Technology', target: 'technology' },
    { label: 'Nature', target: 'nature' },
    { label: 'Space', target: 'space' },
    { label: 'Innovation', target: 'innovation' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EAF5FF 100%)',
        padding: '5rem 2rem 2.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(53, 104, 255, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '11px',
                  background: 'linear-gradient(135deg, #3568FF, #8664FF)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(53, 104, 255, 0.3)',
                }}
              >
                <Sparkles size={20} color="white" />
              </div>
              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.35rem',
                  background: 'linear-gradient(135deg, #3568FF, #8664FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AETHER
              </span>
            </div>
            <p
              style={{
                color: '#4A4A6A',
                fontSize: '0.92rem',
                lineHeight: 1.7,
              }}
            >
              An immersive multi-layered parallax scrolling experience — navigating dimensions of creativity, technology, and visionary craft. 
              Created by Omkar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#1A1A2E',
                marginBottom: '1.25rem',
              }}
            >
              Dimensions
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {footerLinks.map(({ label, target }) => (
                <motion.button
                  key={target}
                  onClick={() => scrollTo(target)}
                  whileHover={{ x: 4, color: '#3568FF' }}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    color: '#4A4A6A',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#1A1A2E',
                marginBottom: '1.25rem',
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialIcons.map(({ name, svg }, i) => (
                <motion.div
                  key={i}
                  title={name}
                  whileHover={{
                    scale: 1.15,
                    background: 'linear-gradient(135deg, #3568FF, #8664FF)',
                    color: '#FFFFFF',
                    boxShadow: '0 6px 20px rgba(53, 104, 255, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(53, 104, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#4A4A6A',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {svg}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(53,104,255,0.2), transparent)',
            marginBottom: '2rem',
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: '#8A8AAA', fontSize: '0.84rem' }}>
            © {new Date().getFullYear()} AETHER — Journey Through Dimensions. Created by Omkar. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.55rem 1.15rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3568FF, #8664FF)',
              color: 'white',
              fontSize: '0.82rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(53,104,255,0.2)',
            }}
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
