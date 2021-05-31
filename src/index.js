import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './Provider/Provider';
import { HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
     <Router>
      <App />
     </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
