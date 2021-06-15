
import './Licenciaturas.css';
import psicologia from './shutterstock_1205892295.jpg'
import administracion from './admin.jpg'
import comunicacion from './comunicacion.jpg'
import diseño from './diseño.jpg'
import criminologia from './criminologia.jpg'
import derecho from './dereco.jpg'
import arqui from './arqui.jpg'
import fisio from './fisio.jpg'
import nutricion from './nutri.jpg'



import React ,{Component} from 'react';  


class Licenciaturas extends Component{ 
    state={clicked:false}

    render(){
        return(  
        <div className="content-lic" >
            <li className="titulo-div">
                <ul>
                    <p className="titulo-lic">Licenciaturas </p>  
                </ul>
                <ul>
                    <button onClick={event =>  window.location.href=''} className="btn-req"> Requisitos </button>
                       
                </ul>
                
                

            </li>
            <div  className="content-lic">
                <li className="licenciaturas">
                    <ul>
                        <div className="container-img-lic">
                            <img className="crop" src={psicologia} alt="psicologia"/>
                        </div>

                    </ul>
                    <ul className="container-text">
                        <p className="titulo-lic2"> Psicología</p>
                        <p className="text">La Licenciatura en Psicología pretende que el alumno: Conozca y comprenda la personalidad y el comportamiento humano mediante el contraste de las diferentes teorías que explican los fenómenos psicológicos.</p>
                        <button onClick={event =>  window.location.href=''}className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text">RVOE: <br/> 730/2012</p>
                    </ul>
                </li>
                <li className="licenciaturas">
                     
                    <ul className="container-text">
                        <p className="titulo-lic2"> Administración <br/>Gestión Empresarial</p>
                        <p className="text">Proporcionar al estudiante una sólida base de conocimientos, competencias, habilidades y experiencias en el área empresarial y administrativa que les permita al momento de su incorporación en el mercado laboral, aportar soluciones y tomar las decisiones más acertadas referentes al marco financiero administrativo de la organización.</p>
                        <button onClick={event =>  window.location.href=''} className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text" >RVOE: <br/> 803/2013</p>
                    </ul>
                    <ul>
                        <div className="container-img-lic">
                            <img className="crop" src={administracion} alt="administracion"/>
                        </div>

                    </ul>
                </li>
                <li className="licenciaturas">
                    <ul>
                        <div className="container-img-lic">
                            <img className="comunicacion" src={comunicacion} alt="comunicacion"/>
                        </div>

                    </ul>
                    <ul className="container-text">
                        <p className="titulo-lic2"> Ciencias y Técnicas <br/>de la Comunicación</p>
                        <p className="text">El aspirante a ingresar a esta licenciatura deberá contar con sólidos conocimientos gramaticales, capacidad persuasiva, facilidad de palabra, juicio e iniciativa propia; interés para desarrollar habilidades en seleccionar, organizar y evaluar información sobre los acontecimientos sociales, interés por la lectura y análisis de los medios de comunicación; interés por describir, explicar y predecir en forma lógica y organizada los fenómenos de la comunicación.</p>
                        <button onClick={event =>  window.location.href=''} className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text">RVOE: <br/> En trámite</p>
                    </ul>
                </li>
                <li className="licenciaturas">
                     
                    <ul className="container-text">
                        <p className="titulo-lic2"> Diseño Multimedia</p>
                        <p className="text">Al término de sus estudios de la carrera de Diseño Gráfico  el egresado será capaz de analizar en forma sistemática un problema de diseño logrando proponer alternativas de solución viables, considerando aspectos teóricos y metodológicos, así como elementos que conforman todo un proceso de comunicación apoyándose en un software especializado.</p>
                        <button onClick={event =>  window.location.href=''}className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text" >RVOE: <br/> En trámite</p>
                    </ul>
                    <ul>
                        <div className="container-img-lic">
                            <img className="comunicacion" src={diseño} alt="diseño"/>
                        </div>

                    </ul>
                </li>
                <li className="licenciaturas">
                    <ul>
                        <div className="container-img-lic">
                            <img className="comunicacion" src={criminologia} alt="criminologia"/>
                        </div>

                    </ul>
                    <ul className="container-text">
                        <p className="titulo-lic2"> Criminología</p>
                        <p className="text">Licenciados en Criminología que cuenten con los conocimientos en los métodos y técnicas que le posibiliten el estudio, análisis e investigación de las conductas antisociales, con el propósito de actuar en las áreas de prevención, identificación y tratamiento de dichas conductas.</p>
                        <button onClick={event =>  window.location.href=''} className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text">RVOE: <br/> 690</p>
                    </ul>
                </li>
                <li className="licenciaturas">
                     
                    <ul className="container-text">
                        <p className="titulo-lic2"> Derecho</p>
                        <p className="text">Formar integralmente profesionales del derecho en los aspectos técnicos y humanos que, comprometidos con la realidad nacional, sean capaces de distinguir y promover el desarrollo y seguridad de la sociedad en un ambiente de paz, libertad y justicia. Con capacidad para el análisis del problema jurídico la interpretación de la norma y la imparcialidad en el ejercicio profesional.</p>
                        <button onClick={event =>  window.location.href=''}className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text" >RVOE: <br/> 686</p>
                    </ul>
                    <ul>
                        <div className="container-img-lic">
                            <img className="comunicacion" src={derecho} alt="derecho"/>
                        </div>

                    </ul>
                </li>
                <li className="licenciaturas">
                    <ul>
                        <div className="container-img-lic">
                            <img className="crop" src={arqui} alt="arquitectura"/>
                        </div>

                    </ul>
                    <ul className="container-text">
                        <p className="titulo-lic2"> Arquitectura</p>
                        <p className="text">Formar profesionales con la capacidad de desarrollar proyectos específicos arquitectónicos, urbanísticos así como ejecutar y llevar la dirección técnica con base a un conocimiento real de su entorno, evaluando el impacto social, el papel que juega en beneficio de su comunidad, potenciando el desarrollo económico, cultural, artístico, turístico, urbano, etcétera.</p>
                        <button onClick={event =>  window.location.href=''} className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text">RVOE: <br/> 688</p>
                    </ul>
                </li>
                <li className="licenciaturas">
                     
                    <ul className="container-text">
                        <p className="titulo-lic2"> Fisioterapia</p>
                        <p className="text">Formar profesionales en Fisioterapia con una sólida base académica y la capacidad de sustentar, establecer e intervenir en cualquier tratamiento fisioterapéutico con el fin de disminuir las limitantes físicas que puedan afectar a nuestra sociedad y aumentar la independencia de la misma mediante la rehabilitación.</p>
                        <button onClick={event =>  window.location.href=''} className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text" >RVOE: <br/> 806/2014</p>
                    </ul>
                    <ul>
                        <div className="container-img-lic">
                            <img className="fisio" src={fisio} alt="fisioterapia"/>
                        </div>

                    </ul>
                </li>
                <li className="licenciaturas">
                    <ul>
                        <div className="container-img-lic">
                            <img className="nutri" src={nutricion} alt="nutricion"/>
                        </div>

                    </ul>
                    <ul className="container-text">
                        <p className="titulo-lic2"> Nutrición</p>
                        <p className="text">Profesionistas con dominio de: la atención en nutriología, de las bases científicas de la nutriología, con disposición y capacidad para la investigación y la superación profesional en nutriología, con dominio de la ética profesional y para asesorar y formar cuerpos ejecutivos y profesionales en nutriología, con sensibilidad para la atención comunitaria y para involucrarse en la solución de problemáticas de salud en el estado y la nación.</p>
                        <button onClick={event =>  window.location.href=''}className="btn-plan"> Ver Plan de Estudio </button>
                        <p className="text">RVOE: <br/> 728/2012</p>
                    </ul>
                </li>
                
            </div>
            
            
           

      
        </div>
      
           
                
        )};
}
export default Licenciaturas;