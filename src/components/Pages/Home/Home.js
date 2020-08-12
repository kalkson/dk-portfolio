import React from 'react';
import styled from 'styled-components';
import Techs from './Techs/Techs';
import MyProjects from './MyProjects/MyProjects';
import AboutSection from './AboutSection/AboutSection';

const StyledHome = styled.main``;

const Home = () => {
  return (
    <StyledHome>
      <Techs />
      <MyProjects />
      <AboutSection />
    </StyledHome>
  );
};

export default Home;
