import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/General/Header';
import Footer from 'components/General/Footer';
import Home from 'components/Pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/asd' component={() => <div>Hello</div>} />
          <Route path='/qwe' component={() => <div>asd</div>} />
        </Switch>
        <Footer />
        {/* <PhoneMenu /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
