import React,{useState}  from 'react';
import logoAut from './images/logo_autonoma.svg';
import logoSAC from './images/svg-pegado-419841x845.svg';
import {  Link } from "react-router-dom";


function NabvarResp(){

    //const Link = require("react-router-dom").Link;
    const[click,setClick] =useState(false);
    const handleClick=()=> setClick(!click);
    const closeMobileMenu =() => setClick(false);
    return(
        <>
            <nav className="nabvar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img className="navbar-logo-aut" src={logoAut} alt="logo"/>
                        <img className="navbar-logo" src={logoSAC} alt="logosac"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ui className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Licenciaturas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Nosostros
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Preguntas Frecuentes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>

                    </ui>

                </div>
            </nav>
        </>

    )
}

export default NabvarResp