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

registerLocale("es", es);

const Calendario = () => {

    const [startDate, setStartDate] = useState();


    function mostrarFecha (date) {
        const options ={weekday: 'long' , year: 'numeric', month: 'long', day:'numeric'};
       // alert(date.tolocaleDateString('es-Es'),options);
    }
        return(
            <div className="container">
                <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
                <div className="center">
                    <DatePicker 
                        className="form-control mt-4"
                        selected={startDate} 
                        onChange={date => setStartDate(date)} 
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
                    <input type="button" value="Aceptar" className="mt-2 mb-3 btn btn-primary" onClick={mostrarFecha(startDate)}/>
                </div>
                <h3>Citas Agendadas</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>30 mayo</td>
                    <td>8</td>
                    <td>
                        <button><i class="fas fa-trash-alt"></i></button>
                        <button><span><i class="fas fa-edit"></i></span></button>
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
}

                        
    export default Calendario;