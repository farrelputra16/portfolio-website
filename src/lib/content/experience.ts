import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SynKode',
      companyUrl: 'https://www.linkedin.com/company/synkodegroup/',
      role: 'Software Engineer Manager',
      started: 'january 2024',
      upto: 'present',
      tasks: [
        'Implemented UI components with React & Next.js, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'AEON Credit Service Indonesia',
      companyUrl: 'https://www.linkedin.com/company/aeon-credit-service-indonesia/',
      role: 'information technology intern',
      started: 'juny 2023',
      upto: 'may 2024',
      tasks: [
        'Learn about Backend with Oracle Database.'
      ],
    },
    {
      company: 'International MUN',
      companyUrl: 'https://www.linkedin.com/company/international-mun/',
      role: 'campus ambassador',
      started: 'may 2023',
      upto: 'january 2024',
      tasks: [
        'public speaking, public relations'
      ],
    },
  ],
};
