import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Journey from './sections/Journey';
import Technology from './sections/Technology';
import Nature from './sections/Nature';
import Space from './sections/Space';
import Innovation from './sections/Innovation';
import ParallaxShowcase from './sections/ParallaxShowcase';
import FinalSection from './sections/FinalSection';
import { useScrollProgress } from './hooks/useScrollProgress';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { progress } = useScrollProgress();

  useEffect(() => {
    // Refresh ScrollTrigger after elements mount and fonts load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Scroll Progress Bar at the top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'rgba(53, 104, 255, 0.1)',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, #3568FF, #8664FF, #45C8E8, #FF806F)',
            transition: 'width 0.1s linear',
            boxShadow: '0 0 10px rgba(53, 104, 255, 0.5)',
          }}
        />
      </div>

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: The Journey Begins */}
        <Journey />

        {/* Section 4: Dimension One - Technology */}
        <Technology />

        {/* Section 5: Dimension Two - Nature */}
        <Nature />

        {/* Section 6: Dimension Three - Space */}
        <Space />

        {/* Section 7: Dimension Four - Innovation */}
        <Innovation />

        {/* Section 8: Interactive Parallax Showcase */}
        <ParallaxShowcase />

        {/* Section 9: Final Experience */}
        <FinalSection />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}
