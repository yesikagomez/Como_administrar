import React, {Component} from 'react';
import Cita from './Cita';
import axios from 'axios';

class ListaCita extends Component {
    
    render() {
 
        // Datos que debe cargar el audio
     
        const item = [
          {
            id: 1,
            audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
            formato: 'audio/mpeg',
          }
        ];
     
        return (
     
          item.map(item => { 
     
            // Es necesario colocar una 'key' a partir de la versión de React JS 16
            // colocamos el objeto 'id: 1' en <div key={ item.id } 
     
            return  <div key={ item.id }>
                      <audio controls>
                        <source src={ item.audio } type={ item.formato } id="Ca"/>
                      </audio>
                      <button  onclick="document.getElementById('Ca').play()" className="drum-pad" >Play</button>
                    </div>
           
     
          })
     
        )
        
     
      }
}

export default ListaCita;