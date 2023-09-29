import React from "react";

import fileIcon from "../assets/file.png";
import trash from "../assets/trash.png";

export default function ChosenFiles(props) {
    function handleFileDelete(e) {
        const id = e.target.parentNode.parentNode.id;
        const newFiles = [...props.files];
        newFiles.splice(id, 1);
        props.attFiles(newFiles);
    };

    function displayFiles() {
        let index = -1;
        return props.files.map((file) => {
            index++;
            return (
                <div className="file" id={index}>
                    <div className="left-side">
                        <img src={fileIcon} alt="ícone de arquivo" />
                        <div>
                            <div>{file.name}</div>
                            <div>{parseInt(file.size / 1024)} KB</div>
                        </div>
                    </div>
                    <button onClick={handleFileDelete}><img src={trash} alt="icon de delete" /></button>
                </div>
            );
        });
    };

    return (
        <div className="files-exhibit"> {displayFiles()} </div>
    );
};