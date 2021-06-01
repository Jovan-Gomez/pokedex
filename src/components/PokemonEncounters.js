import React from 'react'
import {firstCharUpperCase} from '../constants/firstCharUpperCase';

const PokemonEncounters = ({encountersData, pokemonData}) => {
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonData?.id}.png`;
    
    return (
            <div className="card-body">
                <h2 className="card-title">{pokemonData?.name ? firstCharUpperCase(pokemonData.name) : 'Loading...'}</h2>
                <p>#{pokemonData?.id}</p>
                <img className="card-img-top" src={fullImageUrl} alt={pokemonData?.name}/>
                <h4 className="card-header">Encounters</h4>
                {
                    Object.entries(encountersData).length ? 
                    Object.entries(encountersData).map((encounter, index) =>{
                        let str = encounter[1]?.name;
                        let searchArea = str.indexOf('-area')
                        let firstGuion = str.indexOf('-');
                        let secondGuion = str.lastIndexOf('-', searchArea);
                        let area = str.slice(firstGuion + 1, secondGuion)
                        let region = str.slice(0, firstGuion);
                        return <div className="d-flex justify-content-evenly" key={index}>
                            <p>Region: <span className="badge rounded-pill bg-danger">{region}</span></p>
                            <p>Area: <span className="badge rounded-pill bg-danger">{area}</span></p>
                        </div>
                    })
                    :
                    <h2>Encounters not Found</h2>
                }
            </div> 
    )
}
  
export default PokemonEncounters
