import React, { Component , useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths, setHours, setMinutes } from "date-fns";
import { Table } from 'react-bootstrap';
import es from 'date-fns/locale/es';
import Cookies from 'universal-cookie';
import Barinfo from './Barinfo';
import "bootstrap/dist/css/bootstrap.min.css";

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

     mostrarFecha = async (fecha)=>{ 
        document.getElementById('guardar').disabled = true; 
        document.getElementById('calendario').disabled = true; 
       const options ={weekday: 'long' , year: 'numeric', month: 'long', day:'numeric'};
       dia = (fecha.toLocaleDateString('es-ES', options));
       //alert(fecha.toLocaleDateString());
        hora = fecha.getHours() ;
        minutos = fecha.getMinutes();
        alert (hora,minutos);
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
       alert(dia);
       
       let cita = {
            nombrecliente: cookies.get('nombrecliente'),
            nombreempresa: cookies.get('nombreempres'),
            fecha: dia,
            hora: horas,
        };
       let respuesta = await fetch ('https://api-poskdjxg1.vercel.app/citas', { method: 'POST', body: JSON.stringify(cita), headers: { 'Content-Type': 'application/json' }})
       alert(respuesta.status);
       if (respuesta.status === 201) {
           alert("agregado");
           cookies.set('nombrecliente', cookies.get('nombrecliente'), {path:'/'});
           cookies.set('nombreempresa', cookies.get('nombreempresa'), {path: "/"});
           cookies.set('fecha', dia, {path:'/'});
           cookies.set('hora', horas, {path: "/"});
       }
    }
    render() {
        //const {form}=this.props
        return(
            <div className="container">
                <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
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
                        <button className="mr-2 btn btn-dark"><i className="fas fa-trash-alt m-2 "></i></button>
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