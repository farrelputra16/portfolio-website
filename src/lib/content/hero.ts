import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Farrel Arkesya Kahira Putra.',
  tagline: 'Get to Know About me.',
  description:
    "A student at Universitas Negeri Semarang with a strong passion for software engineering, machine learning, and cybersecurity. Currently, I'm gaining valuable experience as a Software Engineering Manager at SynKode and a Project Manager at Maxy Academy. I'm also the Co-founder of Study Crypto, a crypto community boasting over 300 members. My expertise lies in AI, AI bots, and Web3, and I've successfully launched a project on Solana that achieved a $180K market cap. I am highly motivated, disciplined, eager to learn, communicative, a fast learner, and able to work well in a team.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
