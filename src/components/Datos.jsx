import React from 'react'
import './../App.css'

function Datos (props) {
    return(
        <div id="drum-machine">
            <audio src="../Audios/Header-1.mp3">
                <input type="button" className="drum-pad" id="q" value="Q"/>
            </audio>
            <audio src="../Audios/Header-2.mp3">
                <input type="button" className="drum-pad" id="w" value="W"/>
            </audio>
            <audio src="../Audios/Header-3.mp3">
                <input type="button" className="drum-pad" id="e" value="E"/>
            </audio>
            <audio src="../Audios/Header-4_1.mp3">
                <input type="button" className="drum-pad" id="a" value="A"/>
            </audio>
            <audio src="../Audios/Header-6.mp3">
                <input type="button" className="drum-pad" id="s" value="S"/>
            </audio>
            <audio src="../Audios/Dsc_Oh.mp3">
                <input type="button" className="drum-pad" id="d" value="D"/>
            </audio>
            <audio src="../Audios/Kick_n_Hat.mp3">
                <input type="button" className="drum-pad" id="z" value="Z"/>
            </audio>
            <audio src="../Audios/RPa_KICK_1.mp3">
                <input type="button" className="drum-pad" id="x" value="X"/>
            </audio>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="Ca"></audio>
                <button  onclick="document.getElementById('HE').play()" className="drum-pad" >Play</button>
            
                <audio  src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" controls autoPlay id="HE"/>
        </div>
        
    );
}

export default Datos;