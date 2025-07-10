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
            .<br /> I'm a Fullstack Developer, Artificial Intelligence and WEB3 Enthusiast.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://www.linkedin.com/company/synkodegroup/"
              target="_blank"
              className="text-accent"
            >
              SynKode (Software Engineering Manager)
            </Link>
            {' and '}
            <Link
              href="https://maxy.academy/"
              target="_blank"
              className="text-accent"
            >
              Maxy Academy (Project Manager)
            </Link>
            .
          </p>
          {/* New line added here */}
          <p>
            I'm also a Co-founder of{' '}
            <Link
              href="https://studycrypto.vercel.app/"
              target="_blank"
              className="text-accent"
            >
              Study Crypto
            </Link>
            , a crypto community with over 300++ members.
          </p>
          <p>
            My main focus these days is Developing Artificial Intelligence and WEB3 Environments.
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