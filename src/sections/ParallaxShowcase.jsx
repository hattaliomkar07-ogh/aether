import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Layers, Move3d, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=2000',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Background layer: 0.15x movement speed
      tl.to('.showcase-bg-circle', { y: -120, scale: 1.3, opacity: 0.25, duration: 1 }, 0);
      tl.to('.showcase-bg-ring', { y: -90, rotation: 120, duration: 1 }, 0);

      // Middle layer: 0.40x movement speed
      tl.to('.showcase-mid-box-1', { y: -260, rotation: 35, scale: 0.95, duration: 1 }, 0);
      tl.to('.showcase-mid-box-2', { y: -220, rotation: -25, scale: 1.15, duration: 1 }, 0);
      tl.to('.showcase-mid-sphere', { y: -280, x: 70, duration: 1 }, 0);

      // Foreground layer: 0.75x movement speed
      tl.to('.showcase-fg-dot-1', { y: -450, x: 100, opacity: 0.1, duration: 1 }, 0);
      tl.to('.showcase-fg-dot-2', { y: -420, x: -90, opacity: 0.85, duration: 1 }, 0);
      tl.to('.showcase-fg-diamond', { y: -520, rotation: 240, scale: 1.6, duration: 1 }, 0);

      // Floating objects: Independent rotation and translation
      tl.to('.showcase-float-1', { y: -340, rotation: 360, duration: 1 }, 0);
      tl.to('.showcase-float-2', { y: -260, rotation: -270, scale: 0.6, duration: 1 }, 0);
      tl.to('.showcase-float-3', { y: -380, x: -140, opacity: 0.35, duration: 1 }, 0);

      // Background color shift across scrub
      tl.to('.showcase-bg-gradient', {
        background: 'linear-gradient(180deg, #EAF5FF 0%, #F1EDFF 40%, #FFF0E7 80%, #F8FAFC 100%)',
        duration: 1,
      }, 0);

      // Staggered text timeline: enters, holds, and fades out cleanly
      tl.fromTo('.showcase-badge', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25 }, 0.05);
      tl.fromTo('.showcase-title', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.12);
      tl.fromTo('.showcase-desc', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.2);
      tl.fromTo('.showcase-speed-indicators', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.28);

      tl.to('.showcase-text-container', { y: -70, opacity: 0.15, duration: 0.3 }, 0.75);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="parallax-showcase"
      ref={sectionRef}
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient Canvas */}
      <div
        className="showcase-bg-gradient"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #F1EDFF 0%, #EAF5FF 50%, #FFF0E7 100%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* ─── LAYER 1: BACKGROUND (0.15x speed) ─── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="showcase-bg-circle"
          style={{
            position: 'absolute',
            top: '18%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(134,100,255,0.14) 0%, rgba(53,104,255,0.04) 50%, transparent 70%)',
          }}
        />
        <div
          className="showcase-bg-ring"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '8%',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            border: '3.5px dashed rgba(53,104,255,0.1)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '55%',
          right: '6%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,180,91,0.12) 0%, transparent 65%)',
        }} />
      </div>

      {/* ─── LAYER 2: MIDDLE (0.40x speed) ─── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="showcase-mid-box-1"
          style={{
            position: 'absolute',
            top: '22%',
            left: '12%',
            width: '140px',
            height: '140px',
            borderRadius: '26px',
            background: 'linear-gradient(135deg, rgba(53,104,255,0.12), rgba(69,200,232,0.06))',
            border: '1.5px solid rgba(53,104,255,0.18)',
            backdropFilter: 'blur(10px)',
          }}
        />
        <div
          className="showcase-mid-box-2"
          style={{
            position: 'absolute',
            top: '38%',
            right: '15%',
            width: '120px',
            height: '120px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, rgba(134,100,255,0.12), rgba(53,104,255,0.06))',
            border: '1.5px solid rgba(134,100,255,0.18)',
            transform: 'rotate(-12deg)',
            backdropFilter: 'blur(10px)',
          }}
        />
        <div
          className="showcase-mid-sphere"
          style={{
            position: 'absolute',
            top: '58%',
            left: '38%',
            width: '95px',
            height: '95px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(69,200,232,0.18), rgba(53,104,255,0.1))',
            border: '1.5px solid rgba(69,200,232,0.22)',
            boxShadow: '0 8px 25px rgba(69,200,232,0.12)',
          }}
        />
      </div>

      {/* ─── LAYER 3: FOREGROUND (0.75x speed) ─── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="showcase-fg-dot-1"
          style={{
            position: 'absolute',
            top: '28%',
            left: '26%',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: '#3568FF',
            opacity: 0.35,
            boxShadow: '0 4px 15px rgba(53,104,255,0.3)',
          }}
        />
        <div
          className="showcase-fg-dot-2"
          style={{
            position: 'absolute',
            top: '52%',
            right: '28%',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#FF806F',
            opacity: 0.4,
            boxShadow: '0 4px 12px rgba(255,128,111,0.3)',
          }}
        />
        <div
          className="showcase-fg-diamond"
          style={{
            position: 'absolute',
            bottom: '26%',
            left: '62%',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: '#8664FF',
            opacity: 0.35,
            transform: 'rotate(45deg)',
            boxShadow: '0 4px 15px rgba(134,100,255,0.3)',
          }}
        />
      </div>

      {/* ─── LAYER 4: INDEPENDENT FLOATING ARTIFACTS ─── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="showcase-float-1"
          style={{
            position: 'absolute',
            top: '32%',
            right: '8%',
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #FFB45B, #FF806F)',
            opacity: 0.22,
          }}
        />
        <div
          className="showcase-float-2"
          style={{
            position: 'absolute',
            top: '64%',
            left: '18%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3568FF, #45C8E8)',
            opacity: 0.2,
          }}
        />
        <div
          className="showcase-float-3"
          style={{
            position: 'absolute',
            top: '18%',
            left: '62%',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8664FF, #B794F6)',
            opacity: 0.24,
            transform: 'rotate(22deg)',
          }}
        />
      </div>

      {/* ─── CONTENT / TEXT LAYER ─── */}
      <div
        className="showcase-text-container"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div
          className="showcase-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 1rem',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(134,100,255,0.25)',
            boxShadow: '0 4px 15px rgba(134,100,255,0.1)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8664FF',
            marginBottom: '1.25rem',
          }}
        >
          <Sparkles size={14} color="#8664FF" />
          INTERACTIVE PARALLAX SHOWCASE
        </div>

        <h2
          className="showcase-title"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            fontFamily: 'Space Grotesk, sans-serif',
            background: 'linear-gradient(135deg, #1A1A2E 0%, #3568FF 50%, #8664FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          LAYERS IN MOTION
        </h2>

        <p
          className="showcase-desc"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: '#4A4A6A',
            maxWidth: '620px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Experience genuine multi-tiered depth. As you scrub this scene, background, intermediate, and foreground strata traverse at precisely engineered velocity ratios.
        </p>

        {/* Realtime Speed Legend Indicators */}
        <div
          className="showcase-speed-indicators"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'Background Layer', speed: '0.15× speed', icon: Layers, color: '#8664FF' },
            { label: 'Middle Strata', speed: '0.40× speed', icon: Move3d, color: '#3568FF' },
            { label: 'Foreground Elements', speed: '0.75× speed', icon: Compass, color: '#FF806F' },
          ].map(({ label, speed, icon: Icon, color }, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 1.1rem',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 4px 15px rgba(53,104,255,0.06)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: `${color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: color,
                }}
              >
                <Icon size={16} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#1A1A2E' }}>{label}</div>
                <div style={{ fontSize: '0.68rem', color: color, fontWeight: 700 }}>{speed}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

