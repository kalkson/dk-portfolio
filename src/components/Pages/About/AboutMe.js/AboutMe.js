import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Heading from 'components/General/Heading';
import { useLanguage } from 'context/LanguageContext';
import SocialLinks from 'components/General/SocialLinks';
import { gsap } from 'gsap';
import Info from 'assets/images/info.svg';
import UrlLink from 'components/General/UrlLink';

const StyledAboutMe = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.fair};
  color: ${({ theme }) => theme.dark};
  padding: 100px 26%;
  position: relative;

  & > header {
    margin: 0 0 20px 0;
  }

  & > p {
    margin-bottom: 100px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 3;
    position: relative;

    & span {
      & > a {
        vertical-align: middle;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.purple};
        & > img {
          position: relative;
          width: 20px;
        }
      }
    }
  }

  & > img {
    position: absolute;
    bottom: 80px;
    transform: scale(4) rotate(30deg);
    right: 20%;
    z-index: 1;
  }

  @media (max-width: 800px) {
    padding: 40px 25px 40px;

    & > div {
      flex-direction: column;
      align-items: initial;
    }
  }
`;

const AboutMe = () => {
  const [{ language }] = useLanguage();

  const wrapper = useRef(null);

  useEffect(() => {
    const animatedItems = Array.from(wrapper.current.children);
    animatedItems.forEach((element, i) => {
      gsap.from(element, {
        opacity: 0,
        y: 200,
        duration: 0.8,
        delay: 0.1 * i,
      });
    });
  });

  return (
    <StyledAboutMe ref={wrapper}>
      <header>
        <Heading>{language === 'polish' ? 'O mnie' : 'About'}</Heading>
      </header>
      <p>
        {language === 'polish' && (
          <>
            Nazywam się Damian i projektuję strony internetowe. Na razie nie na
            poważnie. Na poważnie się jednak uczę. W swojej ścieżce wybrałem
            Reacta. Chcę zostać w nim totalnym masterem i sprawić, że
            zaprojektowanie czegokolwiek w Internecie nie będzie dla mnie żadną
            przeszkodą. Uważam, że do tego celu potrzebne mi będzie coś więcej
            niż tylko samotne siedzenie przy ekranie monitora, czytanie
            dokumentacji, szukanie rozwiązań późną nocą na stack overflow, czy
            też oglądanie kursów. <br />
            <br />
            Chciałbym znaleźć pracę jako junior. Po części też to po to
            portfolio powstało. Znajdziesz tutaj moje projekty - te większe i
            mniejsze z dokładnym opisem do czego dany projekt służy i z jakich
            narzędzi został zbudowany. Ponadto możesz podejrzeć kod na GitHubie
            i sprawdzić moje umiejętności. <br />
            <br />W swojej pracy nie ograniczam się do &quot;jedynych słusznych
            rozwiązań&quot;. Jestem otwarty na wiele dróg i szukanie najlepszego
            rozwiązania.
          </>
        )}
        {language === 'english' && (
          <>
            My name is Damian and I design websites. Not at the moment
            seriously. However, I am learning seriously. In my path I chose
            React. I want to become a total master in it and make it designing
            anything on the internet will be nothing for me obstacle. I believe
            that for this I will need more than just sitting alone at the
            monitor screen, reading documentation, looking for solutions late at
            night on stack overflow, or watching courses. <br />
            <br />
            I would like to find a job as a junior. In part, this is also the
            portfolio arose. Here you will find my projects - the larger and
            smaller ones with a detailed description of what the project is for
            and what tools are used was built. Moreover, you can preview the
            code on GitHub and check it my skills. <br />
            <br /> In my work I do not limit myself to &quot;the right
            ones.&quot; solutions. I am open to many ways and looking for the
            best solutions.
          </>
        )}
      </p>
      <div>
        <SocialLinks links color='#171717' />
        <span>
          <UrlLink to='/contact'>
            {language === 'polish' ? 'Skontaktuj się ze mną' : 'Contact'}
          </UrlLink>
        </span>
      </div>
      <img src={Info} alt='info' />
    </StyledAboutMe>
  );
};

export default AboutMe;
