import React ,{Component} from 'react';  
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import logoAut from './images/logo_autonoma.svg';
import logoSAC from './images/svg-pegado-419841x845.svg';
import lobo from './images/lobo.png';
import whatsapp from './images/whatsapp.png';
import index from './images/index.png';


class Navbar extends Component{
     

    render(){
        return( 
            <nav className="NavbarItems">{/* aqui esta la navbar y los iconos laterales  */}
                
                 <img className="navbar-logo-aut" href='/' src={logoAut} alt="logo"/>
                <img className="navbar-logo" href='/'src={logoSAC} alt="logosac"/>
                
                <ul className="nav-menu">
                    {MenuItems.map((item,index)=>{{/*esto se conecta al arreglo de MenuItemps para tomar los nombres y los links */}
                        return(
                            <li key={index}> 
                                 <a className={item.cName} href={item.url}>
                                     {item.title}
                                 </a>
                                
                            </li>
                        )
                    })}
                        
                </ul>
                <button onClick={event =>  window.location.href=''}className="btn-misC"> Mis clases </button>
                <button onClick={event =>  window.location.href=''} className="btn-Reg">Registro</button>
                <div  className="iconos"> 
                    
                    <a href='/' >  <img className="iconos-laterales"  src={lobo} alt="lobo"/>  </a> <br/>
                    <a href='https://api.whatsapp.com/send/?phone=526181102529&text=Me+interesa+recibir+m%C3%A1s+informaci%C3%B3n+de+las+licenciaturas&app_absent=0'>  <img className="iconos-laterales" src={whatsapp} alt="whatsapp"/> </a>
                    <br/>
                    <a href='/'> <img className="iconos-laterales" src={index} alt="index"/> </a>
                    
                </div>
            </nav>
        )
    }
}
export default Navbar;