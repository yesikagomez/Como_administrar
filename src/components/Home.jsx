import React from 'react';
import Navegacion from './BarNav';

function Home(){
    return (
        <div>
            <Navegacion/>
            <h1 className="m-3" >Bienvenidos</h1>
            <div className="alert alert-success">
              <strong>
                  Las copias de seguridad son una acción de mantenimiento imprescindible a realizar por cualquier profesional o usuario para salvaguardar sus datos. 
                  Un equipo informático puede fallar en cualquier momento. 
              </strong>
            </div>
            <div className="alert alert-success">
              <strong>
                Un sistema contable se convierte en el mejor aliado del empresario porque a través de sus reportes financieros y operativos le permite conocer en todo momento sus resultados y la situación financiera en un periodo dado, así podrá controlar bien sus cuentas por cobrar, las fechas de vencimiento de sus facturas a clientes y sus compromisos de pago.     
              </strong>
            </div>
            <div className="alert alert-success">
              <strong>
                    Aprende a delegar las tareas operativas que consumen mucho tiempo y le agregan poco valor al negocio. Por eso es importante que identifiques a tus empleados que tienen la capacidad de manejar esas responsabilidades diarias, ya sea operativas o administrativas. 
                    Ellos apreciarán la confianza y la oportunidad de crecer personal y profesionalmente, y tú tendrás libertad para concentrarte en cosas más importantes para el negocio.
              </strong>
            </div>
            <div className="alert alert-success">
              <strong>
                    Lleva una agenda: Esto te permitirá organizarte mejor y tener claridad sobre el uso de tu tiempo, el cual es muy valioso.  
                    Una agenda organizada también te generará clientes más satisfechos porque siempre estarás organizado para atenderlos puntualmente.
              </strong>
            </div>
            <div className="alert alert-success">
              <strong>
                    Ampliar la cobertura geográfica del negocio con las mismas líneas de productos o servicios (Más puntos de venta o sucursales)
                    Ampliar las líneas de negocio, manteniendo la cobertura geográfica (Más productos o servicios, mismo local).    
              </strong>
            </div>         
        </div>
    );
}

export default Home;