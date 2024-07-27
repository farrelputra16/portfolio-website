import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Task Manager',
      url: 'https://drive.google.com/drive/folders/1ZR3JUpbR5BkweQh6f9EZXKlOV4iSWEKN',
      repo: 'https://github.com/farrelputra16',
      img: '/task.png',
      year: 2023,
      tags: ['Flutter', 'Firebase'],
    },
    {
      id: getId(),
      name: 'Learning Management System',
      url: 'https://lms-alfirdaus.000webhostapp.com',
      repo: 'https://github.com/farrelputra16/lms-project',
      img: '/lms.png',
      year: 2024,
      tags: ['Laravel', 'MYSQL'],
    },
    {
      id: getId(),
      name: 'Paper Scoring ',
      url: 'https://admin-lktim-2024.vercel.app',
      repo: 'https://github.com/synkodegroup/admin-lktim-2024',
      img: '/lktim.png',
      year: 2024,
      tags: ['Nextjs', 'MongoDB', 'API', 'Saas'],
    },
    {
      id: getId(),
      name: 'OmniFace',
      url: 'https://drive.google.com/drive/folders/1ajy-rNFdaHozSri94bPO_cJDhdUcEUUp?usp=drive_link',
      repo: 'https://github.com/farrelputra16',
      img: '/omniface.png',
      year: 2024,
      tags: ['Fluterr','Firebase','Mysql','Artificial Intelligence','Google Maps API', 'Sass'],
    },
    {
      id: getId(),
      name: 'OmniFace Dashboard',
      url: 'http://134.209.111.109',
      repo: 'https://github.com/farrelputra16',
      img: '/omniface-dashboard.png',
      year: 2024,
      tags: ['Laravel', 'Mysql'],
    },
  ],
};
