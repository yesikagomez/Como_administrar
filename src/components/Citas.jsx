import React from 'react';
import { Table } from 'react-bootstrap';

function Cita () {
    return(
        <div>
            <h3>Citas Agendadas</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
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

                        
    export default Cita;