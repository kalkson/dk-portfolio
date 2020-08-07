import React from 'react';
import styled from 'styled-components';
import bg from 'assets/images/bg1.png';

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

    & > h4 {
      margin: 0;
    }

    & > p {
      font-size: 0.6rem;
      text-align: center;
    }
  }
`;

const ProjectListItem = ({ name }) => {
  return (
    <StyledProjectListItem>
      <img src={bg} alt='bg' />
      <div>
        <h4>{name}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          dolorem!
        </p>
      </div>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
