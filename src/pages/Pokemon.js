import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams } from "react-router-dom";
import NavBar from '../components/NavBar';
import PokemonItem from '../components/PokemonItem';
import { useHistory } from "react-router-dom";
const Pokemon = () => {
    let {pokemonId} = useParams();
    let history = useHistory();
    const [pokemonData, setPokemonData] = useState(undefined);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(resp =>{
            setPokemonData(resp.data);
        })
    }, [pokemonId])
    

    return (
        <>
            <NavBar />
           {pokemonData === undefined && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
           {pokemonData !== undefined && pokemonData && <PokemonItem pokemonData={pokemonData} history={history}/>}
           {pokemonData === false && <h1>Pokemon not found</h1>}
           <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={()=> history.push(`/pokedex`)}><i className="bi bi-arrow-left-circle"></i></button>
            <button className="btn btn-primary" onClick={()=> history.push(`/pokedex/pokemon/${pokemonId}/encounters`)}><i className="bi bi-eye"></i> View Encounters</button>
           </div>
        </>
    )
}

export default Pokemon
