import { getId } from '@/lib/utils/helper';

export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
};

export const testimonialsSection = {
  title: 'what people say',
  testimonials: [
    {
      id: getId(),
      name: 'Ahmad Rizki',
      role: 'Project Manager',
      company: 'Tech Startup Indonesia',
      content:
        'Farrel is an exceptional developer who delivered our AI-powered platform ahead of schedule. His expertise in Web3 and AI integration helped us achieve a successful product launch.',
      rating: 5,
    },
    {
      id: getId(),
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Digital Solutions Co',
      content:
        'Working with Farrel on our cryptocurrency tracking system was amazing. His deep understanding of blockchain technology and ability to explain complex concepts made the project smooth.',
      rating: 5,
    },
    {
      id: getId(),
      name: 'Budi Santoso',
      role: 'CTO',
      company: 'Fintech Nusantara',
      content:
        'Farrel\'s contribution to our Flutter mobile app was outstanding. He not only wrote clean code but also helped optimize our backend architecture. Highly recommended!',
      rating: 5,
    },
    {
      id: getId(),
      name: 'Michael Chen',
      role: 'Lead Developer',
      company: 'Crypto Analytics',
      content:
        'His work on our Solana-based project exceeded expectations. The Pokedex500 project reaching $180K market cap speaks volumes about his capabilities in Web3 development.',
      rating: 5,
    },
  ],
};