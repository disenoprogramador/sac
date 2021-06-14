import React, { useEffect, useState } from 'react'
import sacIniciales from './logo_sac_iniciales.svg';

import './HeroSection.css'

function HeroSection() {

    const [offsetY, setOffsetY] = useState();
    const handleScroll=()=> setOffsetY(window.pageYOffset);
  
  window.addEventListener('scroll',handleScroll)

    return (
        <div className="hero-container" >
            <div className="texto-parallax" style={{top:`-${10+offsetY+0.40+'%'}`}}>
            
                <h2>Licenciaturas por</h2>
                <h1>Correspondencia</h1>
                <img className="sacIniciales" src={sacIniciales} alt="logo"/>
                <p>Beca inmediata del 50%</p>
                <h3>Registro de Validez Oficial en todas nuestras licenciaturas.</h3>
                
            
            </div>
            
            
        </div>
        
    )
}
 
export default HeroSection
