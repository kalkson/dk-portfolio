// import React from 'react';
import styled from 'styled-components';

const FormPage = styled.article`
  background-color: ${({ theme }) => theme.fair};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px 0;
  justify-content: space-around;
  min-height: 100vh;

  & > img {
    height: 100px;
    position: relative;
    transform: scale(2);
  }

  @media (max-width: 800px) {
    padding: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.dark};

    & img {
      display: none;
    }
  }
`;

export default FormPage;
