import React from "react";

export default function Form() {

    function submitForm() {};

    function listarPeriodos() {
        let periodos = [];
        for (let i = 1; i < 11; i++) {
            periodos.push(<option value={i}>{i}° período</option>);
        };
        return periodos;
    };

    return (
        <section className="form">
            <form onSubmit={submitForm} encType="multipart/form-data">
                <input type="text" placeholder="Título" />
                <input type="text" placeholder="Assunto" />
                <input type="text" placeholder="Professor" />

                <div>
                    <select name="Curso" id="">
                        <option value="" disabled selected>Curso</option>
                        <option value="CC">CC</option>
                        <option value="EC">EC</option>
                        <option value="SI">SI</option>
                    </select>

                    <select name="Disciplina" id="">
                        <option value="" disabled selected>Disciplina</option>
                        <option value="CC">IF668</option>
                        <option value="EC">IF669</option>
                        <option value="SI">IF670</option>
                    </select>

                    <select name="Período" id="">
                        <option value="" disabled selected>Período</option>
                        <option value="CC">Eletiva</option>
                        {listarPeriodos()}
                    </select>
                </div>
            </form>
        </section>
    );
};