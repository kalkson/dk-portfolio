import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledTechContainer = styled.article`
  width: 100%;

  & > p {
    padding: 10px 0px;
    text-align: justify;
    color: ${({ theme }) => theme.dark};
    margin: 0;
    line-height: 15px;
  }

  @media (min-width: 800px) {
    width: 150px;
  }

  @media (min-width: 1000px) {
    width: 180px;
  }

  @media (min-width: 1200px) {
    width: 200px;
  }

  @media (min-width: 1500px) {
    width: 250px;
  }
`;

const StyledTechCard = styled.div`
  padding: 40px 40px;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  height: 250px;
  align-items: center;

  & > img {
    position: relative;
    fill: ${({ theme }) => theme.purple};
    width: 100%;
  }

  & > span {
    color: ${({ theme }) => theme.purple};
    white-space: nowrap;
  }

  @media (min-width: 1000px) {
    padding: 40px 50px;
  }

  @media (min-width: 1200px) {
    height: 270px;
  }

  @media (min-width: 1500px) {
    padding: 40px 60px;
  }
`;

const TechCard = ({ name, svg, desc }) => {
  return (
    <StyledTechContainer>
      <StyledTechCard>
        <img src={svg} alt={name} />
        <span>{name}</span>
      </StyledTechCard>
      {desc ? desc && <p>{desc}</p> : null}
    </StyledTechContainer>
  );
};

TechCard.propTypes = {
  name: propTypes.isRequired,
  svg: propTypes.string.isRequired,
  desc: propTypes.string,
};

TechCard.defaultProps = {
  desc: propTypes.string,
};

export default TechCard;
