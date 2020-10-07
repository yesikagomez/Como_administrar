import React, {Component, useState} from 'react';
import { Button } from 'react-bootstrap';
import './../App.css';
import Cookies from 'universal-cookie';
import Barinfo from './Barinfo';

const cookies = new Cookies();
let dato = "";

const Diagnostico = () =>{
    
    const [problemas, setProblemas] = useState("");
    
   for(let i=0; i<problemas.length; i++){
        if(problemas.charAt(i)==1){
            document.getElementById('1').disabled = true; 
        }
        if(problemas.charAt(i)==2){
            document.getElementById('2').disabled = true; 
        }
        if(problemas.charAt(i)==3){
           document.getElementById('3').disabled = true; 
        }
        if(problemas.charAt(i)==4){
           document.getElementById('4').disabled = true; 
        }
        if(problemas.charAt(i)==5){
             document.getElementById('5').disabled = true; 
        }
        if(problemas.charAt(i)==6){
            document.getElementById('6').disabled = true; 
        }
        if(problemas.charAt(i)==7){
            document.getElementById('7').disabled = true; 
        }   
        if(problemas.charAt(i)==8){
             document.getElementById('8').disabled = true; 
        }

    }
    
    function Validar(){
        for(let i=0; i<problemas.length; i++){
            switch (problemas.charAt(i)){
                case "1":
                   // cookies.set('problema', document.getElementById('1'), {path:'/'});
                   // alert(cookies.get('nombrecliente'));
                break;
                case "2":
                // cookie.set('problema', values.nombrecliente, {path:'/'});
                break;
                case "3":
                    //cookie.set('problema', values.nombrecliente, {path:'/'});
                break;
                case "4":
                    //cookie.set('problema', values.nombrecliente, {path:'/'});
                break;
                case "5":
                   //cookies.set('problema', document.getElementById('5'), {path:'/'});
                break;
                case "6":
                    //cookie.set('problema', values.nombrecliente, {path:'/'});
                break;
                case "7":
                    //cookie.set('problema', values.nombrecliente, {path:'/'});
                break;
                case "8":
                    //cookie.set('problema', values.nombrecliente, {path:'/'});
                break;
                default:
                alert('Seleccione algun problema');
                break;
               // alert(cookies.get('problemas'));
            }
        }
    }

    function  cerrarSesion(){
        cookies.remove('id', {path: "/"});
        cookies.remove('nombrecliente', {path: "/"});
        cookies.remove('nombreempresa', {path: "/"});
        cookies.remove('numempleados', {path: "/"});
        cookies.remove('annoslaborando', {path: "/"});
        cookies.remove('correo', {path: "/"});
        window.location.href='./';
    }
        console.log('id: '+ cookies.get('id'));
        console.log('nombrecliente: '+ cookies.get('nombrecliente'));
        console.log('nombreempresa: '+ cookies.get('nombreempresa'));
        console.log('numempleados: '+ cookies.get('numempleados'));
        console.log('annoslaborando: '+ cookies.get('annoslaborando'));
        console.log('correo: '+cookies.get('correo'));

    return(
        <div> 
            <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
            <a variant="primary" type="submit" onClick={()=>cerrarSesion()}>Cerrar Sesión</a>
            <h2>Test Diagnóstico</h2>
            <h4>Seleccione uno o varios problemas que considere que tiene.</h4>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="1" onChange={(e)=>setProblemas(problemas + "1")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Pérdida de documentos"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="2" onChange={(e)=>setProblemas(problemas + "2")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Poco reconocimiento"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="3" onChange={(e)=>setProblemas(problemas + "3")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de comercialización"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="4" onChange={(e)=>setProblemas(problemas + "4")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de una página web"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="5" onChange={(e)=>setProblemas(problemas + "5")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Página web obsoleta"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="6" onChange={(e)=>setProblemas( problemas + "6")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de marketing digital"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="7" onChange={(e)=>setProblemas(problemas + "7")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de conocimiento en los software necesarios"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" id="8" onChange={(e)=>setProblemas(problemas + "8")}/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Falta de conocimiento en cómo manejar los procesos"/>
            </div>
            <Button variant="primary" type="submit" onClick={Validar}>
                    Aceptar
            </Button>
        </div>
    );
}

export default Diagnostico;