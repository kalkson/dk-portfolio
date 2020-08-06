import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Rectangle1 } from 'assets/images/rec-1.svg';
import { ReactComponent as Rectangle2 } from 'assets/images/rec-2.svg';
import SocialLinks from 'components/General/SocialLinks';
import Heading from 'components/General/Heading';
import QuestionMark from 'assets/images/questionmark.svg';
import MeImage from 'assets/images/damian.png';
import Arrow from 'assets/images/arrow-link.svg';
import Dotted from 'assets/images/dotted-square.svg';

gsap.registerPlugin(ScrollTrigger);

const StyledAboutSection = styled.section`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.fair};
  position: relative;
  /* overflow: hidden; */
  /* height: 800px; */

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

  & svg path {
    fill: ${({ theme }) => theme.fair};
  }

  & > div {
    margin-top: 30px;
  }

  & > #redirects {
    margin: 50px 0px 0px;
    font-size: 1.5rem;

    & > a {
      color: ${({ theme }) => theme.purple};
      vertical-align: middle;
      transition: all 100ms ease-in;

      &:hover {
        transform: translateY(-5px);
        text-decoration: underline;
      }
    }

    & img {
      height: 20px;
      position: relative;
    }
  }

  @media (max-width: 1000px) {
    & .animated-rectangles {
      display: none;
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
      width: 400px;
      justify-content: space-between;
      font-size: 2rem;
      margin-left: 210px;
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
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = Array.from(wrapper.current.children);

    elements.forEach((element) => {
      console.log(element);
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
            start: element.id === 'me-image' ? 'top 60%' : 'top 100%',
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
        <Link to='/asd'>
          O mnie <img src={Arrow} alt='arrowLink' />
        </Link>
        <br />
        <Link to='/contact'>
          Kontakt <img src={Arrow} alt='arrowLink' />
        </Link>
      </div>
      <Rectangle1 className='animated-rectangles animated-rectangle-1' />
      <Rectangle2 className='animated-rectangles animated-rectangle-2' />
    </StyledAboutSection>
  );
};

export default AboutSection;
