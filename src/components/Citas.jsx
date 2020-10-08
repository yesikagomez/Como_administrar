import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Barinfo from './Barinfo';
import axios from 'axios';
import Cookies from 'universal-cookie';

const url="https://api-poskdjxg1.vercel.app/citas";

class Cita extends Component {
    state={
        data:[]
    }

    componentDidMount() {
        this.peticionGet();
      }

    peticionGet=()=>{
        axios.get(url).then(response=>{
          this.setState({data: response.data});
        }).catch(error=>{
          console.log(error.message);
        })
        }

    render(){
    return(
        <div>
            <Barinfo nombrecliente={"administrador"}/>
            <h3 className="m-3">Citas Agendadas</h3>
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
                {this.state.data.map(citas=>{
                    return(
                        <tr>
                        <td>{citas.id}</td>
                        <td>{citas.nombrecliente}</td>
                        <td>{citas.nombreempresa}</td>
                        <td>{citas.fecha}</td>
                        <t>{citas.hora}</t>
                        <td>
                            <button><i class="fas fa-trash-alt"></i></button>
                            <button><span><i class="fas fa-edit"></i></span></button>
                        </td>
                        </tr>
                     )
                })}
                </tbody>
            </Table>
        </div>
    );
}
}
                        
    export default Cita;