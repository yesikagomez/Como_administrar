import React from 'react';
import {Switch, Route} from 'react-router-dom';
import listacita from './components/ListaCita';

const Routes = () => {
    return(
        <switch>
            <Route path='/' component = {listacita} />
        </switch>
    ) 
}

export default Routes;