import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Rectangle1 } from 'assets/images/rec-1.svg';
import { ReactComponent as Rectangle2 } from 'assets/images/rec-2.svg';
import SocialLinks from 'components/General/SocialLinks';
import Heading from 'components/General/Heading';
import QuestionMark from 'assets/images/questionmark.svg';
import MeImage from 'assets/images/damian.png';
import Dotted from 'assets/images/dotted-square.svg';
import UrlLink from 'components/General/UrlLink';
import { useLanguage } from 'context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const StyledAboutSection = styled.section`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.fair};
  position: relative;

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

  & > #dotted-square-image {
    display: none;
  }

  & > #me-image {
    position: absolute;
    bottom: 0;
    right: -15px;
    max-width: 220px;
    margin-bottom: 0;
    z-index: 2;
  }

  & > p {
    z-index: 2;
  }

  & > * {
    margin-bottom: 20px;
  }

  & > div[color] {
    @media (max-width: 800px) {
      & > a {
        color: ${({ theme }) => theme.fair};

        & > svg > path {
          fill: ${({ theme }) => theme.fair};
        }
      }
    }
  }

  & > div {
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    & .animated-rectangles {
      display: none;
    }
  }

  @media (max-width: 800px) {
    #social-links > a {
      color: ${({ theme }) => theme.fair};

      & > svg > path {
        fill: ${({ theme }) => theme.fair};
      }
    }
  }

  & .animated-rectangles {
    transform: rotate(-20deg) scale(0.5);
    position: absolute;
    right: 40%;
    top: 0;
    z-index: 3;
  }

  & .animated-rectangle-1 {
    top: 200px;
    animation: reconeflow2 4000ms linear infinite;
  }

  & .animated-rectangle-2 {
    top: 215px;

    animation: reconeflow 3000ms linear infinite;
  }

  @keyframes reconeflow2 {
    0% {
      transform: translate(-400px, 50px) rotate(-20deg) scale(0.5);
    }
    10% {
      transform: translate(-100px, 0px) rotate(-20deg) scale(0.5);
    }
    80% {
      transform: translate(100px, -50px) rotate(-20deg) scale(0.5);
    }
    90% {
      transform: translate(300px, -100px) rotate(-20deg) scale(0.5);
    }
    100% {
      transform: translate(500px, -150px) rotate(-20deg) scale(0.5);
    }
  }

  @keyframes reconeflow {
    0% {
      transform: translate(-400px, 50px) rotate(-20deg) scale(0.5);
    }
    10% {
      transform: translate(-100px, 0px) rotate(-20deg) scale(0.5);
    }
    80% {
      transform: translate(100px, -50px) rotate(-20deg) scale(0.5);
    }
    100% {
      transform: translate(500px, -150px) rotate(-20deg) scale(0.5);
    }
  }

  @media (min-width: 800px) {
    &:after {
      width: 600px;
      height: 750px;
      left: 50%;
      bottom: -150px;
      z-index: 0;
      transform: rotate(50deg);
    }

    & > p {
      width: 300px;
    }

    & > #about-paragraph-1 {
      margin-left: 60px;
    }

    & > #about-paragraph-2 {
      margin-left: 120px;
    }

    & > #question-mark-image {
      left: 30%;
    }

    & > #dotted-square-image {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: rotate(30deg) scale(2.5);
      display: inline;
      filter: grayscale(50%);
    }

    & > div[color] {
      margin-left: 40%;
      & > span {
        color: ${({ theme }) => theme.dark};
        & svg {
          & path {
            fill: #171717;
          }
        }
      }
    }

    & > #me-image {
      max-width: 400px;
      right: 0;
    }

    & > #redirects {
      display: flex;
      width: 250px;
      justify-content: space-between;
      margin-left: 150px;
      z-index: 2;
    }
  }

  @media (min-width: 1000px) {
    &:after {
      width: 700px;
      height: 850px;
      left: 60%;
      bottom: -40px;
      transform: rotate(30deg);
    }

    & > h2 {
      font-size: 4.5rem;
    }

    & > p {
      width: 400px;
      font-size: 1.2rem;
    }

    & > #about-paragraph-1 {
      margin-left: 60px;
    }

    & > #about-paragraph-2 {
      margin-left: 120px;
    }

    & > #question-mark-image {
      left: 30%;
    }

    & > div[color] {
      margin-left: 54%;
      & > span {
        color: ${({ theme }) => theme.dark};
        & svg {
          & path {
            fill: #171717;
          }
        }
      }
    }

    & > #me-image {
      max-width: 400px;
      right: 0;
    }

    & > #redirects {
      display: flex;
      width: 270px;
      justify-content: space-between;
      font-size: 2rem;
      margin-left: 250px;
    }
  }

  @media (min-width: 1200px) {
    &:after {
      width: 700px;
      height: 850px;
      left: 60%;
      bottom: -40px;
      transform: rotate(30deg);
    }

    & > div[color] {
      margin-left: 56%;
      & > span {
        color: ${({ theme }) => theme.dark};
        & svg {
          & path {
            fill: #171717;
          }
        }
      }
    }

    & > #me-image {
      max-width: 550px;
      right: 0;
      bottom: -200px;
    }

    & > #redirects {
      transform: scale(1.4);
    }
  }

  @media (min-width: 1500px) {
    &:after {
      width: 800px;
      height: 850px;
      left: 50%;
      bottom: -40px;
      transform: rotate(30deg);
    }

    & > p {
      font-size: 1.3rem;
      width: 550px;
    }

    & > div[color] {
      margin-left: 55%;
      transform: scale(1.3);
      & > span {
        color: ${({ theme }) => theme.dark};
        & svg {
          & path {
            fill: #171717;
          }
        }
      }
    }

    & > #me-image {
      max-width: 650px;
      right: 0;
    }
  }
`;

const AboutSection = () => {
  const [{ language }] = useLanguage();
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = Array.from(wrapper.current.children);

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: element.id === 'me-image' ? '-=100' : '+=100', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
          },
        }
      );
    });
  });

  return (
    <StyledAboutSection ref={wrapper}>
      <img
        id='question-mark-image'
        src={QuestionMark}
        alt='questionMarkImage'
      />
      <img id='me-image' src={MeImage} alt='meImage' />
      <img id='dotted-square-image' src={Dotted} alt='dottedImage' />
      <Heading color='#8065A8'>
        {language === 'polish' ? (
          <>
            Kim jestem <br /> i co ja tu robię?
          </>
        ) : (
          <>
            Who am I <br /> and what doing here?
          </>
        )}
      </Heading>
      <p id='about-paragraph-1'>
        {language === 'polish'
          ? `Jestem studentem II roku teleinformatyki na Politechnice Poznańskiej i
          pretenduję do tego, by znaleźć swoją pierwszą pracę jako junior frontend
          developer. Uwielbiam to robić i nie widzę nic innego w czym sprawdziłbym
          się tak dobrze`
          : `I am a second-year student of ICT at the Poznań University of Technology and
          I pretend to find my first job as a junior frontend
          developer. I love doing it and can't see anything else that I would check
          doing so well`}
      </p>
      <p id='about-paragraph-2'>
        {language === 'polish'
          ? `
          W swoich projektach staram korzystać się z wielu technologi, nie oczekując "jedynego poprawnego" narzędzia. Bo to nie od narzędzi zależy jak kod zostanie napisany.
          Więcej o mnie i moich rozwiązaniach można poczytać tutaj`
          : `In my projects I try to use many technologies, not expecting "the only correct" tool. Because it is not the tools that determine how the code will be written.
          You can read more about me and my solutions here`}
      </p>
      <SocialLinks links color='#181818' />
      <div id='redirects'>
        <UrlLink to='/about'>
          {language === 'polish' ? 'O mnie' : 'About me'}
        </UrlLink>
        <br />
        <UrlLink to='/contact'>
          {language === 'polish' ? 'Kontakt' : 'Contact'}
        </UrlLink>
      </div>
      <Rectangle1 className='animated-rectangles animated-rectangle-1' />
      <Rectangle2 className='animated-rectangles animated-rectangle-2' />
    </StyledAboutSection>
  );
};

export default AboutSection;
