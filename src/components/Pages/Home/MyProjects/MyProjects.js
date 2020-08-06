import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from 'components/General/Heading';
import bg from 'assets/images/bg1.png';
import ProjectTab from './ProjectTab';
import ProjectModal from './ProjectModal';

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
];

const StyledMyProjects = styled.section`
  padding: 35px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.dark};
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.fair};

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
`;

const MyProjects = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: dimensions.width > 800 ? 3 : 1,
    slidesToScroll: dimensions.width > 800 ? 3 : 1,
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
        <Heading color='#EBEBEB'>Moje projekty</Heading>
        <Slider {...settings}>
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
        </Slider>
        <span>- swipe -</span>
      </StyledMyProjects>
      <ProjectModal
        isProjectOpen={isProjectOpen}
        closeProject={setProjectOpen}
        project={currentProject}
      />
    </>
  );
};

export default MyProjects;
