import React from 'react'
import {firstCharUpperCase} from '../constants/firstCharUpperCase';

const PokemonItem = ({pokemonData}) => {
    const {name, id, height, weight, types, order, abilities, moves} = pokemonData;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return (
            <div className="card-body">
                <h3 className="card-title">{firstCharUpperCase(name)}</h3>
                <p>#{id}</p>
                <div className="d-flex justify-content-center">
                <img className="card-img-top" src={fullImageUrl} alt={name} style={{maxWidth: '25rem'}}/>
                </div>
                <div className="text-center">
                    {types.map(type=>{
                        return <span key={type.type.name} className="badge rounded-pill bg-danger">{`${type.type.name}`}</span>
                    })}
                </div>
                <div className="d-flex justify-content-center flex-wrap">

                <div className="card mt-3 w-100" style={{maxWidth: '50rem'}}>
                <h3 className="card-header">About</h3>
                    <div className="card-body row">
                        <div className="col">
                            <p>Height: <span className="badge rounded-pill bg-danger">{height}</span></p>
                            <p>Weight: <span className="badge rounded-pill bg-danger">{weight}</span></p>
                            <p>Order: <span className="badge rounded-pill bg-danger">{order}</span></p>
                        </div>
                        <div className="col">
                            <h4>Abilities</h4>
                            {
                                abilities.map(ability=>{
                                    return <span key={ability.ability.name} className="badge rounded-pill bg-danger">{`${ability.ability.name}`}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="card mt-3 w-100"  style={{maxWidth: '50rem'}}>
                <h3 className="card-header">Moves</h3>
                    <div className="card-body">
                        {
                            moves.map(move =>{
                                return <span key={move.move.name} className="badge rounded-pill bg-danger">{`${move.move.name}`}</span>
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
    )
}

export default PokemonItem
