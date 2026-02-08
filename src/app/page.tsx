'use client';
import { FloatingActions } from '@/components';
import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
  Stats,
  Testimonials,
} from '@/containers';

import dynamic from 'next/dynamic';

// Dynamic import 3D components (client-side only)
const ParticleBackground = dynamic(
  () => import('@/components/3d/ParticleBackground'),
  { ssr: false }
);

const SkillsSphere = dynamic(
  () => import('@/components/3d/SkillsSphere'),
  { ssr: false }
);

const Terminal3D = dynamic(
  () => import('@/components/3d/Terminal3D'),
  { ssr: false }
);

const AnimatedLogo = dynamic(
  () => import('@/components/3d/AnimatedLogo'),
  { ssr: false }
);

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      {/* Particle Background */}
      <ParticleBackground />
      
      <Layout>
        {/* Animated Logo Section */}
        <section className="min-h-[40vh] flex items-center justify-center">
          <AnimatedLogo text="FARREL" />
        </section>

        <Hero />
        
        {/* Terminal Section */}
        <section className="py-24">
          <Terminal3D className="max-w-4xl mx-auto" />
        </section>
        
        <About />
        
        {/* 3D Skills Sphere */}
        <section className="py-24">
          <h2 className="heading-secondary text-center mb-12">
            Interactive Skills
          </h2>
          <SkillsSphere />
        </section>
        
        <Skills />
        <Experience />
        <Stats />
        <FeaturedProjects />
        <Projects />
        <Testimonials />
        <Contact />
      </Layout>
      <FloatingActions />
    </>
  );
};

export default Home;