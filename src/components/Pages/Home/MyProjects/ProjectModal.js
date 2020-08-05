import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import bg from 'assets/images/bg1.png';
import squared from 'assets/images/squared-square.svg';
import { ReactComponent as Xclose } from 'assets/images/xclose.svg';
import { ReactComponent as GithubIcon } from 'assets/images/github-icon.svg';
import { ReactComponent as WebIcon } from 'assets/images/web.svg';
import Heading from 'components/General/Heading';

const StyledProjectModalContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  display: ${({ isProjectOpen }) => (isProjectOpen ? 'flex' : 'none')};
  z-index: 12;

  @media (min-width: 800px) {
    backdrop-filter: blur(10px);
  }
`;

const StyledProjectModal = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 40px;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.fair};
  display: flex;
  flex-direction: column;
  z-index: 10;
  left: 0;
  top: 0;
  transform: translateY(100%);

  & > * {
    margin: 20px 0px;
  }

  & > h2 {
    text-align: center;
  }

  & > p {
    text-align: justify;
  }

  & > svg {
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 14px;
    transform: scale(0.7);
    margin: 0;
  }

  & > #web-image {
    position: relative;
    height: 200px;
  }

  & > #squared-image {
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: rotate(20deg);
  }

  & > #squared-image-2 {
    display: none;
  }

  & > span {
    margin-left: auto;

    & a {
      width: 35px;
      margin-left: 10px;

      & path {
        fill: ${({ theme }) => theme.fair};
      }
    }
  }

  animation: appear 600ms ease-in-out forwards;

  @keyframes appear {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (min-width: 800px) {
    max-width: 400px;
    height: auto;

    & > #web-image {
      height: 80%;
    }

    & > #squared-image {
      position: absolute;
      bottom: -60px;
      left: -40px;
      transform: rotate(30deg);
    }

    & > #squared-image-2 {
      position: absolute;
      top: -60px;
      right: -40px;
      transform: rotate(30deg);
      display: inline;
    }
  }

  @media (min-width: 1200px) {
    max-width: 500px;
    height: 600px;

    & > #web-image {
      height: 70%;
    }
  }

  @media (min-width: 1500px) {
    max-width: 800px;
    height: 800px;

    & > #web-image {
      height: 70%;
    }
  }
`;

const ProjectModal = ({ isProjectOpen, closeProject, project }) => {
  const modalRef = useRef(null);

  const listener = (e) => {
    if (!modalRef.current || modalRef.current.contains(e.target)) {
      return;
    }

    closeProject(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });

  //   useEffect(() => {
  //     TweenMax.from(ProjectRef.current, 1, { y: '-100%' });
  //   });

  return (
    <StyledProjectModalContainer isProjectOpen={isProjectOpen}>
      <StyledProjectModal ref={modalRef}>
        <Xclose onClick={() => closeProject(!isProjectOpen)} />
        <img id='web-image' src={bg} alt='bg' />
        <Heading>{project.name}</Heading>
        <p>
          In sunt doloremque et et quis. Aut sint iure eius fugiat dolorum
          incidunt aliquam pariatur aliquam. Est harum est et. In sunt
          doloremque et et quis. Aut sint iure eius fugiat dolorum incidunt
          aliquam pariatur aliquam. Est harum est et. In sunt doloremque et et
          quis. Aut sint iure eius fugiat dolorum incidunt aliquam pariatur
          aliquam. Est harum est et.
        </p>
        <span>
          <a href='#'>
            <WebIcon />
          </a>
          <a href='#'>
            <GithubIcon />
          </a>
        </span>
        <img src={squared} id='squared-image' alt='squaredImage' />
        <img src={squared} id='squared-image-2' alt='squaredImage2' />
      </StyledProjectModal>
    </StyledProjectModalContainer>
  );
};

export default ProjectModal;
