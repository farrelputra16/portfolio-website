import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Farrel Arkesya Kahira Putra.',
  tagline: 'Get to Know About me.',
  description:
    "A student at Universitas Negeri Semarang with a strong passion for software engineering, machine learning, and cybersecurity. Skilled in leadership, public speaking, cybersecurity, machine learning, and web development. Highly motivated, disciplined, eager to learn, communicative, a fast learner, and able to work well in a team.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
