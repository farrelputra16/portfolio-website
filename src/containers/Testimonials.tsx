'use client';
import { testimonialsSection } from '@/lib/content/testimonials';

import { Icon } from '@iconify/react';
import { AnimatePresence,motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const { title, testimonials } = testimonialsSection;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-transparent to-accent/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-secondary text-center mb-12"
        >
          {title}
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-bg-secondary p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-accent/10"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Icon
                  icon="tabler:quote"
                  className="text-accent text-5xl md:text-6xl opacity-50"
                />
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-slate-700 dark:text-slate-300">
                {testimonials[current].content}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="tabler:star-filled"
                    className="text-yellow-400"
                    width={24}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 grid place-items-center">
                  <Icon
                    icon="tabler:user"
                    width={32}
                    className="text-accent"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-dark-2">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonials[current].role} at{' '}
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <Icon icon="tabler:chevron-left" width={24} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <Icon icon="tabler:chevron-right" width={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-accent' : 'w-2 bg-accent/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;