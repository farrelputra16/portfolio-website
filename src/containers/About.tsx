'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Farrel Arkesya Kahira Putra, Undergraduate student at{' '}
            <Link
              href="https://unnes.ac.id/"
              target="_blank"
              className="text-accent"
            >
              Universitas Negeri Semarang
            </Link>
            .<br /> I'm an Artist as well as crazy Software Engineering who
            wants to explore every tech stack.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://www.linkedin.com/company/synkodegroup/"
              target="_blank"
              className="text-accent"
            >
              SynKode
            </Link>
            .
          </p>
          <p>
            My main focus these days is learning Artificial Intelligence and finding
            a decent job.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
