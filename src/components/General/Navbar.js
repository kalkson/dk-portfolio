import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;

  & > a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.fair};
    padding: 0px 15px;
    position: relative;
    z-index: 10;
    transition: color ease-in 500ms;

    &:hover {
      color: ${({ theme }) => theme.fair};
    }

    &::after {
      transition: height ease-in-out 500ms;
      content: '';
      position: absolute;
      width: 100%;
      height: 0%;
      left: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.fair};
      z-index: -1;
      border-radius: 10px 10px 0px 0px;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink exact activeClassName='navbar-button-active' to='/'>
        Home
      </NavLink>
      <NavLink activeClassName='navbar-button-active' to='/asd'>
        About
      </NavLink>
      <NavLink activeClassName='navbar-button-active' to='/qwe'>
        Contact
      </NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
