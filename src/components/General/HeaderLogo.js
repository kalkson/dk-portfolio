import React from 'react';
import styled from 'styled-components';

const StyledHeaderLogo = styled.div`
  color: ${({ theme }) => theme.purple};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;

  & > span:nth-child(3) {
    font-size: 0.7rem;
  }

  & > span:first-child {
    & > span {
      color: ${({ theme }) => theme.darkk};
    }
  }

  @media (min-width: 800px) {
    font-size: 5.5rem;

    & > span:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

const HeaderLogo = () => (
  <StyledHeaderLogo>
    <span>
      <span>Damian</span> Kalka
    </span>
    <span>Portfolio</span>
  </StyledHeaderLogo>
);

export default HeaderLogo;
