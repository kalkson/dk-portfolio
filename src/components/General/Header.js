import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderLogo from 'components/General/HeaderLogo';
import dotted from 'assets/images/dotted-square.svg';
import logo from 'assets/images/logo.svg';
import circles from 'assets/images/circles.svg';
import hash from 'assets/images/hash.svg';
import oval from 'assets/images/oval.svg';
import phonemenu from 'assets/images/phone-menu.svg';
import PhoneMenu from 'components/PhoneMenu/PhoneMenu';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

const StyledHeader = styled.header`
  width: 100%;
  height: 270px;
  background-color: ${({ theme }) => theme.dark};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > #phone-menu-button {
    position: absolute;
    top: 12px;
    left: 5px;
    transform: scale(1);
  }

  & #header-social-links {
    position: absolute;
    top: 5px;
    left: 5px;
    display: none;

    & > span {
      margin: 2px 0px;
    }

    & svg {
      transform: scale(0.7);
    }
  }

  & > #dotted-square {
    position: absolute;
    transform: rotate(45deg);
    left: calc(50% - 32px);
    bottom: -15px;
  }

  & #dk-header-logo {
    width: fit-content;
    margin-bottom: 40px;
    position: relative;
    display: block;
    margin: 0 auto;
  }

  & > #oval,
  & > #circles,
  & > #hash {
    display: none;
  }

  /* tablet screen */

  @media (min-width: 800px) {
    height: 360px;

    & > #phone-menu-button {
      display: none;
    }

    & #dk-header-logo {
      transform: scale(2);
      margin-top: 50px;
    }

    & #header-social-links {
      display: block;
    }

    & > #oval,
    & > #circles,
    & > #hash {
      display: inline-block;
      position: absolute;
      z-index: 0;
    }

    & > #dotted-square {
      top: 30%;
      left: 20%;
    }

    & > #hash {
      top: 33%;
      right: 20%;
      transform: rotate(15deg);
    }

    & > #circles {
      top: -30%;
      right: 5%;
    }

    & > #oval {
      left: -5%;
      bottom: -15%;
    }
  }
`;

const Header = () => {
  const [isOpen, changeOpen] = useState(false);

  const changeOpenState = () => {
    changeOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <button onClick={changeOpenState} id='phone-menu-button' type='button'>
        <img src={phonemenu} alt='phone-menu' />
      </button>
      <div id='header-social-links'>
        <SocialLinks />
      </div>
      <div>
        <img id='dk-header-logo' src={logo} alt='logo' />
        <HeaderLogo />
      </div>
      <img id='dotted-square' src={dotted} alt='dotted square' />
      <img id='hash' src={hash} alt='hash' />
      <img id='oval' src={oval} alt='oval' />
      <img id='circles' src={circles} alt='circles' />
      <PhoneMenu isOpen={isOpen} closeModal={changeOpenState} />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
