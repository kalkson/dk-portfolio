import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Heading from 'components/General/Heading';
import { useLanguage } from 'context/LanguageContext';
import { gsap } from 'gsap';
import UrlLink from 'components/General/UrlLink';

const StyledContactSection = styled.section`
  padding: 100px 26%;
  background-color: ${({ theme }) => theme.fair};

  @media (max-width: 800px) {
    padding: 40px 25px 40px;
  }
`;

const ContactSection = () => {
  const [{ language }] = useLanguage();
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = Array.from(wrapper.current.children);

    elements.forEach((element, i) => {
      gsap.from(element, {
        opacity: 0,
        y: 200,
        duration: 0.8,
        delay: 0.1 * i,
      });
    });
  });

  return (
    <StyledContactSection ref={wrapper}>
      <header>
        <Heading>{language === 'polish' ? 'Kontakt' : 'Contact'}</Heading>
      </header>
      <p>
        {language === 'polish'
          ? `Jeśli chciałbyś/chiałabyś mnie zapytać o cokolwiek - czy to związanego ze stroną, technologiami, kodem, nauką lub zwrócić mi na coś uwagę, możesz to zrobić tutaj.`
          : 'If you want to ask me about whatever you want - site, techs, code, learning aspects or give me a remark about someting, you can do it here.'}
        <br />
        <br />
        {language === 'polish'
          ? `W przyszłości planuję tutaj umieścić formularz kontaktowy.
          Na razie jednak zostawiam swojego maila oraz linki do social mediów, gdzie możesz do mnie napisać.`
          : "In the future I'm going to put contact form here. Nowadays I leave my email address and socials links, where you can feel free to write to me."}
      </p>
      <h3>kalka762@gmail.com</h3>
      <UrlLink href='https://www.facebook.com/kalka762/'>Facebook</UrlLink>
    </StyledContactSection>
  );
};

export default ContactSection;
