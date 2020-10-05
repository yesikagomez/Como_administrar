import React from 'react';
import Navegacion from './BarNav';

function Home(){
    return (
        <div>
            <Navegacion/>
            <h1>Bienvenidos</h1>
            <div className="alert alert-success">
              <strong>Success!</strong> You should <a href="#" className="alert-link">read this message</a>.
            </div>
        </div>
    );
}

export default Home;