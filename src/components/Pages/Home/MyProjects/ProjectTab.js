import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Heading from 'components/General/Heading';
import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

const StyledProjectTab = styled.article`
  min-height: 300px;
  margin: 30px 0px;
  background-color: white;
  transition: all ease-in-out 200ms;
  cursor: pointer;
  width: 340px;

  & > .web-tab-image {
    width: 100%;
    position: relative;
    background: transparent url(${({ img }) => img}) center / cover no-repeat;
  }

  & > div {
    padding: 20px 10px 10px;
    color: ${({ theme }) => theme.purple};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 178px;

    & > svg {
      transition: transform ease-in 200ms;
    }
  }

  @media (min-width: 1400px) {
    margin: 30px 20px;

    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.fair};

      & svg {
        transform: scale(1.4);
      }
    }
  }

  @media (max-width: 800px) {
    width: auto;
  }
`;

const ProjectTab = ({ title, imageUrl, shortDescription }) => {
  return (
    <StyledProjectTab img={imageUrl}>
      <div className='web-tab-image' />
      <div>
        <Heading small>{title}</Heading>
        <p>{shortDescription}</p>
        <ArrowDown />
      </div>
    </StyledProjectTab>
  );
};

export default ProjectTab;

ProjectTab.propTypes = {
  title: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  shortDescription: propTypes.string,
};

ProjectTab.defaultProps = {
  shortDescription: '',
};
