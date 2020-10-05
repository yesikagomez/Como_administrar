import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './../App.css';
import Cookies from 'universal-cookie';
import Barinfo from './Barinfo';

const cookies = new Cookies();

class Diagnostico extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombrecliente', {path: "/"});
        cookies.remove('nombreempresa', {path: "/"});
        cookies.remove('numempleados', {path: "/"});
        cookies.remove('annoslaborando', {path: "/"});
        cookies.remove('correo', {path: "/"});
        window.location.href='./';
    }

   /* componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }*/
    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('nombrecliente: '+ cookies.get('nombrecliente'));
        console.log('nombreempresa: '+ cookies.get('nombreempresa'));
        console.log('numempleados: '+ cookies.get('numempleados'));
        console.log('annoslaborando: '+ cookies.get('annoslaborando'));
        console.log('correo: '+cookies.get('correo'));
        alert(cookies.get('nombrecliente'));
    return(
        <div>
            <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
            <a variant="primary" type="submit" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</a>
            <h2>Test Diagnóstico</h2>
            <h4>Seleccione uno o varios problemas que considere que tiene.</h4>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Pérdida de documentos"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Poco reconocimiento"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de comercialización"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de una página web"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Página web obsoleta"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de marketing digital"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de conocimiento en los software necesarios"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de conocimiento en cómo manejar los procesos"/>
            </div>
            <Button variant="primary" type="submit">
                    Aceptar
            </Button>
        </div>
    );
}
}

export default Diagnostico;