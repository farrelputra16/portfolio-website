'use client';
import { motion } from 'framer-motion';

import { Button, Wrapper } from '@/components';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import { slideUp } from '@/styles/animations';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="relative flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0 overflow-hidden"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Subtitle with animated line */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3"
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: getAnimationDelay(0) + 0.5, duration: 0.8 }}
          className="h-[2px] bg-accent"
        />
        <p className="font-mono text-sm md:text-base text-accent">
          {subtitle}
        </p>
      </motion.div>

      {/* Main Title with Gradient */}
      <div className="max-w-5xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-tight"
        >
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        <motion.h2
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-600 dark:text-slate-400 leading-tight"
        >
          {tagline}
        </motion.h2>
      </div>

      {/* Description */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl"
      >
        <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </motion.div>

      {/* Status Badge with Pulse */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
        </span>
        <p className="font-mono text-xs md:text-sm text-accent">
          {specialText}
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(5) })}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-4 mt-5"
      >
        <Button
          size="lg"
          type="link"
          href="#contact"
          sameTab
          className="group relative overflow-hidden"
        >
          <span className="relative z-10">Get In Touch</span>
          <span className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Button>

        <Button
          size="lg"
          type="link"
          href="#projects"
          sameTab
          className="border-2 border-accent/30 hover:border-accent bg-transparent hover:bg-accent/5"
        >
          View My Work
        </Button>

        {cta && cta.hideInDesktop && (
          <Button
            size="lg"
            type="link"
            href={cta.url}
            sameTab={cta.sameTab}
            className="md:hidden"
          >
            {cta.title}
          </Button>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(6) })}
        initial="hidden"
        animate="show"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-slate-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[2px] h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </Wrapper>
  );
};

export default Hero;