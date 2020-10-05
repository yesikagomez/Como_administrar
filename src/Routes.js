import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Diagnostico from './components/Diagnostico';
import Registro from './components/FormularioRegistro';
import Home from './components/Home';
import Inicio from './components/InicioSesion';
import Cita from './components/Citas';

const Routes = () => {
    return(
        <Switch>
            <div>
                <Route exact path='/' component = {Home} />
                <Route exact path='/Registro' component = {Registro} />
                <Route exact path='/IniciarSesion' component = {Inicio} />
                <Route exact path='/Diagnostico' component = {Diagnostico} />
                <Route exact path='/Citas' component = {Cita} />
            </div>        
        </Switch>
    ) 
}

export default Routes;