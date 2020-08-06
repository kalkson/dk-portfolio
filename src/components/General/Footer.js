import React from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.svg';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #080808;
  padding: 80px 0px 30px;
  justify-content: space-between;
  min-height: 200px;
  color: ${({ theme }) => theme.darkk};

  & img {
    position: relative;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt='logo' />
      <span>Copyright 2020 Damian Kalka</span>
    </StyledFooter>
  );
};

export default Footer;
