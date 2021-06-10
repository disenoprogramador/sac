import React ,{Component} from 'react';  
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import logoAut from './images/logo_autonoma.svg';
import logoSAC from './images/svg-pegado-419841x845.svg';


class Navbar extends Component{
    state={clicked:false}

    render(){
        return( 
            <nav className="NavbarItems">
                
                <img className="navbar-logo-aut" src={logoAut} alt="logo"/>
                <img className="navbar-logo" src={logoSAC} alt="logosac"/>
                
                <ul className="nav-menu">
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}> 
                                 <a className={item.cName} href={item.url}>
                                     {item.title}
                                 </a>
                                
                            </li>
                        )
                    })}
                        
                </ul>
                <button onClick ={this.handleClick} className="btn-misC"> Mis clases </button>
                <button onClick ={this.handleClick} className="btn-Reg">Registro</button>
            </nav>
        )
    }
}
export default Navbar;