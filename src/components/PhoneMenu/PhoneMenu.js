import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useLanguage } from 'context/LanguageContext';
import SocialLinks from 'components/General/SocialLinks';
import { Link } from 'react-router-dom';
import circles from 'assets/images/circles.svg';
import oval from 'assets/images/oval.svg';

const StyledPhoneMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.dark};
  padding: 60px 20px 90px;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform ease-in-out 400ms;

  & > #oval-phone-menu {
    right: -40px;
    top: 400px;
  }

  & > #circles-phone-menu {
    transform: scale(1.3);
    right: 0;
    top: 330px;
  }

  & > svg {
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 10px;
    transform: scale(0.7);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    margin: 15px 0px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.fair};

    &:hover {
      color: ${({ theme }) => theme.fair};
    }
  }
`;

const PhoneMenu = ({ isOpen, closeModal }) => {
  const [{ language }] = useLanguage();

  return (
    <StyledPhoneMenu isOpen={isOpen}>
      {/* <Xclose onClick={closeModal} /> */}
      <StyledMenuContainer>
        <Link to='/' onClick={() => closeModal(true)}>
          {language === 'english' ? 'Home' : 'Home'}
        </Link>
        <Link to='/projects' onClick={() => closeModal(true)}>
          {language === 'english' ? 'Projects' : 'Projekty'}
        </Link>
        <Link to='/about' onClick={() => closeModal(true)}>
          {language === 'english' ? 'About' : 'O mnie'}
        </Link>
        <Link to='/contact' onClick={() => closeModal(true)}>
          {language === 'english' ? 'Contact' : 'Kontakt'}
        </Link>
      </StyledMenuContainer>
      <SocialLinks links color='#EBEBEB' />
      <img id='oval-phone-menu' src={oval} alt='circles' />
      <img id='circles-phone-menu' src={circles} alt='circles' />
    </StyledPhoneMenu>
  );
};

export default PhoneMenu;

PhoneMenu.propTypes = {
  isOpen: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
};
