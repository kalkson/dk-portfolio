import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from 'context/LanguageContext';
import { theme } from 'theme/theme';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/General/Header';
import Footer from 'components/General/Footer';
import Home from 'components/Pages/Home/Home';
import Projects from 'components/Pages/Projects/Projects';
import About from 'components/Pages/About/About';
import Contact from 'components/Pages/Contact/Contact';
import Login from 'components/Pages/Login/LogIn';
import AddProject from 'components/Pages/AddProject/AddProject';

const Page = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Footer />
    </>
  );
};

const FormPageLogin = () => {
  return (
    <>
      <Route exact path='/' render={() => <Redirect to='/login' />} />
      <Route path='/login' component={Login} />
    </>
  );
};

const FormPageAdd = () => {
  return (
    <>
      <Route exact path='/' render={() => <Redirect to='/login' />} />
      <Route path='/add' component={AddProject} />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/(login)' component={FormPageLogin} />
            <Route exact path='/(add)' component={FormPageAdd} />
            <Route component={Page} />
          </Switch>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
