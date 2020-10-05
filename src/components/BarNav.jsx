import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
class Navegacion extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" >  
                <Navbar.Brand href="/">Administrando</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/Registro">Registrarse</Nav.Link>
                        <Nav.Link href="/IniciarSesion">Inicar Sección</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        )
    }
};
export default Navegacion;