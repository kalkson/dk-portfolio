import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledProjectListItem = styled.li`
  height: 100px;
  background-color: ${({ theme }) => theme.fair};
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  cursor: pointer;

  & > img {
    max-height: 100%;
    position: relative;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    margin: 0 auto;

    & > h4 {
      margin: 0;
    }

    & > p {
      font-size: 0.6rem;
      text-align: center;
    }
  }
`;

const ProjectListItem = ({ title, shortDescription, imageUrl }) => {
  return (
    <StyledProjectListItem>
      <img src={imageUrl} alt='application' />
      <div>
        <h4>{title}</h4>
        <p>{shortDescription}</p>
      </div>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;

ProjectListItem.propTypes = {
  title: propTypes.string,
  shortDescription: propTypes.string,
  imageUrl: propTypes.string,
};

ProjectListItem.defaultProps = {
  title: '',
  shortDescription: '',
  imageUrl: '',
};
