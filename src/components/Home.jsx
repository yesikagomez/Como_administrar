import React from 'react';
import Navegacion from './BarNav';
import imagen from './../Imagenes/Verificacion.jpg';
import {Image} from 'react-bootstrap';
import './../index.css';

function Home(){
    return (
        <div>
            <Navegacion/>
            <h1 className="mt-1" >Bienvenidos</h1>
            <div className="mt-0"> 
              <div className="alert text-info float-left">
                <strong>
                  Es importante contar con copias de seguridad.
                </strong>
              </div>
              <div className="alert text-info float-left">
                <strong>
                  Es indispensable tener un sistema contable.
                </strong>
              </div>
              <div className="alert text-info float-left">
                  <strong className="">
                      Aprenda a delegar.
                  </strong>
              </div>
              <div className="text-center">
                 <Image src={imagen} rounded id="imagen" id="verificacion"/>
              </div>
              <div className="alert text-info float-left">
                <strong className="text-right">
                  Recuerde la importancia de fidelizar a los clientes.
                </strong>
              </div>
              <div className="alert text-info float-right">
                <strong className="text-right">
                  una buena opción es ampliar la cobertura geográfica.
                </strong>
              </div>
            </div>
             <footer className="mb-2">Imagen de <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1040248">Pixabay</a></footer>
        </div>
    );
}

export default Home;