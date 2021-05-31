import pokeball from '../pokeball.svg';
import '../App.css';
import React,{useContext} from 'react';
import {ThemeContext} from '../Provider/Provider';
import {theme} from '../Theme/theme';
import ThemeSwitch from '../Theme/ThemeSwitch';
import {Link} from 'react-router-dom';


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

function Start() {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className="App"  style={styles.app}>
        <div className="d-flex justify-content-end">
          <ThemeSwitch />
        </div>
      <header className="App-header" style={styles.app}>
        <img src={pokeball} className="App-logo mb-5" alt="logo" />
        <p  style={styles.text} className="lead">
          Welcome to the <code>Pokedex</code> App
        </p>
          <Link to="/pokedex" className="btn btn-outline-danger">
           Enter
          </Link>
      </header>
    </div>
  );
}

export default Start;
