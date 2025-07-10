import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Pokedex500',
      url: 'https://pokedex-on-sol.vercel.app/',
      repo: 'https://github.com/farrelputra16', // Assuming a repo link, please update if different
      img: '/pokedex.png',
      year: 2025, // Assuming year
      tags: ['React.js', 'Groq API', 'Pokemon API', 'Solana', 'Web3'],
    },
    {
      id: getId(),
      name: 'fpcode.ai',
      url: 'https://fpcode-ai.vercel.app/',
      repo: 'https://github.com/farrelputra16', // Assuming a repo link, please update if different
      img: '/fpcodeai.png',
      year: 2025, // Assuming year
      tags: ['React.js', 'Gemini API', 'Groq API', 'Web3.js', 'Solana'],
    },
    {
      id: getId(),
      name: 'Study Crypto Web with AI Chart Analyzer',
      url: 'https://studycrypto.vercel.app/',
      repo: 'https://github.com/farrelputra16', // Assuming a repo link, please update if different
      img: '/scweb.png',
      year: 2025, // Assuming year
      tags: ['React.js', 'Groq API', 'AI', 'Education', 'Cryptocurrency'],
    },
    {
      id: getId(),
      name: 'AI Learn and Analyser Tele Bot',
      url: 'https://web.telegram.org/k/#@study_crypto_assistant_bot',
      repo: 'https://github.com/farrelputra16', // Assuming a repo link, please update if different
      img: '/telebot.png',
      year: 2025, // Assuming year
      tags: ['Python3', 'Telegram API', 'Groq API', 'Gemini API', 'AI'],
    },
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