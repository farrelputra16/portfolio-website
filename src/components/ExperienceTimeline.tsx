'use client';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import { ExperienceType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';

type Props = {
  experiences: ExperienceType[];
};

const ExperienceTimeline = ({ experiences }: Props) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20" />

      {experiences.map((exp, i) => (
        <motion.div
          key={getId()}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className={`relative flex items-center mb-16 ${
            i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Timeline Dot */}
          <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-accent rounded-full border-4 border-bg z-10 shadow-lg">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-accent rounded-full"
            />
          </div>

          {/* Content Card */}
          <div
            className={`w-full md:w-5/12 ${
              i % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pl-16'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent/10 hover:border-accent/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-dark-2 mb-1">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    {exp.company}
                    <Icon icon="tabler:external-link" width={16} />
                  </a>
                </div>
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Icon
                    icon="tabler:briefcase"
                    width={24}
                    className="text-accent"
                  />
                </div>
              </div>

              <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                <Icon icon="tabler:calendar" width={16} />
                {String(exp.started)} - {String(exp.upto)}
              </p>

              <ul className="space-y-2">
                {exp.tasks.map((task) => (
                  <li key={getId()} className="text-sm flex items-start gap-2">
                    <Icon
                      icon="tabler:check"
                      className="text-accent mt-1 flex-shrink-0"
                      width={16}
                    />
                    <span className="text-slate-600 dark:text-slate-300">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;