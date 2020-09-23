import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Diagnostico from './components/Diagnostico';
import Registro from './components/FormularioRegistro';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/Diagnostico' component = {Diagnostico} />
            <Route exact path='/' component = {Registro} />
        </Switch>
    ) 
}

export default Routes;