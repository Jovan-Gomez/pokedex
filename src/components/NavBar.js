import React from 'react'
import { useHistory} from 'react-router-dom';
import {useAuth} from '../Provider/AuthProvider'
const NavBar = () => {
    const {user, signOut} = useAuth();
    const history = useHistory()
    const exit = ()=>{
        signOut(()=>{
            history.push('/')
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid fs-2">
                <button className="btn btn-success" onClick={()=>history.push('/pokedex')}><i className="bi bi-house-fill "></i></button>
                <p className="m-0  text-white"><i className="bi bi-person-circle"></i> ¡Hi {user}!</p>
                <button className="btn btn-danger"><i className="bi bi-box-arrow-right" onClick={()=>exit()}></i></button>
            </div>
        </nav>
    )
}

export default NavBar
