import React, {Component} from 'react';
import Barinfo from './Barinfo';
import Cookies from 'universal-cookie';
import {Image,Col} from 'react-bootstrap';
import diagnostico from './../Imagenes/Diagnostico.png';
import './../index.css'

const cookies = new Cookies();
let problemas= (cookies.get('problemas'));

class Recomendaciones extends Component {

   componentDidMount(){
       this.mostrar();
   }
    
     mostrar(){
        for(let i=0; i<problemas.length; i++){
            switch (problemas.charAt(i)){
                case "1":
                    document.getElementById("case1").style.display = "block";
                break;
                case "2":
                    document.getElementById('case2').style.display = "block";
                break;
                case "3":
                    document.getElementById('case4').style.display = "block";
                break;
                case "4":
                    document.getElementById('case3').style.display = "block";
                case "5":
                    document.getElementById('case3').style.display = "block";
                break;
                case "6":
                    document.getElementById('case4').style.display = "block";
                break;
                case "7":
                    document.getElementById('case6').style.display = "block";
                break;
                case "8":
                    document.getElementById('case5').style.display = "block";
                break;
            }
        }}
    
         Agendar(){
            window.location.href='./Agendar';
        }
        render(){
        return (
            <div>
                <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
                <div className="text-center"><h3>Recomendaciones</h3></div>
                    <p className="text-center">Estas son algunas recomendaciones para los problemas que seleccionó pero para una mayor y mejor asesoria <a variant="primary" className="display-4 text-info " type="submit" onClick={()=>this.Agendar()}>Agenda una cita</a></p>
                    <div className="text-center">
                        <Image src={diagnostico} rounded id="diagnostico"/>
                    </div>
                <div id="case1" className="ver" >
                    <h4  className="alert text-info titulo">Documentos Perdidos</h4>
                    <div className="alert text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li >Contar siempre con dos o más copias de un mismo archivo.</li>
                                <li >Guarda tus documentos en diferentes lugares.</li>
                            </ul>
                        </strong>
                    </div>                
                </div>
                <div id="case2"  className="ver">
                <h4  className="alert text-info titulo">Reconocimiento</h4>
                    <div className="alert text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li >Crea y comparte contenido dirigido a cubrir sus necesidades.</li>
                                <li >Ve a donde están tus clientes.</li>
                                <li >Al comunicarte con tus clientes usa una voz auténtica y personal.</li>
                                <li>Interactúa con tus clientes.</li>
                            </ul>
                        </strong>
                    </div> 
                </div>
                <div id="case3"  className="ver">
                <h4  className="alert text-info titulo">Página Web</h4>
                    <div className="alert text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li >Tener una página web nos brinda credibilidad ante los clientes potenciales.</li>
                                <li >Ayuda a ser visibles en los buscadores por ende tendrás más clientes.</li>
                                <li >Contar con contenido que resulte relevante. </li>
                                <li>Incluye los datos de la empresa.</li>
                            </ul>
                        </strong>
                    </div> 
                </div>
                <div id="case4"  className="ver" >
                    <h4 className="alert text-info titulo ">Marketing Digital</h4>
                    <div className="alert text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li >Conoce tu público objetivo.</li>
                                <li >Has un estudio de mercado.</li>
                                <li >Conoce tu competencia.</li>
                                <li >Promueve tu empresa a través de redes sociales.</li> 
                            </ul>
                        </strong>
                    </div>                
                </div>
                <div id="case5"  className="ver" >
                    <h4 className="alert text-info titulo ">Optimizar Procesos</h4>
                    <div className="alert text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li >Conoce tu Empresa a fondo.</li>
                                <li >Potencia el Talento de tu Equipo de Colaboradores.</li>
                                <li >Define cuáles Procesos urgen ser Optimizados.</li>
                                <li >Mejora la Comunicación.</li> 
                                <li >Fortalece tu Área de Finanzas.</li>
                            </ul>
                        </strong>
                    </div>                
                </div>
                <div id="case6"  className="ver" >
                <h4  className=" text-info titulo">Software</h4>
                    <div className=" text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li ><a className="text-dark" href="https://and.co/">And.Co</a></li>
                                <li ><a className="text-dark" href="https://www.alegra.com/colombia/">Alegra</a></li>
                                <li ><a className="text-dark" href="https://and.co/">And.Co</a></li>
                                <li ><a className="text-dark" href="https://www.pipedrive.com/es">Pipedrive</a></li>
                                <li ><a className="text-dark" href="https://www.paypal.com/co/home">PayPal</a></li>
                            </ul>
                        </strong>
                    </div> 
                </div>
            </div>
        )
    }
    
}

export default Recomendaciones;