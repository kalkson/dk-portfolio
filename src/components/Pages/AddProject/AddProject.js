import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { theme } from 'theme/theme';
import { connect } from 'react-redux';
import { addProject } from 'store/actions/projectsActions';
import logo from 'assets/images/logo.svg';
import WebForm from 'components/General/Form/WebForm';
import * as FormElements from 'components/General/Form/FormElements';
import Heading from 'components/General/Heading';
import FormPage from '../FormPage/FormPage';
import { useHistory } from 'react-router-dom';

const StyledAddProject = styled(FormPage)`
  & span {
    color: red;
    margin: 0;
  }
`;

const AddProject = ({ error, addProject }) => {
  const [fileImage, setFileImage] = useState(null);
  const history = useHistory();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileImage(file);
  };

  return (
    <StyledAddProject>
      <img src={logo} alt='logo' />
      <Form
        onSubmit={(formObj) => {
          const project = formObj;
          project.image = fileImage.name;
          project.fileImage = fileImage;
          addProject(project);
          history.push('/');
        }}
      >
        {({ handleSubmit }) => (
          <WebForm onSubmit={handleSubmit}>
            <header>
              <Heading color={theme.purple}>Add project</Heading>
            </header>
            <Field name='title'>
              {({ input }) => (
                <>
                  <FormElements.Input type='text' {...input} required />
                </>
              )}
            </Field>
            <Field name='englishDescription'>
              {({ input }) => (
                <FormElements.Textarea type='text' {...input} required />
              )}
            </Field>
            <Field name='englishShortDescription'>
              {({ input }) => (
                <FormElements.Textarea type='text' {...input} required />
              )}
            </Field>
            <Field name='polishDescription'>
              {({ input }) => (
                <FormElements.Textarea type='text' {...input} required />
              )}
            </Field>
            <Field name='polishShortDescription'>
              {({ input }) => (
                <FormElements.Textarea type='text' {...input} required />
              )}
            </Field>
            <FormElements.Input
              name='imageFile'
              type='file'
              required
              onChange={(e) => handleFileChange(e)}
            />
            <Field name='webUrl'>
              {({ input }) => <FormElements.Input type='text' {...input} />}
            </Field>
            <Field name='github'>
              {({ input }) => <FormElements.Input type='text' {...input} />}
            </Field>
            <FormElements.Button type='submit'>Add Project</FormElements.Button>
            {error ? <span>error</span> : null}
          </WebForm>
        )}
      </Form>
    </StyledAddProject>
  );
};

const mapStateToProps = ({ error }) => {
  return {
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (project) => dispatch(addProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);

AddProject.propTypes = {
  error: propTypes.string,
  addProject: propTypes.func.isRequired,
};

AddProject.defaultProps = {
  error: null,
};
