import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Content from './components/content/content.js';
import NavbarResp from './components/Navbar/NavbarResp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Licenciaturas from './components/Licenciaturas/Licenciaturas.js';

function App() {
  
  
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Content/>
      <Licenciaturas/>

        
      
    
    </div>
    
    
  );
}

export default App; 
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
