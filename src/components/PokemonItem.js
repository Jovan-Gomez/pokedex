import React from 'react'
import {firstCharUpperCase} from '../constants/firstCharUpperCase'

const PokemonItem = ({pokemonData}) => {
    const {name, id, species, height, weight, types} = pokemonData;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return (
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
    )
}

export default PokemonItem
