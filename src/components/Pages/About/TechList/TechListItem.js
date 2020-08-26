import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CheckIcon from 'assets/images/check-icon.svg';
import UnCheckIcon from 'assets/images/un-check-icon.svg';
import InProgressIcon from 'assets/images/in-progress-icon.svg';
import { ReactComponent as Arrow } from 'assets/images/arrow-right.svg';

const StyledTechListItem1 = styled.li`
  margin: 20px 0px;

  & button {
    color: ${({ theme }) => theme.fair};
    font-size: 2rem;
    padding: 0;
    cursor: pointer;
    vertical-align: middle;

    & > svg {
      max-height: 25px;
      transform: ${({ isVisible }) =>
        isVisible ? 'rotate(90deg)' : 'rotate(0deg)'};
      transition: transform ease-out 200ms;

      margin-left: 5px;

      & > path {
        fill: ${({ theme }) => theme.fair};
      }
    }
  }
`;

const StyledTechListItem2 = styled.li`
  margin: 6px 0;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const StyledTechList = styled.ul`
  list-style-type: none;
  padding: ${({ isVisible }) => (isVisible ? '5px 0px 10px 20px' : '0')};
  margin-top: ${({ isVisible }) => (isVisible ? '10px' : '0')};
  background-color: ${({ theme }) => theme.dark};
  font-weight: 300;
  max-height: ${({ isVisible }) => (isVisible ? '300px' : '0')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  /* transition: opacity 200ms linear; */
  transition: max-height 200ms ease-in-out, opacity 200ms linear,
    padding-top 200ms linear, margin 200ms linear;
  transform-origin: top;
  /* transition: all 200ms linear; */
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  & img {
    position: relative;
    margin-right: 7px;
  }
`;

const ListItem = ({ icon, children }) => {
  let type = null;

  switch (icon) {
    case 'check':
      type = CheckIcon;
      break;
    case 'unCheck':
      type = UnCheckIcon;
      break;
    case 'inProgress':
      type = InProgressIcon;
      break;
    default:
      break;
  }

  return (
    <>
      <StyledTechListItem2>
        <img src={type} alt='list icon' />
        {children}
      </StyledTechListItem2>
    </>
  );
};

const TechListItem = ({ children, items }) => {
  const [isListVisible, setListVisible] = useState(false);

  return (
    <StyledTechListItem1 isVisible={isListVisible}>
      <button type='button' onClick={() => setListVisible(!isListVisible)}>
        {children}
        <Arrow />
      </button>
      <StyledTechList isVisible={isListVisible}>
        {items &&
          items.map((item) => (
            <ListItem key={item.name} icon={item.icon}>
              {item.name}
            </ListItem>
          ))}
      </StyledTechList>
    </StyledTechListItem1>
  );
};

ListItem.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  icon: propTypes.string.isRequired,
};

TechListItem.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default TechListItem;
