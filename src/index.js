import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './Provider/Provider'
import {ProviderAuth} from './Provider/AuthProvider';

ReactDOM.render(
  <ThemeProvider>
      <React.StrictMode>
     <ProviderAuth>
        <App />
     </ProviderAuth>
      </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
