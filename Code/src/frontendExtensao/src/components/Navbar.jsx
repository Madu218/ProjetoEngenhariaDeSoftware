import React from "react";

import logo from "../assets/cin.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="nav-buttons">
                <button>
                    <span class="material-symbols-outlined">search</span>
                </button>

                <button>
                    <div>Adicionar Material</div>
                    <span class="material-symbols-outlined">add</span>
                </button>
            </div>
        </nav>
    );
};