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
  children: propTypes.element.isRequired,
  color: propTypes.string,
  small: propTypes.bool,
};

Heading.defaultProps = {
  color: null,
  small: null,
};
