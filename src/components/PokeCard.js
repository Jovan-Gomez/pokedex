import React from 'react'
import {firstCharUpperCase} from '../constants/firstCharUpperCase'

const PokeCard = ({pokemonId, pokemonData, history}) => {
    const {id, name, sprite} = pokemonData[pokemonId];
    return (
        <div className="col card m-3" style={{width: '18rem', height: '18rem'}} onClick={()=> history.push(`/pokedex/pokemon/${pokemonId}`)} data-bs-toggle="tooltip" data-bs-placement="top" title={name}>
        <img src={sprite} className="card-img-to" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">#{id}</h5>
                <p className="card-text">{firstCharUpperCase(name)}</p>
            </div>
        </div>
    )
}

export default PokeCard
