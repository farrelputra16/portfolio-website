'use client';
import { motion } from 'framer-motion';

import ExperienceTimeline from '@/components/ExperienceTimeline';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-32 mx-auto max-w-screen-xl px-6"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary text-center">
        {experienceSection.title}
      </h2>
      <ExperienceTimeline experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;