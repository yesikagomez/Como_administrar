import React from 'react';
import { Button,Form } from 'react-bootstrap';
import './../App.css'

function Registro () {
    return(
        <div>
            <h2>Registrese</h2>
            <Form>
                <Form.Group controlId="formBasicNombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre completo"/>
                </Form.Group>
                <Form.Group controlId="formBasicNombreEmpresa">
                    <Form.Label>Nombre Empresa</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de su empresa"/>
                </Form.Group>
                <Form.Group controlId="formBasicNumEmpleados">
                    <Form.Label>Número de empleados</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese número de empleados" />
                </Form.Group>
                <Form.Group controlId="formBasicAnnosLAborando">
                    <Form.Label>Años Laborando</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese cuantos años lleva en funcionamiento la empresa" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo electronico" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group controlId="formBasicConPassword">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirme contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Registro;
