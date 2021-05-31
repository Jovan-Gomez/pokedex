import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import Start from './pages/Start';


const App = () => {
    return (
        <Switch>
           <Route exact path="/">
            <Start />
            </Route>
            <Route exact path="/pokedex" render={(props) => <Pokedex {...props}/>} />
            <Route exact path="/pokedex/pokemon/:pokemonId" render={(props)=> <Pokemon {...props}/>} />
        </Switch>
    )
}

export default App
