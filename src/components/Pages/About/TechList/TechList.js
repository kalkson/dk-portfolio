import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from 'context/LanguageContext';
import Heading from 'components/General/Heading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechListItem from './TechListItem';
import listData from './listData';
import Laptop from 'assets/images/laptop.svg';

gsap.registerPlugin(ScrollTrigger);

const StyledTechList = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.fair};
  padding: 100px 26%;
  position: relative;

  & > ul {
    z-index: 2;
  }

  & > header {
    text-align: right;
  }

  & > img {
    position: absolute;
    bottom: 100px;
    right: 30%;
    transform: scale(2.2);
  }

  @media (max-width: 800px) {
    padding: 40px 25px 40px;

    & > img {
      position: absolute;
      bottom: 100px;
      right: -25%;
      transform: scale(2.2);
      z-index: 1;
      filter: grayscale(50%);
    }
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;

  & > li {
    font-weight: 300;
  }

  & > p {
    margin-bottom: 60px;
  }
`;

const TechList = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const animatedItems = Array.from(wrapper.current.children);

    animatedItems.forEach((item, i) => {
      if (i !== animatedItems.length - 1) {
        gsap.fromTo(
          item,
          { y: '+=100', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: item,
              start: 'top 60%',
            },
          }
        );
      }
    });
  });

  const [{ language }] = useLanguage();

  return (
    <StyledTechList ref={wrapper}>
      <header>
        <Heading>{language === 'polish' ? 'Tech Lista' : 'Tech List'}</Heading>
      </header>
      <StyledList>
        <p>
          {language === 'polish'
            ? 'Poniżej zamieszczam listę technologi, którymi się posłoguję z podziałem na gałęzie. Jest to dla mnie swego rodzaju mindmapa, którą będę stopniowo uzupełniał o nową wiedzę.'
            : 'Below I place a techs list I use with divide on branches. It is some kind of mind map for me, which I will gradually complete thanks to a new knowledge.'}
        </p>
        {listData &&
          listData.map((item) => {
            return (
              <>
                <TechListItem items={item.items}>{item.title}</TechListItem>
              </>
            );
          })}
      </StyledList>
      <img src={Laptop} alt='laptop' />
    </StyledTechList>
  );
};

export default TechList;
