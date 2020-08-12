import React from 'react';
import styled from 'styled-components';
import bg from 'assets/images/bg1.png';
import Heading from 'components/General/Heading';
import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

const StyledProjectTab = styled.article`
  width: 100%;
  min-height: 300px;
  margin: 30px 0px;
  background-color: white;
  transition: all ease-in-out 200ms;
  cursor: pointer;

  & > img {
    width: 100%;
    position: relative;
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

  @media (min-width: 800px) {
    margin: 30px 20px;
    width: auto;

    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.fair};

      & svg {
        transform: scale(1.4);
      }
    }
  }
`;

const ProjectTab = ({ name }) => {
  return (
    <StyledProjectTab>
      <img src={bg} alt='bg' />
      <div>
        <Heading small>{name}</Heading>
        <p>Strona do wstawiania paznokci</p>
        <ArrowDown />
      </div>
    </StyledProjectTab>
  );
};

export default ProjectTab;
