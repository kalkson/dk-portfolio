import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'theme/GlobalStyle';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
