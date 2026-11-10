import AnimatedText from './AnimatedText';

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <AnimatedText
        as="h2"
        style={{
          fontSize: 'clamp(2.25rem, 5vw, 4rem)',
          fontWeight: 700,
          background: light
            ? 'linear-gradient(135deg, #ffffff, #e0e0ff)'
            : 'linear-gradient(135deg, #1A1A2E, #3568FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.25rem',
          lineHeight: 1.15,
        }}
      >
        {title}
      </AnimatedText>
      {subtitle && (
        <AnimatedText
          as="p"
          delay={0.15}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: light ? 'rgba(255,255,255,0.8)' : '#4A4A6A',
            maxWidth: '640px',
            margin: align === 'center' ? '0 auto' : '0',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </AnimatedText>
      )}
    </div>
  );
}
