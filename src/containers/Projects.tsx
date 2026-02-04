'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';
import EnhancedProjectCard from '@/components/ui/EnhancedProjectCard';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract unique tags
  const allTags = [
    'all',
    ...Array.from(new Set(projects.flatMap((p) => p.tags))),
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const topProjects = filteredProjects.slice(0, PROJECTS_INITIALLY);
  const visibleProjects = showMore ? filteredProjects : topProjects;

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-8">
        {title}
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setActiveFilter(tag);
              setShowMore(false);
            }}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 capitalize ${
              activeFilter === tag
                ? 'bg-accent text-white shadow-lg scale-105'
                : 'bg-bg-secondary hover:bg-accent/10 border-2 border-accent/20 hover:border-accent/40'
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Results Count */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8 text-sm text-slate-500 dark:text-slate-400"
      >
        Showing {visibleProjects.length} of {filteredProjects.length} projects
        {activeFilter !== 'all' && ` in "${activeFilter}"`}
      </motion.p>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter + showMore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center"
        >
          {sortByYear(visibleProjects).map((project, i) => {
            if (i < PROJECTS_INITIALLY && !showMore) {
              return (
                <EnhancedProjectCard
                  {...project}
                  key={project.id}
                  variants={projectVariants}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                />
              );
            }

            return (
              <EnhancedProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="show"
                custom={showMore ? i - PROJECTS_INITIALLY : i}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Show More/Less Button */}
      {filteredProjects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;