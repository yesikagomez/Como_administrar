import React, { Component , useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths, setHours, setMinutes } from "date-fns";
import { Table } from 'react-bootstrap';
import es from 'date-fns/locale/es';
import Cookies from 'universal-cookie';
import Barinfo from './Barinfo';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const url="https://api-poskdjxg1.vercel.app/citas";

const cookies = new Cookies();
let hora,minutos,horas,dia;

registerLocale("es", es);

class Calendario extends Component {
    state = {
      fecha: new Date()
    }

    onChange=fecha=>{
        this.setState({fecha: fecha});
      }

    cerrarSesion(){
        cookies.remove('id', {path: "/"});
        cookies.remove('nombrecliente', {path: "/"});
        cookies.remove('nombreempresa', {path: "/"});
        cookies.remove('numempleados', {path: "/"});
        cookies.remove('annoslaborando', {path: "/"});
        cookies.remove('correo', {path: "/"});
        cookies.remove('fecha', {path:'/'});
        cookies.remove('hora', {path: "/"});
        cookies.remove('problemas', {path: "/"});
        window.location.href='./';
    }
     mostrarFecha = async (fecha)=>{ 
        document.getElementById('guardar').disabled = true; 
        document.getElementById('calendario').disabled = true; 
       const options ={weekday: 'long' , year: 'numeric', month: 'long', day:'numeric'};
       dia = (fecha.toLocaleDateString('es-ES', options));
        hora = fecha.getHours() ;
        minutos = fecha.getMinutes();
       if(hora > 12){
           hora = hora -12 ;
           if(hora<10){
               hora = "0"+hora;
           }
           if(minutos==0){
               minutos = "0"+minutos;
           }
           horas = hora + " : " + minutos + " PM"
       }else {
            horas = hora + " : " + minutos + " AM"
       }
       
       let cita = {
            nombrecliente: cookies.get('nombrecliente'),
            nombreempresa: cookies.get('nombreempres'),
            fecha: dia,
            hora: horas,
        };
       let respuesta = await fetch ('https://api-poskdjxg1.vercel.app/citas', { method: 'POST', body: JSON.stringify(cita), headers: { 'Content-Type': 'application/json' }})
       if (respuesta.status === 201) {
           cookies.set('nombrecliente', cookies.get('nombrecliente'), {path:'/'});
           cookies.set('nombreempresa', cookies.get('nombreempresa'), {path: "/"});
           cookies.set('fecha', dia, {path:'/'});
           cookies.set('hora', horas, {path: "/"});
           alert("Cita asignada correctamente");
       }
    }

    seleccionarcita=(citas)=>{
        this.setState({
          cita: {
            nombrecliente: citas.nombrecliente,
            nombreempresa: citas.nombreempresa,
            fecha: citas.fecha,
            hora: citas.hora
          }
        })
      }

      peticionDelete=()=>{
        axios.delete(url+"5").then(response=>{
        })
      }

    eliminarCita = async () =>{
        
    } 
    render() {
        return(
            <div className="container">
                <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
                <a variant="primary" type="submit" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</a>
                <div className="center">
                    <DatePicker 
                        id="calendario"
                        className="form-control mt-4"
                        selected={this.state.fecha}
                        onChange={this.onChange}
                        withPortal  
                        peekNextMonth 
                        showMonthDropdown 
                        showYearDropdown 
                        dropdownMode="select" 
                        showTimeSelect  
                        timeFormat="p"
                        locale="es"
                        timeIntervals={30}
                        dateFormat="dd-MMMM-yyyy h:mm aa"
                        minDate={new Date()}
                        maxDate={addMonths(new Date(), 5)}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                        placeholderText="Seleccione la fecha y la hora de su cita"
                    />
                    <input type="button" value="Aceptar" id="guardar" className="mt-2 mb-3 btn btn-primary" onClick={()=>this.mostrarFecha(this.state.fecha)}/>
                </div>
                <h3>Citas Agendadas</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Cliente</th>
                    <th>Empresa</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{cookies.get('nombrecliente')}</td>
                    <td>{cookies.get('nombreempresa')}</td>
                    <td>{cookies.get('fecha')}</td>
                    <td>{cookies.get('hora')}</td>
                    <td className="text-center">
                        <button className="mr-2 btn btn-dark" onClick={()=>this.peticionDelete()}><i className="fas fa-trash-alt m-2 "></i></button>
                        <button className="btn btn-dark"><i className="fas fa-edit m-2 ml-2"></i></button>
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
}
}
                        
    export default Calendario;