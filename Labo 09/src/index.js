import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
    <div class="container">
        <br>
        <div class="jumbotron">
            <h1>
                Registro de laboratorio.
            </h1>

            <div class="form-group">
                <label for="carnet" class="col-sm-2 col-form-label">Ingrese el carnet: </label><br>
                <input class="form-control" type="text" name="carnet" id="carnet_field">
            </div>

            <div class="form-group">
                <label for="schedule">Seleccione el horario:</label>
                <select name="schedule" class="form-control" id="schedule_field">
                    <option>Lunes de 9:00 a 11.00</option>
                    <option>Martes de 13:30 a 15:30</option>
                    <option>Miércoles de 9:00 a 11.00</option>
                    <option>Jueves de 13:30 a 15:30</option>
                    <option>Viernes de 9:00 a 11.00</option>
                    <option>Viernes de 15:30 a 17:30</option>
                </select>
            </div>
            
            <div class="form-group">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="late_switch">
                    <label class="custom-control-label" for="late_switch">Llegó tarde?</label>
                </div>
            </div>

            <div class="form-group">
                <button type="button" class="btn btn-danger" id="submit_btn" disabled>Ingresar</button>
            </div>
        </div>

        <hr>

        <section>
            <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">Carnet</th>
                        <th scope="col">Horario de laboratorio</th>
                        <th scope="col">Hora de ingreso</th>
                        <th scope="col">Tarde?</th>
                        <th scope="col">Confirmacion</th>
                        <th scope="col">Eliminar</th>
                        
                    </tr>
                </thead>
                <tbody id="table_body">

                </tbody>
            </table>
        </section>
)