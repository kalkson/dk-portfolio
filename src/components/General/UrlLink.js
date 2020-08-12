import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Arrow from 'assets/images/arrow-link.svg';

const StyledRouterLink = styled(Link)`
  color: ${({ theme }) => theme.purple};
  vertical-align: middle;
  transition: all 100ms ease-in;
  font-size: 1.4rem;

  &:hover {
    transform: translateY(-5px);
    text-decoration: underline;
  }

  & img {
    height: 15px;
    position: relative;
  }
`;

const StyledUrlLink = styled.a`
  color: ${({ theme }) => theme.purple};
  vertical-align: middle;
  transition: all 100ms ease-in;

  &:hover {
    transform: translateY(-5px);
    text-decoration: underline;
  }

  & img {
    height: 15px;
    position: relative;
  }
`;

const UrlLink = ({ to, children, href }) => {
  if (to)
    return (
      <StyledRouterLink
        to={to}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {children} <img src={Arrow} alt='arrow link' />
      </StyledRouterLink>
    );
  return (
    <StyledUrlLink href={href}>
      {children} <img src={Arrow} alt='arrow link' />
    </StyledUrlLink>
  );
};

UrlLink.propTypes = {
  to: propTypes.string,
  children: propTypes.element.isRequired,
  href: propTypes.string,
};

UrlLink.defaultProps = {
  to: null,
  href: null,
};

export default UrlLink;
