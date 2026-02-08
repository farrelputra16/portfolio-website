'use client';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { FloatingActions, HolographicHero } from '@/components';
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

const Home: NextPage = () => {
  return (
    <>
      <ParticleBackground />
      
      <Layout>
        {/* Holographic Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center py-20">
          <HolographicHero 
            name="FARREL" 
            title="PUTRA"
            subtitle="AI ENGINEER • WEB3 DEV"
          />
        </section>

        <Hero />
        
        <section className="py-24">
          <Terminal3D className="max-w-4xl mx-auto" />
        </section>
        
        <About />
        
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