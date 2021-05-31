import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid fs-2">
                <Link to="/pokedex"><i className="bi bi-house-fill "></i></Link>
                <p className="m-0  text-white"><i className="bi bi-person-circle"></i> ¡Hi Jovan!</p>
                <Link to="/"><i className="bi bi-box-arrow-right "></i></Link>
            </div>
        </nav>
    )
}

export default NavBar
