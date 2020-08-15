import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.fair};

  position: absolute;
  left: 8px;
  top: 8px;
  font-size: 1.2rem;

  transition: transform ease-in 200ms, color ease-in 200ms;
  transform-origin: left;
`;

const StyledWebInput = styled.input`
  padding: 8px;
  font-size: 1.2rem;

  &:focus + label {
    transform: translate(-8px, -32px) scale(0.8);
    color: ${({ theme }) => theme.purple};
  }

  &:valid + label {
    transform: translate(-8px, -32px) scale(0.8);
    color: ${({ theme }) => theme.purple};
  }
`;

const StyledTextarea = styled.textarea`
  padding: 8px;
  font-size: 1.2rem;

  &:focus + label {
    transform: translate(-8px, -32px) scale(0.8);
    color: ${({ theme }) => theme.purple};
  }

  &:valid + label {
    transform: translate(-8px, -32px) scale(0.8);
    color: ${({ theme }) => theme.purple};
  }
`;

const StyledButton = styled.button`
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  max-width: 200px;
`;

const Input = ({ name, type, ...input }) => {
  return type !== 'file' ? (
    <StyledInputContainer>
      <StyledWebInput id={name} name={name} type={type} {...input} />
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
    </StyledInputContainer>
  ) : (
    <StyledWebInput id={name} name={name} type={type} {...input} />
  );
};

const Textarea = ({ name, ...input }) => {
  return (
    <StyledInputContainer>
      <StyledTextarea id={name} name={name} {...input} rows={3} />
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
    </StyledInputContainer>
  );
};

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export { Input, Textarea, Button };

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

Textarea.propTypes = {
  name: propTypes.string.isRequired,
};

Button.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};
