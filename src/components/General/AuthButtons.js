import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { ReactComponent as Add } from 'assets/images/add.svg';
import { ReactComponent as SignOut } from 'assets/images/signout.svg';
import { signOut } from 'store/actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StyledAuthButtons = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
  display: flex;

  & > button {
    cursor: pointer;

    & svg {
      width: 20px;
      height: 20px;

      & path {
        fill: ${({ theme }) => theme.darkk};
        stroke: ${({ theme }) => theme.darkk};
      }
    }
  }
`;

const AuthButtons = ({ signOut }) => {
  return (
    <StyledAuthButtons>
      <button type="button">
        <Link to="/add">
          <Add />
        </Link>
      </button>
      <button type="button" onClick={() => signOut()}>
        <SignOut />
      </button>
    </StyledAuthButtons>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AuthButtons);

AuthButtons.propTypes = {
  signOut: propTypes.func.isRequired,
};
