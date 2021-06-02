import React from 'react'
import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Encounters from './pages/Encounters';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import Start from './pages/Start';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <Start /> </Route>
                <ProtectedRoute exact path="/pokedex"><Pokedex/></ProtectedRoute>
                <Route exact path="/pokedex/pokemon/:pokemonId" render={(props)=> <Pokemon {...props}/>} />
                <Route exact path="/pokedex/pokemon/:pokemonId/encounters" render={(props)=> <Encounters {...props}/>} />
            </Switch>
        </Router>
    )
}

export default App
