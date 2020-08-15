import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { useLanguage } from 'context/LanguageContext';
import HeaderLogo from 'components/General/HeaderLogo';
import { ReactComponent as PolishFlag } from 'assets/images/pl-flag.svg';
import { ReactComponent as UsFlag } from 'assets/images/us-flag.svg';
import dotted from 'assets/images/dotted-square.svg';
import logo from 'assets/images/logo.svg';
import circles from 'assets/images/circles.svg';
import hash from 'assets/images/hash.svg';
import oval from 'assets/images/oval.svg';
import PhoneMenu from 'components/PhoneMenu/PhoneMenu';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import AuthButtons from './AuthButtons';

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
  }

  & > .language-buttons {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 5;

    & > button {
      color: ${({ theme }) => theme.fair};
      cursor: pointer;

      & > svg {
        filter: opacity(0.7);
      }
    }
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
    z-index: 1;
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

const PhoneMenuButton = styled.div`
  position: fixed;
  top: 18px;
  left: 10px;
  z-index: 10;
  height: 2.5px;
  width: 25px;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? 'transparent' : theme.darkk};
  transition: background-color 0.25s ease-in-out;
  transform: scale(1.3);

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 2.5px;
    width: 25px;
    background-color: ${({ theme }) => theme.darkk};
    opacity: 1;
    transition: transform 0.25s ease-in-out, width 0.25s ease-in-out;
    transform-origin: left;
  }

  &:before {
    bottom: 7px;
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(45deg) translateY(-2.5px)' : 'rotate(0) translateY(0)'};
    /* width: ${({ isOpen }) => (isOpen ? '20px' : '25px')}; */
    opacity: ${({ isVisible }) => (isVisible ? '1' : '1')};
  }

  &:after {
    top: 7px;
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg) translateY(2.5px)' : 'rotate(0) translateY(0)'};
    /* width: ${({ isOpen }) => (isOpen ? '20px' : '25px')}; */
    opacity: ${({ isVisible }) => (isVisible ? '1' : '1')};
  }
`;

const Header = ({ auth }) => {
  const [isOpen, changeOpen] = useState(false);
  const [{ language }, dispatch] = useLanguage();

  const changeOpenState = () => {
    changeOpen(!isOpen);
  };

  return (
    <StyledHeader>
      {auth.uid ? <AuthButtons /> : null}
      <PhoneMenuButton
        onClick={changeOpenState}
        id='phone-menu-button'
        role='button'
        isOpen={isOpen}
      />
      <div className='language-buttons'>
        {language === 'polish' ? (
          <button type='button' onClick={() => dispatch({ type: 'english' })}>
            <UsFlag />
          </button>
        ) : (
          <button type='button' onClick={() => dispatch({ type: 'polish' })}>
            <PolishFlag />
          </button>
        )}
      </div>
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(connect(mapStateToProps), firestoreConnect())(Header);

Header.propTypes = {
  auth: propTypes.object,
};

Header.defaultProps = {
  auth: null,
};
