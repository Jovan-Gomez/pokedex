import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useParams } from "react-router-dom";
import NavBar from '../components/NavBar';
import PokemonEncounters from '../components/PokemonEncounters';

const Encounters = ({history}) => {
    let {pokemonId} = useParams();
    const [encountersData, setEncountersData] = useState(undefined);
    const [pokemonData, setPokemonData] = useState(undefined);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/encounters`)
        .then(resp =>{
            const newEncounters = {};
            const {data} = resp;
            data.forEach((encounter, index)=>{
                newEncounters[index + 1] = {
                    name: encounter?.location_area?.name,
                }
            })
            setEncountersData(newEncounters);
        })
    }, [pokemonId]);
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(resp =>{
            setPokemonData(resp.data);
        })
    }, [pokemonId])
    return (
        <>
            <NavBar />
            {encountersData === undefined && <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>}
            {encountersData !== undefined && encountersData && <PokemonEncounters encountersData={encountersData} pokemonData={pokemonData}/>}
            {encountersData === false && <h1>Encounters not found</h1>}
            <button className="btn btn-primary" onClick={()=> history.push(`/pokedex/pokemon/${pokemonId}`)}><i class="bi bi-arrow-left-circle"></i></button>
        </>
    )
}

export default Encounters
