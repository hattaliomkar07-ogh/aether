import { motion } from 'framer-motion';

export default function FloatingShape({
  shape = 'circle',
  size = 80,
  color = '#3568FF',
  opacity = 0.15,
  top,
  left,
  right,
  bottom,
  delay = 0,
  duration = 6,
  blur = 0,
  gradient,
}) {
  const shapeStyles = {
    circle: { borderRadius: '50%' },
    square: { borderRadius: '16px' },
    diamond: { borderRadius: '16px', transform: 'rotate(45deg)' },
    ring: {
      borderRadius: '50%',
      background: 'transparent',
      border: `3px solid ${color}`,
    },
  };

  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: shape === 'diamond' ? [45, 55, 45] : [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: gradient || color,
        opacity,
        top,
        left,
        right,
        bottom,
        filter: blur ? `blur(${blur}px)` : undefined,
        pointerEvents: 'none',
        zIndex: 1,
        ...shapeStyles[shape],
      }}
    />
  );
}
