import React from "react";

import addFiles from "../assets/add-files.png";

export default function DrapAndDrop(props) {
    function handleDragOver(e) {
        e.preventDefault();
        console.log("drag over");
    };

    function handleDrop(e) {
        e.preventDefault();
        console.log("drop");

        const droppedFiles = Array.from(e.dataTransfer.files);
        props.addFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    return (
        <div className="drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
            <img src={addFiles} alt="ícone para adicionar arquivos" />
        </div>
    );
};