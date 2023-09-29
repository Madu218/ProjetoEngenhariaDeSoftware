import React from "react";

export default function Selects(props) {
    function listarPeriodos() {
        let periodos = [];
        for (let i = 1; i < 11; i++) {
            periodos.push(<option value={i}>{i}° Período</option>);
        };
        return periodos;
    };

    return (
        <div className="tres-marias">
            <select name="curso" id="" onChange={props.handleChange} >
                <option value="" disabled selected>Curso</option>
                <option value="CC">CC</option>
                <option value="EC">EC</option>
                <option value="SI">SI</option>
            </select>

            <select name="codigoDisciplina" id="" onChange={props.handleChange} >
                <option value="" disabled selected>Disciplina</option>
                <option value="IF668">IF668</option>
                <option value="IF669">IF669</option>
                <option value="IF670">IF670</option>
            </select>

            <select name="periodo" id="" onChange={props.handleChange} >
                <option value="" disabled selected>Período</option>
                <option value="CC">Eletiva</option>
                {listarPeriodos()}
            </select>
        </div>
    );
};