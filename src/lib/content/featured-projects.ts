import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [

    {
      id: getId(),
      name: 'Pokedex500',
      description: 'A Pokedex application built on Solana, which successfully achieved a market cap of $180K. This project demonstrates expertise in Web3 development and decentralized applications.',
      tasks:
        'Served as the Main Developer, responsible for the entire development lifecycle and instrumental in achieving a $180K market cap for the project.',
      url: 'https://pokedex-on-sol.vercel.app/',
      img: '/pokedex.png', // Assuming you'll add a 'pokedex.png' image in your public folder
      tags: ['React.js', 'Groq API', 'Pokemon API', 'Solana', 'Web3'],
    },
    {
      id: getId(),
      name: 'fpcode.ai',
      description: 'An advanced AI project featuring login with Solana Web3 wallets (Phantom and Solflare). It includes functionalities like image generation, image analysis, web reasoning, web search, chat completion, and real-time live voice AI interaction.',
      tasks:
        'Developed comprehensive AI functionalities, integrated Web3 wallet authentication, and ensured seamless real-time AI interactions for a cutting-edge user experience.',
      url: 'https://fpcode-ai.vercel.app/',
      img: '/fpcodeai.png', // Assuming you'll add an 'fpcodeai.png' image in your public folder
      tags: ['React.js', 'Gemini API', 'Groq API', 'Web3.js', 'Solana'],
    },
    {
      id: getId(),
      name: 'AI Learn and Analyser Tele Bot',
      description: 'A Telegram bot designed for learning and cryptocurrency analysis. It provides educational content, performs chart analysis, and generates swing and scalp trading signals. The bot can also be integrated into Telegram groups.',
      tasks:
        'Developed the core AI functionalities for learning, chart analysis, and signal generation, ensuring seamless integration with the Telegram API for group and individual interactions.',
      url: 'https://web.telegram.org/k/#@study_crypto_assistant_bot',
      img: '/telebot.png', 
      tags: ['Python3', 'Telegram API', 'Groq API', 'Gemini API', 'AI'],
    },
    {
      id: getId(),
      name: 'Study Crypto Web with AI Chart Analyzer',
      description: 'A company profile website for Study Crypto, featuring an integrated AI bot for learning and chart analysis. This platform provides educational resources and tools for cryptocurrency enthusiasts.',
      tasks:
        'Developed the front-end interface and integrated the AI bot for interactive learning and chart analysis, enhancing user engagement and educational value.',
      url: 'https://studycrypto.vercel.app/',
      img: '/scweb.png', // Assuming you'll add a 'scweb.png' image in your public folder
      tags: ['React.js', 'Groq API', 'AI', 'Education', 'Cryptocurrency'],
    },
    {
      id: getId(),
      name: 'Task Manager',
      description: 'The "Task Manager" application is an integrated solution specifically developed for students to address the complex needs of planning, tracking, and completing tasks and projects in higher education environments. It focuses on a user-friendly interface and extensive functionality to meet various student requirements.',
      tasks:
        "Led and monitored team progress, participated in planning, development, and finishing stages. This leadership contributed to timely project completion, cohesive teamwork, and a robust final product.",
      url: 'https://drive.google.com/drive/folders/1ZR3JUpbR5BkweQh6f9EZXKlOV4iSWEKN',
      img: '/task.png',
      tags: [
        'Flutter',
        'Firebase',
      ],
    },
    {
      id: getId(),
      name: 'Learning Management System',
      description:
        'The Learning Management System (LMS) developed for Yayasan Al Firdaus is a comprehensive platform designed to enhance the educational experience by integrating group chat features and student grade reporting. It aims to streamline communication and evaluation processes within the educational institution.',
      tasks:
        'Oversaw and directed team progress, involved in the planning, development, and finalization phases. This leadership ensured the project was completed on schedule, with cohesive teamwork and a high-quality end product.',
      url: 'https://lms-alfirdaus.000webhostapp.com',
      img: '/lms.png',
      tags: ['Laravel', 'Bootstrap', 'PHP', 'MYSQL'],
    },
    {
      id: getId(),
      name: 'Paper Scoring',
      description: 'Paper Scoring Website for LKTIM 2024',
      tasks:
        'Monitored team progress, managed application development, and actively participated in coding, especially focusing on frontend development. This role contributed to smooth project execution, timely completion, and a user-friendly final product.',
      url: 'https://admin-lktim-2024.vercel.app',
      img: '/lktim.png',
      tags: ['Nextjs', 'Mongodb', 'TypeScript', 'TailwindCSS', 'API'],
    },
    {
      id: getId(),
      name: 'OmniFace',
      description: 'OmniFace is a cutting-edge attendance application utilizing face recognition technology combined with maps validation to reduce fraud. It features a real-time dashboard for direct monitoring of employee attendance.',
      tasks:
        'Led and monitored team progress, participating in planning, development, and finalization stages. This role ensured the project was executed efficiently, resulting in a reliable and effective final product.',
      url: 'https://drive.google.com/drive/folders/1ajy-rNFdaHozSri94bPO_cJDhdUcEUUp?usp=drive_link',
      img: '/omniface.png',
      tags: ['Open AI', 'Laravel', 'TensorFlow', 'Flutter', 'Mysql', 'Google Maps API'],
    },
  ],
};

export default featuredProjectsSection;