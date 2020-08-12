import React from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe.js/AboutMe';
import TechList from './TechList/TechList';

const StyledAbout = styled.main``;

const About = () => {
  return (
    <StyledAbout>
      <AboutMe />
      <TechList />
    </StyledAbout>
  );
};

export default About;
