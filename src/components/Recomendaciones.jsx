import React, {Component,useState} from 'react';
import Barinfo from './Barinfo';
import Cookies from 'universal-cookie';
import {Image,Col} from 'react-bootstrap';
import imagen from './../Imagenes/MarketingDigital.jpg';
import diagnostico from './../Imagenes/Diagnostico.png';
import './../index.css'

const cookies = new Cookies();

const Recomendaciones = () =>{
    
    //alert(cookies.get('problemas'));
    const [show, setShow] = useState(true);
    const [problemas, setProblemas] = useState(cookies.get('problemas'));
    
        for(let i=0; i<problemas.length; i++){
            switch (problemas.charAt(i)){
                case "1":
                    
                //document.getElementById('case1').style ='display:active'; 
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
            }
        }
    
        function Agendar(){
            window.location.href='./Agendar';
        }
        return (
            <div>
                <Barinfo nombrecliente={cookies.get('nombrecliente')}/>
                <a variant="primary" type="submit" onClick={()=>Agendar()}>Agenda una cita</a>
                <div className="text-center"><h3>Recomendaciones</h3></div>
                    <p className="text-center">Estas son algunas recomendaciones para los problemas que seleccionó pero para una mayor y mejor asesoria <a variant="primary" className="display-4 text-info " type="submit" onClick={()=>Agendar()}>Agenda una cita</a></p>
                    <div className="text-center">
                        <Image src={diagnostico} rounded id="diagnostico"/>
                    </div>
                <div id="case1">
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
                <div id="case2">
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
                <div id="case3">
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
                <div id="case4" >
                    <h4 className="alert text-info titulo ">Marketing Digital</h4>
                    <div className="alert text-dark float-left">
                        <strong>
                            <ul className="text-dark float-left">
                                <li >Conocé tu público objetivo.</li>
                                <li >Has un estudio de mercado.</li>
                                <li >Conocé tu competencia.</li>
                                <li >Promueve tu empresa a través de redes sociales.</li> 
                            </ul>
                        </strong>
                    </div>                
                </div>
                <div id="case5">
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

export default Recomendaciones;