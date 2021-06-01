import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams } from "react-router-dom";
import NavBar from '../components/NavBar';
import PokemonItem from '../components/PokemonItem';

const Pokemon = () => {
    let {pokemonId} = useParams();
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
           {pokemonData === undefined && <h1>Loading...</h1>}
           {pokemonData !== undefined && pokemonData && <PokemonItem pokemonData={pokemonData}/>}
           {pokemonData === false && <h1>Pokemon not found</h1>}
        </>
    )
}

export default Pokemon
