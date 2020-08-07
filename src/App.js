import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from 'context/LanguageContext';
import { theme } from 'theme/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/General/Header';
import Footer from 'components/General/Footer';
import Home from 'components/Pages/Home/Home';
import Projects from 'components/Pages/Projects/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/qwe' component={() => <div>asd</div>} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
