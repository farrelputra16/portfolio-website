'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const EnhancedProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div
      {...rest}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative w-full max-w-[350px]"
    >
      <div className="relative overflow-hidden rounded-xl bg-bg-secondary shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Image Container with Overlay */}
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={img}
            alt={name}
            width={350}
            height={220}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute inset-0 flex items-center justify-center gap-4 z-10"
          >
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-full hover:scale-110 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="tabler:brand-github" width={24} height={24} />
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="tabler:external-link" width={24} height={24} />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between">
            <h4 className="text-lg font-semibold text-dark-2 group-hover:text-accent transition-colors line-clamp-1">
              {name}
            </h4>
            <span className="text-sm font-mono text-accent flex-shrink-0 ml-2">
              {year}
            </span>
          </div>

          {/* Tags with Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-accent/0 group-hover:border-accent/50 transition-colors duration-300 pointer-events-none" />
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default EnhancedProjectCard;