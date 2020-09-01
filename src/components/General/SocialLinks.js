import React from 'react';
import styled from 'styled-components';
import propTypes, { string } from 'prop-types';
import { ReactComponent as LinkedIn } from 'assets/images/linkedin-icon.svg';
import { ReactComponent as Facebook } from 'assets/images/facebook-icon.svg';
import { ReactComponent as GitHub } from 'assets/images/github-icon.svg';

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  z-index: 3;

  & > a {
    color: ${({ color }) => color};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    transition: transform 100ms linear;

    &:hover {
      color: ${({ color }) => color};
      transform: scale(1.1);
    }

    & > svg {
      margin-right: ${({ links }) => (links ? '10px' : '0')};
      width: 30px;

      & > path {
        fill: ${({ color }) => color};
      }
    }
  }
`;

const SocialLinks = ({ links, color }) => {
  return links ? (
    <StyledSocialLinks links={links} color={color}>
      <a href='https://www.linkedin.com/in/damian-kalka/' target='blink'>
        <LinkedIn />
        LinkedIn
      </a>
      <a href='https://www.facebook.com/kalka762/' target='blink'>
        <Facebook />
        Facebook
      </a>
      <a href='https://github.com/kalkson' target='blink'>
        <GitHub />
        GitHub
      </a>
    </StyledSocialLinks>
  ) : (
    <StyledSocialLinks>
      <a href='https://www.linkedin.com/in/damian-kalka/' target='blink'>
        <LinkedIn />
      </a>
      <a href='https://www.facebook.com/kalka762/' target='blink'>
        <Facebook />
      </a>
      <a href='https://github.com/kalkson' target='blink'>
        <GitHub />
      </a>
    </StyledSocialLinks>
  );
};

SocialLinks.propTypes = {
  links: propTypes.bool,
  color: string,
};

SocialLinks.defaultProps = {
  links: false,
  color: '#171717',
};

export default SocialLinks;
