import React, { useState } from 'react'
import {useParams } from "react-router-dom";
import {mookData} from '../mookData';
import NavBar from '../components/NavBar';
import {firstCharUpperCase} from '../constants/firstCharUpperCase'
const Pokemon = () => {
    let {pokemonId} = useParams();
    const [pokemonData] = useState(mookData[pokemonId]);
    const {name, id, species, height, weight, types} = pokemonData;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return (
        <>
            <NavBar />
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{firstCharUpperCase(name)}</h3>
                    <p>#{id}</p>
                    <img className="card-img-top" src={fullImageUrl} alt={name}/>
                    <p className="card-text">Types: </p>
                    {types.map(type=>{
                        return <p key={type.type.name}> - {type.type.name}</p>
                    })} 
                    <p className="card-text">Species: {species.name}</p>
                    <p className="card-text">Heigtht: {height}</p>
                    <p className="card-text">Weight: {weight}</p>
                </div>
            </div>
        </>
    )
}

export default Pokemon
