import React, { useEffect, useState } from 'react';
import './content.css';

import abierto_flexible from './abierto_flexible-u116742-fr.jpg';
import digital_content from './digitalcontent-u115102-fr.jpg';
import avalados_SEP from './avalados_sep-u116731-fr.jpg'
import transformando from './shutterstock_1732105081.jpg'

function FadeSection(props) {{/* aqui esta la parte que hace el efecto del video  */}
    const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);


    return (
        <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>

        
        
    )
}



function Content() {{/*este es el video */}
    return (
      <div className="content" >
        <FadeSection className="video-container">
                <iframe className="video-index" src="//www.youtube.com/embed/KM6dYWNXMMs?autoplay=1&loop=0&showinfo=0&theme=dark&color=red&controls=0&modestbranding=0&start=0&fs=1&iv_load_policy=3&wmode=transparent&rel=0"> 

                </iframe>

        </FadeSection>
          
        <div className="content-2">{/*este es titulo y toda la seccion en negro  */} 
          <div className="titulo_content2"> <p >  Revoluciónate</p>  </div>
            
          
          
          
          <li className="items">
              <ul className="items-ul">
                <div className="container-imagen">
                  <img className="crop" src={abierto_flexible} alt=""/>
                </div>
                <div>
                  <h1>Programas Avalados por SEP</h1>
                  <p className="">Una de las principales fortalezas del Sistema de Autoaprendizaje por Correspondencia es la posibilidad de ofrecerte un modelo que se adapta a tu ritmo de vida, debido a la forma en que llevarás tus asignaturas, pudiendo elegir por materia tu carga académica, sin importar el espacio en que te encuentres.</p>
                
                </div>
              </ul>
              <ul>
                <div className="container-imagen">
                  <img className="crop" src={digital_content} alt=""/>
                </div>
                <div>
                  <h1>Contenidos digitales </h1>
                  <p className="parrafo">La Universidad ha trabajado la edición de un libro LBS por cada materia, el cual desarrolla de manera completa el programa académico, siendo éste, tu material principal de trabajo, ofreciéndote contenidos de excelente calidad, elaborado por nuestros propios docentes. Por lo que toda la información estará a tu disposición desde el momento en que inicies tus clases.</p>
                
              </div>
              </ul>
              <ul>
                <div className="container-imagen">
                  <img className="crop" src={avalados_SEP} alt=""/>
                </div>
                <div>
                  <h1>Programas Avalados por SEP </h1>
                  <p className="">Todas nuestras licenciaturas cuentan con el Registro de Validez Oficial, por lo que tienes el respaldo de la Universidad para obtener tu título al finalizar tus estudios.</p>
                
              </div>
              </ul>
          </li>
          
        </div>
        <div className="content-3"> {/*este es la seccion siguiente en blanco  */}

          <p >Transformando <br/> la Educación  </p>    
             
          <div className="container3-img">

             <img className="crop" src={transformando} alt=""/>

          </div>

         
        </div>
        
      </div>
        
    );
  }


 
export default Content
