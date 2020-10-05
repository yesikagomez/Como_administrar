import React, {Component} from 'react';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import Inicio from './components/InicioSesion';

class App extends React.Component {
  render() {
    return(
      <Routes/>
    )
  }
}

export default App;