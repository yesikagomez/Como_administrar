import React from 'react'
import Datos from './Datos'

function Cita ({ aleatorio}) {
    let cita= aleatorio.quote;
    let autor = aleatorio.author;
    let twitter = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + cita + '" ' + autor);
    console.log(twitter);
    return(
        <div>
            <Datos cita={cita} autor={autor} tw={twitter}/>
        </div> 
    )
}

export default Cita;