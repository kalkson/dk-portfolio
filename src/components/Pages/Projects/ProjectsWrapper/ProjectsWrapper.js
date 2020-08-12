import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import bg from 'assets/images/bg1.png';
import ProjectTab from 'components/Pages/Home/MyProjects/ProjectTab';
import ProjectModal from 'components/Pages/Home/MyProjects/ProjectModal';
import ProjectListItem from 'components/Pages/Projects/ProjectsWrapper/ProjectListItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'idoxeadnails',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'idoxedasdnails',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'idoxedanails',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'kocham idzie',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'idoxeadnails',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'idoxedasdnails',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'idoxedanails',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
  {
    name: 'kocham idzie',
    img: bg,
    shordDescription: 'Strona do wstawiania paznokci',
    description:
      'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
  },
];

const StyledProjectsWrapper = styled.article`
  display: flex;
  justify-content: space-evenly;
  margin: 0px 240px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.dark};
  padding: 20px;

  @media (max-width: 800px) {
    margin: 0;
    padding: 20px 0px;
  }

  & > button {
    padding: 0;
    margin: 20px 0px;

    & > article {
      margin: 0;
    }
  }

  & > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: flex;
    margin: 0;
    width: 90%;
    flex-wrap: no-wrap;
    flex-direction: column;
    justify-content: initial;
    align-items: center;
  }
`;

const ProjectsWrapper = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [isAnimationActive, setAnimationActive] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const wrapper = useRef(null);

  useEffect(() => {
    function handleResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }

    const elements = Array.from(wrapper.current.children);

    if (window.screen.width > 800 && isAnimationActive === false) {
      elements.forEach((element, i) => {
        gsap.from(element, {
          opacity: 0,
          y: 200,
          duration: 0.8,
          delay: 0.1 * i,
          onStart: () => {
            setAnimationActive(true);
          },
        });
      });
    } else if (isAnimationActive === false && window.screen.width < 800) {
      elements.forEach((element) => {
        gsap.fromTo(
          element.children,
          { y: '+=100', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            onStart: () => {
              setAnimationActive(true);
            },
            onComplete: () => {},
            scrollTrigger: {
              trigger: element,
              start: 'top 60%',
            },
          }
        );
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  if (dimensions.width > 800) {
    return (
      <>
        <StyledProjectsWrapper ref={wrapper}>
          {projects &&
            projects.map((project) => (
              <button
                type='button'
                onClick={() => {
                  setProjectOpen(!isProjectOpen);
                  setCurrentProject(project);
                }}
              >
                <ProjectTab
                  name={project.name}
                  shortDescription={project.shortDescription}
                  description={project.description}
                  img={project.img}
                />
              </button>
            ))}
        </StyledProjectsWrapper>
        <ProjectModal
          isProjectOpen={isProjectOpen}
          closeProject={setProjectOpen}
          project={currentProject}
        />
      </>
    );
  }
  return (
    <>
      <StyledProjectsWrapper ref={wrapper}>
        <ul>
          {projects &&
            projects.map((project) => (
              <button
                type='button'
                onClick={() => {
                  setProjectOpen(!isProjectOpen);
                  setCurrentProject(project);
                }}
              >
                <ProjectListItem
                  name={project.name}
                  shortDescription={project.shortDescription}
                  description={project.description}
                  img={project.img}
                />
              </button>
            ))}
        </ul>
      </StyledProjectsWrapper>
      <ProjectModal
        isProjectOpen={isProjectOpen}
        closeProject={setProjectOpen}
        project={currentProject}
      />
    </>
  );
};

export default ProjectsWrapper;
