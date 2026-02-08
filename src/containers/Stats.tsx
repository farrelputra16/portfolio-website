'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Happy Clients', value: 20, suffix: '+' },
    { label: 'Community Members', value: 300, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-accent/5 to-transparent">
      <div className="max-w-screen-lg mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-dark-2"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="text-center p-6 bg-bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent/10 hover:border-accent/30"
            >
              <Counter
                target={stat.value}
                isInView={isInView}
                suffix={stat.suffix}
              />
              <p className="text-sm mt-3 text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({
  target,
  isInView,
  suffix,
}: {
  target: number;
  isInView: boolean;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <h3 className="text-4xl md:text-5xl font-bold text-accent">
      {count}
      {suffix}
    </h3>
  );
};

export default Stats;