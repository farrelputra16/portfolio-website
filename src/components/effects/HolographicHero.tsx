'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HolographicHero({ 
  name = 'FARREL',
  title = 'PUTRA',
  subtitle = 'AI ENGINEER • WEB3 DEV',
  className = '' 
}: { 
  name?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={`flex items-center justify-center min-h-[500px] px-4 ${className}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative perspective-1000"
      >
        {/* Holographic card */}
        <div className="relative px-8 sm:px-16 py-12 sm:py-20 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 shadow-2xl overflow-hidden">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mouseX.get() * 50 + 50}% ${mouseY.get() * 50 + 50}%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)`,
            }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, transparent 50%, rgba(255, 255, 255, 0.1) 55%, transparent 100%)',
              backgroundSize: '200% 200%',
            }}
          />

          {/* Content */}
          <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-9xl font-black mb-4 tracking-tighter text-center"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                {name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wider text-center"
            >
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <span className="text-blue-300 font-mono text-xs sm:text-sm tracking-widest whitespace-nowrap">
                {subtitle}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 border-t-2 border-l-2 border-blue-400/50 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 border-b-2 border-r-2 border-purple-400/50 rounded-br-3xl" />
          
          {/* Animated corner dots */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                top: i < 2 ? '0.5rem' : 'auto',
                bottom: i >= 2 ? '0.5rem' : 'auto',
                left: i % 2 === 0 ? '0.5rem' : 'auto',
                right: i % 2 === 1 ? '0.5rem' : 'auto',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Shadow/glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 scale-105" />
      </motion.div>
    </div>
  );
}