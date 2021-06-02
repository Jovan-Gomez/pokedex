import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import PokeCard from '../components/PokeCard'
import { useHistory } from "react-router-dom";
import {lowerCase} from '../constants/firstCharUpperCase'
import axios from 'axios';
const Pokedex = () => {
    let history = useHistory();
    const [pokemonData, setPokemonData] = useState({});
    const [filterName, setFilterName] = useState("");
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
        .then(resp =>{
            const {data:{results}} = resp;
            const newPokemon = {};
            results.forEach((pokemon, index)=>{
                newPokemon[index + 1] = {
                    id: index + 1,
                    name: pokemon.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }
            })
            setPokemonData(newPokemon);
        })
    }, []);


    const handleSearchName = (e)=>setFilterName(lowerCase(e.target.value));
    return (
          <>
           <NavBar />
            <div className="container">
            <section className="row justify-content-center m-1">
                <div className="card mt-4" style={{maxWidth: '30rem'}}>
                    <div className="card-body">
                            <h3 className="card-title text-center">Pokemon</h3>
                            <p className="card-text text-center">Search your favorite Pokemon</p>
                            <div className="input-group">
                                <label className="input-group-text" htmlFor="name"><i className="bi bi-search"></i></label>
                                <input className="form-control"  id="name" onChange={handleSearchName}/>
                            </div>
                            <div className="form-text">Search by Pokemon Name</div>
                        </div>
                </div>
            </section>

            <div className="mt-4">
                    <div className="row row-cols-1 justify-content-center">
                    {
                        pokemonData ? 
                       ( 
                           <>
                                {
                                    Object.keys(pokemonData).map(pokemonId => {
                                        return pokemonData[pokemonId].name.includes(filterName) && <PokeCard key={pokemonId} pokemonId={pokemonId} pokemonData={pokemonData} history={history}/>
                                    })
                                }
                           </>
                        )
                        :
                        (<h2>Loading...</h2>)
                    }
                    </div>
                </div>
            </div>
          </>
    )
}

export default Pokedex
