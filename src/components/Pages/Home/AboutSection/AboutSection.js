import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialLinks from 'components/General/SocialLinks';
import Heading from 'components/General/Heading';
import QuestionMark from 'assets/images/questionmark.svg';
import MeImage from 'assets/images/damian.png';
import Arrow from 'assets/images/arrow-link.svg';

const StyledAboutSection = styled.section`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.fair};
  position: relative;
  height: 800px;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.fair};
    transform: rotate(25deg);
    width: 250px;
    height: 350px;
    right: -130px;
    bottom: 0;
    z-index: 1;
  }

  & > h2 {
    font-size: 2.7rem;
    z-index: 1;
  }

  & > #question-mark-image {
    position: absolute;
    top: -30px;
    right: 0;
    transform: rotate(40deg);
    z-index: 0;
  }

  & > #me-image {
    position: absolute;
    bottom: 0;
    right: -15px;
    max-width: 220px;
    margin-bottom: 0;
    z-index: 2;
  }

  & > * {
    margin-bottom: 20px;
  }

  & svg path {
    fill: ${({ theme }) => theme.fair};
  }

  & > div {
    margin-top: 30px;
  }

  & > #redirects {
    margin-top: auto;
    font-size: 1.5rem;

    & > a {
      color: ${({ theme }) => theme.purple};
      vertical-align: middle;

      &:hover {
        transform: translateX(5px);
        text-decoration: underline;
      }
    }

    & img {
      height: 20px;
      position: relative;
    }
  }
`;

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <img
        id='question-mark-image'
        src={QuestionMark}
        alt='questionMarkImage'
      />
      <img id='me-image' src={MeImage} alt='meImage' />
      <Heading color='#8065A8'>
        Kim jestem <br /> i co ja tu robię?
      </Heading>
      <p id='about-paragraph-1'>
        Jestem studentem II roku teleinformatyki na Politechnice Poznańskiej i
        pretenduję do tego, by znaleźć swoją pierwszą pracę jako junior frontend
        developer. Uwielbiam to robić i nie widzę nic innego w czym sprawdziłbym
        się tak dobrze
      </p>
      <p id='about-paragraph-2'>
        W swoich projektach korzystam z wielu technologi, nie ograniczam się do
        pojedynczych rozwiązań, tylko staram się być otwarty na wiele aspektów.
        Więcej o mnie i moich rozwiązaniach można poczytać tutaj
      </p>
      <SocialLinks links color='#EBEBEB' />
      <div id='redirects'>
        <Link to='/about'>
          O mnie <img src={Arrow} alt='arrowLink' />
        </Link>
        <br />
        <Link to='/contact'>
          Kontakt <img src={Arrow} alt='arrowLink' />
        </Link>
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
