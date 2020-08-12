import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from 'components/General/Heading';
import Book from 'assets/images/book.svg';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper';

gsap.registerPlugin(ScrollTrigger);

const StyledProjects = styled.main`
  background-color: ${({ theme }) => theme.fair};
  width: 100%;
  padding: 100px 0 0;
  position: relative;

  @media (min-width: 1200px) {
    & > img {
      transform: scale(5);
    }
  }

  @media (min-width: 1000px) {
    & > img {
      position: absolute;
      top: 200px;
      right: 150px;
      transform: scale(3.5);
      filter: grayscale(100%);
    }
  }

  @media (max-width: 800px) {
    & > img {
      display: none;
    }

    background-color: ${({ theme }) => theme.dark};

    & > header > h2 {
      color: ${({ theme }) => theme.fair};
    }
  }

  & > header > h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;

const Projects = () => {
  const heading = useRef(null);
  const active = { active: false };

  useEffect(() => {
    const headin = heading.current.children;

    if (active.active === false)
      gsap.from(headin, {
        opacity: 0,
        y: -100,
        duration: 0.8,
        onStart: () => {
          active.active = true;
        },
        onComplete: () => {
          active.active = false;
        },
      });
  });

  return (
    <StyledProjects>
      <header ref={heading}>
        <Heading>Moje Projekty</Heading>
      </header>
      <ProjectsWrapper />
      <img src={Book} alt='book' />
    </StyledProjects>
  );
};

export default Projects;
