'use client';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  src: string;
  name: string;
  index?: number;
};

const InteractiveSkillIcon = ({ src, name, index = 0 }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative grid text-2xl rounded-2xl shadow-lg bg-bg-secondary h-20 w-20 sm:h-24 sm:w-24 place-items-center group cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon icon={src} width="40" height="40" className="text-accent" />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white capitalize bg-slate-900 dark:bg-slate-700 rounded-lg whitespace-nowrap shadow-xl z-10 pointer-events-none"
        >
          {name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveSkillIcon;