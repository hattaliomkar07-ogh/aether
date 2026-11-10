import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  style = {},
  hoverScale = 1.03,
  className = '',
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        y: -8,
        boxShadow: '0 20px 60px rgba(53, 104, 255, 0.15)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={className}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 8px 32px rgba(53, 104, 255, 0.08)',
        padding: '2rem',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.3s ease',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
