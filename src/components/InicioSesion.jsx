import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';
import Navegacion from './BarNav';
import axios from 'axios';
import Cookies from 'universal-cookie';

const url="https://api-poskdjxg1.vercel.app/cliente";
const cookie = new Cookies();
let dato;
class Inicio extends Component {
    state={
        form:{
            correo:'',
            contrasenna:''
        }
    }

    handlechange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        alert("hola");
        await fetch.get("https://api-poskdjxg1.vercel.app/cliente", {params: {correo: this.state.form.correo,contrasenna: this.state.form.contrasenna}})
        .then(response=>{
            var dato= response.data;
            alert(dato);
            return dato;
        })
        .then(response=>{
            if(response.lenght > 0){
                var respuesta = response[0];
                cookie.set('id', respuesta.id, {path: "/"});
                cookie.set('nombrecliente', respuesta.nombrecliente, {path:'/'});
                cookie.set('nombreempresa', respuesta.nombreempresa, {path: "/"});
                cookie.set('numempleados', respuesta.numempleados, {path:'/'});
                cookie.set('annoslaborando', respuesta.annoslaborando, {path: "/"});
                cookie.set('correo', respuesta.correo, {path:'/'});
                window.location.href="./Diagnostico";
                alert(2);
            }else{
                alert("El usuario o la contraseña no son correctos");
            }
        })
        .catch(error=>{
            console.log(error);
        })
        
    }

     /*dato =async()=>{
        let respuesta = await fetch.get('https://api-poskdjxg1.vercel.app/cliente', {params: {correo: this.state.form.correo,contrasenna: this.state.form.contrasenna}})
        .then(response=>{
        let cliente = respuesta.json()
        alert("respuesta");
        if (respuesta.status === 201) {
            window.location.href="./Diagnostico";
        }else{
            alert("error");
        }
        })
        .catch(error=>{
            console.log(error);
            alert("hola");
        })*/
        //window.location.href="./Diagnostico";
        
    //}

    render(){
    return(
        <div>
            <Navegacion/>
            <Form>
                <h3>Inicio de Sesión</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ingrese Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Correo" name="correo" onChange={this.handlechange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Ingrese Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese Contraseña" name="contrasenna" onChange={this.handlechange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recuperar Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Aceptar
                </Button>
            </Form>
        </div>
    );
    }
}
export default Inicio;
    