import pokeball from './pokeball.svg';
import './App.css';
import React,{useContext} from 'react';
import {ThemeContext} from './Provider/Provider';
import {theme} from './Theme/theme';
import ThemeSwitch from './Theme/ThemeSwitch';

const getStyles = (mode)=>({
  header: {
    fontSize: 34,
    fontWeight: "400"
  },
  app: {
    height: "100%",
    width: "100%",
    backgroundColor: theme[mode].backgroundColor
  },
  text: {
    fontWeight: "200",
    color: theme[mode].color
  },
  theme: {
    color: theme[mode].highlight
  }
});

function App() {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className="App" >
      <header className="App-header" style={styles.app}>
        <img src={pokeball} className="App-logo" alt="logo" />
        <p  style={styles.text}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ThemeSwitch />
      </header>
    </div>
  );
}

export default App;
