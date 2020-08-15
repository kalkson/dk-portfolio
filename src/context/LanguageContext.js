import React, { createContext } from 'react';
import propTypes from 'prop-types';

const LanguageContext = createContext();
const LanguageDispatchContext = createContext();

const languageReducer = (state, action) => {
  switch (action.type) {
    case 'english': {
      return { language: 'english' };
    }
    case 'polish': {
      return { language: 'polish' };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const LanguageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(languageReducer, {
    language: 'english',
  });
  return (
    <LanguageContext.Provider value={state}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
};

const useLanguageState = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageState must be used within a LanguageProvider');
  }
  return context;
};

const useLanguageDispatch = () => {
  const context = React.useContext(LanguageDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useLanguageDispatch must be used within a LanguageProvider'
    );
  }
  return context;
};

const useLanguage = () => {
  return [useLanguageState(), useLanguageDispatch()];
};

export { LanguageProvider, useLanguageState, useLanguageDispatch, useLanguage };

LanguageProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};
