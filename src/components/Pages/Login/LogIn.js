import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { signIn } from 'store/actions/authActions';
import logo from 'assets/images/logo.svg';
import WebForm from 'components/General/Form/WebForm';
import * as FormElements from 'components/General/Form/FormElements';
import { theme } from 'theme/theme';
import Heading from 'components/General/Heading';
import FormPage from '../FormPage/FormPage';

const StyledLogin = styled(FormPage)`
  & span {
    color: red;
    margin: 0;
  }
`;

const Login = ({ auth, authError, signIn }) => {
  if (auth.uid) {
    return <Redirect path='/' />;
  }

  return (
    <StyledLogin>
      <img src={logo} alt='logo' />
      <Form
        onSubmit={(formObj) => {
          signIn(formObj);
        }}
      >
        {({ handleSubmit }) => (
          <WebForm onSubmit={handleSubmit}>
            <header>
              <Heading color={theme.purple}>Sign In</Heading>
            </header>
            <Field name='email'>
              {({ input, meta }) => (
                <>
                  <FormElements.Input
                    type='text'
                    {...input}
                    required
                    minLength={3}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name='password'>
              {({ input }) => (
                <FormElements.Input type='password' {...input} required />
              )}
            </Field>
            <FormElements.Button type='submit'>Sign In</FormElements.Button>
            {authError ? <span>authError</span> : null}
          </WebForm>
        )}
      </Form>
    </StyledLogin>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  signIn: propTypes.func.isRequired,
  auth: propTypes.arrayOf(propTypes.string),
  authError: propTypes.string,
};

Login.defaultProps = {
  authError: null,
  auth: null,
};
