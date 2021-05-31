import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import PokeCard from '../components/PokeCard'
import {mookData} from '../mookData'
import { useHistory } from "react-router-dom";
import axios from 'axios';
const Pokedex = () => {
    const [pokemonData] = useState(mookData);
    let history = useHistory();

    useEffect(()=>{
        
    }, [])
    return (
          <>
           <NavBar />
            <div className="container">
            <section className="row justify-content-center m-1">
                <div className="card mt-4" style={{maxWidth: '30rem'}}>
                    <div className="card-body">
                            <h3 className="card-title text-center">Pokemon</h3>
                            <p className="card-text text-center">Search your favorite Pokemon</p>
                            <form>
                                <div className="input-group">
                                <label className="input-group-text" htmlFor="name"><i className="bi bi-search"></i></label>
                                    <input className="form-control"  id="name"/>
                                </div>
                                <div className="form-text">Search by Pokemon Name</div>
                            </form>
                        </div>
                        <div className="card">
                        <div className="card-body d-flex">
                            <select className="form-select">
                                <option disabled>All Types</option>
                            </select>
                            <select className="form-select">
                                <option value={4}>4</option>
                                <option value={8}>8</option>
                                <option value={12}>12</option>
                                <option value={16}>16</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
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
                                        return <PokeCard key={pokemonId} pokemonId={pokemonId} pokemonData={pokemonData} history={history}/>
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
