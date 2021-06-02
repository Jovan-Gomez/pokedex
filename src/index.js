import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './Provider/Provider'
import {ProviderAuth} from './Provider/AuthProvider';

ReactDOM.render(
     <ProviderAuth>
      <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
     </ThemeProvider>
     </ProviderAuth>,
  document.getElementById('root')
);

reportWebVitals();
