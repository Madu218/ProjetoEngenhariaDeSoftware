import React from "react";

import DragAndDrop from "../components/DrapAndDrop";
import Selects from "../components/Selects";
import FormInputs from "../components/FormInputs";
import ChosenFiles from "../components/ChosenFiles";


export default function Form() {
    const [files, setFiles] = React.useState([]);
    const [material, setMaterial] = React.useState({
        titulo: "",
        autor: "",
        assunto: "",
        periodo: "",
        professor: "",
        codigoDisciplina: "",
        curso: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setMaterial((prevMaterial) => ({
            ...prevMaterial,
            [name]: value,
        }));
    };

    function submitForm(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', files);
        formData.append('titulo', material.titulo);
        formData.append('autor', material.autor);
        formData.append('assunto', material.assunto);
        formData.append('periodo', material.periodo);
        formData.append('professor', material.professor);
        formData.append('codigoDisciplina', material.codigoDisciplina);
        formData.append('curso', material.curso);
        // Enviar Form
    };

    return (
        <section className="form">
            <form onSubmit={submitForm} encType="multipart/form-data">
                <div className="text-inputs">
                    <FormInputs handleChange={handleChange} />
                    <Selects handleChange={handleChange} />

                    <div className="buttons">
                        <button>Postar</button>
                        <button>Cancelar</button>
                    </div>
                </div>

                <div className="files-input">
                    <DragAndDrop addFiles={setFiles} />
                    <ChosenFiles files={files} attFiles={setFiles} />
                </div>
            </form>
        </section>
    );
};