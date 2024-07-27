import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
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
