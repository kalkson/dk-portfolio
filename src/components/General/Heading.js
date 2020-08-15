import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledHeading = styled.h2`
  margin: 0;
  color: ${({ color }) => color};

  font-size: ${({ small }) => (small ? '1.3rem' : null)};
`;

const Heading = ({ children, color, small }) => {
  return (
    <StyledHeading color={color} small={small}>
      {children}
    </StyledHeading>
  );
};

export default Heading;

Heading.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  color: propTypes.string,
  small: propTypes.bool,
};

Heading.defaultProps = {
  children: null,
  color: null,
  small: null,
};
