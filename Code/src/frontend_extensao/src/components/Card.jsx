import React from "react";

import profilePic from "../assets/profile.png";
import heart from "../assets/heart.png";
import fullHeart from "../assets/full-heart.png";
import download from "../assets/download.png";

export default function Card(props) {
    return (
        <div className="card">
            <div className="main-infos">
                <div className="text">
                    <h3>Título</h3>
                    <div>Professor: Kelvin</div>
                    <div>Assunto: Redes</div>
                </div>

                <img src={profilePic} alt="profile pic" />
            </div>

            <div className="tags">
                <div>SI</div>
                <div>Cod</div>
                <div>3° período</div>
            </div>
            
            <div className="card-buttons">
                <button>
                    <img src={heart} alt="" />
                </button>
                <button>
                    <img src={download} alt="" />
                </button>
            </div>
        </div>
    );
};