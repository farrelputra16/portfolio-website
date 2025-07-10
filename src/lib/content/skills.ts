import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Software Engineering',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, React',
        'Building mobile applications using Flutter and Laravel for backend',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Express for backend development',
        'Developing AI-Chatbot with various integrations',
        'Developing WEB3 Environtments',
        'Developing AI Application with Various Add on'
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'flutter', icon: 'vscode-icons:file-type-flutter'},
        { name: 'laravel', icon: 'logos:laravel'},
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3', icon: 'logos:web3js' }, // Added Web3 logo
      ],
    },
  ],
};