import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import squared from 'assets/images/squared-square.svg';
import { ReactComponent as Xclose } from 'assets/images/xclose.svg';
import { ReactComponent as GithubIcon } from 'assets/images/github-icon.svg';
import { ReactComponent as WebIcon } from 'assets/images/web.svg';
import { ReactComponent as Delete } from 'assets/images/delete.svg';
import Heading from 'components/General/Heading';
import { connect } from 'react-redux';
import { deleteProject } from 'store/actions/projectsActions';

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
  z-index: 15;
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
  transform: translateY(-100%);
  box-shadow: 0px 0px 75px 12px rgba(0, 0, 0, 0.75);

  & > header {
    display: flex;
    justify-content: space-between;

    & > nav {
      & a,
      & button {
        width: 35px;
        margin-left: 10px;
        position: relative;
        height: fit-content;
        padding: 0;

        & svg {
          max-height: 35px;

          & path {
            fill: ${({ theme }) => theme.fair};
          }
        }
      }
    }
  }

  & > * {
    margin: 20px 0px;
  }

  & > p {
    text-align: justify;
    z-index: 2;
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
    width: 100%;
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

  animation: appear 600ms ease-in-out forwards;

  @keyframes appear {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (min-width: 800px) {
    max-width: 400px;
    height: auto;

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
  }

  @media (min-width: 1500px) {
    max-width: 800px;
  }
`;

const ProjectModal = ({
  id,
  isProjectOpen,
  closeProject,
  deleteProject,
  title,
  imageUrl,
  github,
  description,
  webUrl,
  image,
  auth,
}) => {
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

  return (
    <StyledProjectModalContainer isProjectOpen={isProjectOpen}>
      <StyledProjectModal ref={modalRef}>
        <Xclose onClick={() => closeProject(!isProjectOpen)} />
        <img id='web-image' src={imageUrl} alt='bg' />
        <header>
          <Heading>{title}</Heading>
          <nav>
            {auth.uid && (
              <button
                type='button'
                onClick={() => {
                  if (window.confirm('Are you sure?')) {
                    deleteProject({ id, image });
                    closeProject(!isProjectOpen);
                  }
                }}
              >
                <Delete />
              </button>
            )}
            <a href={webUrl} target='blink'>
              <WebIcon />
            </a>
            <a href={github} target='blink'>
              <GithubIcon />
            </a>
          </nav>
        </header>
        <p>{description}</p>
        {/* <img src={squared} id='squared-image' alt='squaredImage' /> */}
        <img src={squared} id='squared-image-2' alt='squaredImage2' />
      </StyledProjectModal>
    </StyledProjectModalContainer>
  );
};

ProjectModal.propTypes = {
  isProjectOpen: propTypes.bool.isRequired,
  closeProject: propTypes.func.isRequired,
  deleteProject: propTypes.func.isRequired,
  auth: propTypes.oneOfType([
    propTypes.objectOf(propTypes.string),
    propTypes.bool,
  ]),
  title: propTypes.string,
  description: propTypes.string,
  imageUrl: propTypes.string,
  github: propTypes.string,
  webUrl: propTypes.string,
  id: propTypes.string,
  image: propTypes.string,
};

ProjectModal.defaultProps = {
  title: '',
  description: '',
  imageUrl: '',
  github: '',
  webUrl: '',
  id: '',
  image: '',
  auth: undefined,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project) => dispatch(deleteProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
