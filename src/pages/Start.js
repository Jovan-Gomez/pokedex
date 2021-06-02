import pokeball from '../pokeball.svg';
import '../App.css';
import React,{useContext, useState} from 'react';
import {ThemeContext} from '../Provider/Provider';
import {theme} from '../Theme/theme';
import ThemeSwitch from '../Theme/ThemeSwitch';
import { useAuth } from '../Provider/AuthProvider';
import { useHistory } from 'react-router';


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
  const [couchName, setCouchName] = useState("");
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  const {signIn, user} =  useAuth();
  const history = useHistory();
  const handleCouchName = (e)=>setCouchName((e.target.value));
  localStorage.user = user;
  const onSubmit = (e)=>{
    e.preventDefault();
    signIn(()=>{
      localStorage.setItem('user', couchName);
      history.push('/pokedex');
    }, couchName)
  }
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
        <form onSubmit={onSubmit}>
        <div className="input-group">
          <input className="form-control w-50" onChange={handleCouchName}/>
        </div>
        <p className="form-text">Write your couch name</p>
        </form>
      </header>
    </div>
  );
}

export default Start;
