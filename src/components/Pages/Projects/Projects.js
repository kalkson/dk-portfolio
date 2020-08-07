import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper';
import Heading from 'components/General/Heading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledProjects = styled.main`
  background-color: ${({ theme }) => theme.fair};
  width: 100%;
  padding: 100px 0px 50px;

  @media (max-width: 800px) {
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
    </StyledProjects>
  );
};

export default Projects;
