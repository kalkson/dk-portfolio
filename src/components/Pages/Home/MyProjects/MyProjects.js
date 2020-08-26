import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import propTypes from 'prop-types';
import Slider from 'react-slick';
import UrlLink from 'components/General/UrlLink';
import { useLanguage } from 'context/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from 'components/General/Heading';
import ProjectTab from './ProjectTab';
import ProjectModal from './ProjectModal';

const StyledMyProjects = styled.section`
  padding: 35px 0px;
  text-align: center;
  background-color: ${({ theme }) => theme.dark};
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.fair};

  & button {
    padding: 0;
  }

  & > div {
    margin-top: 30px;
  }

  & > span {
    opacity: 0.5;
    font-size: 1.3rem;
    animation: blink 3000ms ease-in-out infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.5;
    }
  }

  & > #swipe-project-left {
    left: 20px;
    top: 45%;
    display: none;
  }

  & > #swipe-project-right {
    right: 20px;
    top: 45%;
    display: none;
  }

  & > svg {
    position: absolute;
    transition: transform ease-in 200ms;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    @media (min-width: 800px) {
      & > .rec {
        width: 20%;
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 120px 120px;
  }

  @media (min-width: 800px) {
    & > span {
      display: none;
    }
  }

  @media (min-width: 1500px) {
    padding: 150px 190px;
  }

  & .slick-track {
    height: fit-content;
    & > div {
      display: flex;
      justify-content: center;
    }
  }
`;

const MyProjects = ({ projects }) => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [{ language }] = useLanguage();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: dimensions.width > 800 ? 3 : 1,
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <>
      <StyledMyProjects>
        <Heading color='#EBEBEB'>
          {language === 'polish' ? 'Moje projekty' : 'My projects'}
        </Heading>
        <Slider {...settings}>
          {projects &&
            projects.map((project) => (
              <button
                key={`${project.name}-button`}
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
        </Slider>
        <span>- swipe -</span>
        <div>
          <UrlLink to='/projects'>
            {language === 'polish'
              ? 'Zobacz wszystkie projeckty'
              : 'See all projects'}
          </UrlLink>
        </div>
      </StyledMyProjects>
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
        id={currentProject.id}
        image={currentProject.image}
      />
    </>
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
)(MyProjects);

MyProjects.propTypes = {
  projects: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.arrayOf(propTypes.array)),
    propTypes.objectOf(propTypes.arrayOf(propTypes.array)),
  ]),
};

MyProjects.defaultProps = {
  projects: [],
};
