'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';
import { getId } from '@/lib/utils/helper';

import { ListItem, ShowLottie, Wrapper } from '@/components';
import InteractiveSkillIcon from '@/components/skills/InteractiveSkillIcon';

import { getSectionAnimation } from '@/styles/animations';

import { motion } from 'framer-motion';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-32">
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <motion.div
            key={id}
            className="flex gap-8 sm:gap-10 flex-col lg:flex-row items-center odd:lg:flex-row-reverse"
            {...getSectionAnimation}
          >
            {/* Left */}
            <div className="space-y-14 lg:w-1/2">
              <h3 className="mb-5 text-2xl text-center capitalize sm:text-3xl text-dark-2">
                {title}
              </h3>

              <div
                key={getId()}
                className="flex flex-wrap justify-center gap-3"
              >
                {softwareSkills.map(({ name, icon }, index) => (
                  <InteractiveSkillIcon
                    key={getId()}
                    src={icon}
                    name={name}
                    index={index}
                  />
                ))}
              </div>

              <ul className="space-y-2 text-base">
                {points.map((point) => (
                  <ListItem key={getId()}>{point}</ListItem>
                ))}
              </ul>
            </div>
            {/* Right */}
            <ShowLottie
              path={lottie[isDarkMode ? 'dark' : 'light']}
              className="md:min-h-[448px] md:min-w-[448px]"
            />
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;