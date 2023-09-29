import React from "react";

export default function FormInputs(props) {
    return (
        <>
            <input
                type="text"
                name="titulo"
                placeholder="Título" 
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="assunto"
                placeholder="Assunto"
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="professor"
                placeholder="Professor"
                onChange={props.handleChange}
            />
        </>
    );
};