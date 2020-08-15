import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ProjectTab from 'components/Pages/Home/MyProjects/ProjectTab';
import ProjectModal from 'components/Pages/Home/MyProjects/ProjectModal';
import ProjectListItem from 'components/Pages/Projects/ProjectsWrapper/ProjectListItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from 'context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const StyledProjectsWrapper = styled.article`
  display: flex;
  justify-content: space-evenly;
  margin: 0px 240px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.dark};
  padding: 20px;
  z-index: 2;
  position: relative;

  @media (max-width: 1000px) {
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

  @media (max-width: 1000px) {
    & button {
      width: 100%;
    }
  }
`;

const ProjectsWrapper = ({ projects }) => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState([]);
  const [{ language }] = useLanguage();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const wrapper = useRef(null);

  useEffect(() => {
    function handleResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (dimensions.width > 1000) {
    return (
      <>
        <StyledProjectsWrapper ref={wrapper}>
          {projects &&
            projects.map((project) => (
              <button
                key={`${project.title}-button`}
                type='button'
                onClick={() => {
                  setCurrentProject([]);
                  setCurrentProject(project);
                  setProjectOpen(!isProjectOpen);
                }}
              >
                <ProjectTab
                  key={project.title}
                  title={project.title}
                  shortDescription={
                    language === 'polish'
                      ? project.polishShortDescription
                      : project.englishShortDescription
                  }
                  imageUrl={project.imageUrl}
                />
              </button>
            ))}
        </StyledProjectsWrapper>
        <ProjectModal
          isProjectOpen={isProjectOpen}
          closeProject={setProjectOpen}
          title={currentProject.title}
          imageUrl={currentProject.imageUrl}
          github={currentProject.github}
          webUrl={currentProject.webUrl}
          description={
            language === 'polish'
              ? currentProject.polishDescription
              : currentProject.englishDescription
          }
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
                key={`${project.title}-button`}
                type='button'
                onClick={() => {
                  setCurrentProject([]);
                  setCurrentProject(project);
                  setProjectOpen(!isProjectOpen);
                }}
              >
                <ProjectListItem
                  key={project.title}
                  title={project.title}
                  shortDescription={
                    language === 'polish'
                      ? project.polishShortDescription
                      : project.englishShortDescription
                  }
                  imageUrl={project.imageUrl}
                />
              </button>
            ))}
        </ul>
      </StyledProjectsWrapper>
      <ProjectModal
        isProjectOpen={isProjectOpen}
        closeProject={setProjectOpen}
        title={currentProject.title}
        imageUrl={currentProject.imageUrl}
        github={currentProject.github}
        webUrl={currentProject.webUrl}
        description={
          language === 'polish'
            ? currentProject.polishDescription
            : currentProject.englishDescription
        }
      />
    </>
  );
};

export default ProjectsWrapper;

ProjectsWrapper.propTypes = {
  projects: propTypes.arrayOf(propTypes.object).isRequired,
};
