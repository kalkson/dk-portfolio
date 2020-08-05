import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import js from 'assets/images/js.svg';
import firebase from 'assets/images/firebase.svg';
import css from 'assets/images/css.svg';
import react from 'assets/images/react.svg';
import Heading from 'components/General/Heading';
import TechCard from './TechCard';

gsap.registerPlugin(ScrollTrigger);

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.fair};
  overflow: hidden;

  & h2 {
    text-align: center;
    padding-top: 40px;
  }

  @media (min-width: 800px) {
    & h2 {
      padding: 35px 190px 0px;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

const StyledTechs = styled.div`
  padding: 35px 90px;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 30px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1200px) {
    padding: 50px 190px;
  }
`;

const Techs = () => {
  const wrapper = useRef(null);
  const heading = useRef(null);

  useEffect(() => {
    const elements = Array.from(wrapper.current.children);

    if (window.screen.width > 800) {
      elements.forEach((element, i) => {
        gsap.from(element.children, {
          opacity: 0,
          y: 200,
          duration: 0.8,
          delay: 0.1 * i,
        });
      });
    } else {
      elements.forEach((element) => {
        gsap.fromTo(
          element.children,
          { y: '+=100', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: element,
              start: 'top 60%',
            },
          }
        );
      });
    }

    const headin = heading.current.children;

    gsap.from(headin, {
      opacity: 0,
      y: -100,
      duration: 0.8,
    });
  });

  return (
    <StyledContainer ref={heading}>
      <Heading color='#181818'>
        Cześć! Jestem FrontEnd Developerem a moje oczka w głowie to:
      </Heading>
      <StyledTechs ref={wrapper}>
        <TechCard
          name='React.js'
          svg={react}
          desc='Na co dzień korzystam z biblioteki React.js i wszelkich narzędzi z nim związanych. Dowiedz się o nich więcej w sekcji o mnie.'
        />
        <TechCard
          name='JS ES6+'
          svg={js}
          desc='Język JavaScript pozwala na praktycznie wszystko. Oparta jest na nim masa bilbliotek i frameworków jak React. Od czasów ES6 jest to wspaniałe narzędzie do webdevelopmentu.'
        />
        <TechCard
          name='CSS3 + SaSS'
          svg={css}
          desc='Dzięki Styled Components oraz preprocessora CSS Sass opracowuję piękne i estetyczne strony a jego integracja z Reactem pozwala na niewyobrażalne jak dotąd rozwiązania.'
        />
        <TechCard
          name='Firebase'
          svg={firebase}
          desc='Swoje projekty (jeśli tego wymagają) opieram na Firebase od Google, korzystając z Cloud Functions w oparciu o node.js'
        />
      </StyledTechs>
    </StyledContainer>
  );
};

export default Techs;
