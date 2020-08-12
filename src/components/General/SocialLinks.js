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

  & > span {
    color: ${({ color }) => color};
    font-size: 1.8rem;
    display: flex;
    align-items: center;

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
      <span>
        <LinkedIn />
        LinkedIn
      </span>
      <span>
        <Facebook />
        Facebook
      </span>
      <span>
        <GitHub />
        GitHub
      </span>
    </StyledSocialLinks>
  ) : (
    <StyledSocialLinks>
      <span>
        <LinkedIn />
      </span>
      <span>
        <Facebook />
      </span>
      <span>
        <GitHub />
      </span>
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
