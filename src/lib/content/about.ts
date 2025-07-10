import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NextJs',
      'Groq API',
      'Gemini API',
      'Solidity',
      'WEB3 Wallets',
      'TailwindCSS',
      'Laravel',
      'AI/ML',
      'Flutter',
      'CSS Animations',
      'Crypto'
    ],
  },
  img: '/farrel-putra.png',
};
