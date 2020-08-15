import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.dark};
  padding: 100px;

  & input,
  textarea,
  button {
    background-color: #484848;
    color: ${({ theme }) => theme.fair};
    outline: none;
    border: none;
    border-radius: 8px;
    border: solid 2px ${({ theme }) => theme.purple};
  }

  & > * {
    margin: 15px 0;
    width: 310px;

    & input,
    textarea {
      width: 100%;
    }

    &:first-child {
      margin: 0 0 10px;
    }

    &:last-child {
      margin: 0;
      margin-top: auto;
    }
  }

  @media (max-width: 800px) {
    padding: 50px 0 100px;
    /* padding: 0; */
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const WebForm = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default WebForm;

WebForm.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  onSubmit: propTypes.func.isRequired,
};
