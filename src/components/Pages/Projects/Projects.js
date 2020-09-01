import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from 'components/General/Heading';
import Book from 'assets/images/book.svg';
import ProjectsWrapper from './ProjectsWrapper/ProjectsWrapper';

gsap.registerPlugin(ScrollTrigger);

const StyledProjects = styled.main`
  background-color: ${({ theme }) => theme.fair};
  width: 100%;
  padding: 100px 0 200px;
  position: relative;

  & > #loading-animation {
    animation: pulse 1000ms linear forwards infinite;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.dark};
    border-radius: 15px;
    margin: 0 auto;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(1);
    }
  }

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
    background-color: ${({ theme }) => theme.dark};

    & > #loading-animation {
      background-color: ${({ theme }) => theme.fair};
    }

    & > header > h2 {
      color: ${({ theme }) => theme.fair};
    }
  }

  @media (max-width: 1000px) {
    & > img {
      display: none;
    }
  }

  & > header > h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;

const Projects = ({ projects }) => {
  const heading = useRef(null);

  useEffect(() => {
    const headin = heading.current.children;

    gsap.from(headin, {
      opacity: 0,
      y: -100,
      duration: 0.8,
    });
  }, []);

  return (
    <StyledProjects>
      <header ref={heading}>
        <Heading>Moje Projekty</Heading>
      </header>
      {projects.length === 0 ? (
        <div id='loading-animation'></div>
      ) : (
        <ProjectsWrapper projects={projects} />
      )}
      <img src={Book} alt='book' />
    </StyledProjects>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(Projects);

Projects.propTypes = {
  projects: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.array),
    propTypes.objectOf(propTypes.array),
  ]),
};

Projects.defaultProps = {
  projects: [],
};
