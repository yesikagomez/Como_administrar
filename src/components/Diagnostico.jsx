import React from 'react';
import { Button } from 'react-bootstrap';
import './../App.css';

function Diagnostico () {
    return(
        <div>
            <h2>Test Diagnostico</h2>
            <h4>Selecione uno o varios problemas que considere que tiene.</h4>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Perdida de documentos"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled" value="Poco reconocimiento"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" readonly="readonly" disabled="disabled"/>
            </div>
            <Button variant="primary" type="submit">
                    Submit
                </Button>
        </div>
    );
}

export default Diagnostico;