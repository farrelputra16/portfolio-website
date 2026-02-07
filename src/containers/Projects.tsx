'use client';
import dynamic from 'next/dynamic';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

const HolographicCard = dynamic(
  () => import('@/components/3d/HologhraphicCard'),
  { ssr: false }
);

import { getSectionAnimation } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const allTags = [
    'all',
    ...Array.from(new Set(projects.flatMap((p) => p.tags))),
  ];

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

      {/* Projects Grid with Holographic Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {sortByYear(visibleProjects).map((project) => (
          <HolographicCard
            key={project.id}
            title={project.name}
            description={`Project from ${project.year}`}
            image={project.img}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </div>

      {/* Show More Button */}
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