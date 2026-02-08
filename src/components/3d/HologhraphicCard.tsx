'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface HolographicCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export default function HolographicCard({
  title,
  description,
  image,
  tags,
  url,
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full max-w-sm h-[400px] rounded-2xl cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      {/* Holographic background effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, 
              rgba(96, 165, 250, 0.3) 0%, 
              transparent 50%)
            `,
          }}
        />
      </div>

      {/* Glass morphism container */}
      <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden group">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.2) 100%)',
          }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          animate={isHovered ? { x: '100%' } : {}}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col p-6" style={{ transform: 'translateZ(50px)' }}>
          {/* Image */}
          <div className="relative h-40 rounded-xl overflow-hidden mb-4 group-hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          {url && (
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ transform: 'translateZ(20px)' }}
            >
              View Project
            </motion.a>
          )}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/50 rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl" />
      </div>
    </motion.div>
  );
}