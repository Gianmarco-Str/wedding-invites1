import React from "react";

export default function Navbar() {
    return (
        <div className="navbar center-div">
            <div className="navbar-container">
                <div className="navbar-left-section center-div .light-font">
                    <a href="#hero">HOME</a>
                    <div className="divider-navbar" />
                    <a href="#invite">INVITO</a>
                    <div className="divider-navbar" />
                    <a href="#spouses">GLI SPOSI</a>
                </div>
                <h1>M&S</h1>
                <div className="navbar-right-section center-div .light-font">
                    <a href="#date">DATA</a>
                    <div className="divider-navbar" />
                    <a href="#reception">RICEVIMENTO</a>
                    <div className="divider-navbar" />
                    <a href="#confirmation">CONFERMA</a>
                </div>
            </div>
        </div>
    );
}
