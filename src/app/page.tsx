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
import { FloatingActions } from '@/components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
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