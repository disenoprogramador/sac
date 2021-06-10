
import React, {Component}from 'react';
import './Licenciaturas.css';

function Licenciaturas (){

    state={clicked:false}
    
    return (
      <div className="content-lic" >
          <p className="titulo">Licenciaturas </p>  
          <button onClick ={this.handleClick} className="btn-req">Requisitos</button>

        
      </div>
        
    );
  }



 
export default Licenciaturas;
