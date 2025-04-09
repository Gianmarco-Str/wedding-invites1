import React, { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../assets/images/hamburger-menù.svg";

export default function NavbarMobile() {
    const [windowOpen, setWindowOpen] = useState(false);

    function toggleWindowOpen() {
        setWindowOpen((prevState) => !prevState);
    }

    return (
        <div className="navbar-mobile">
            <h1>M&S</h1>
            <div
                onClick={toggleWindowOpen}
                className="hamburger-icon-container"
            >
                <HamburgerIcon />
            </div>

            <div className={`nav-window ${!windowOpen && "hidden"}`}>
                <div
                    onClick={toggleWindowOpen}
                    className="hamburger-icon-container"
                >
                    <HamburgerIcon />
                </div>
                <div className="nav-window-container center-div medium-text">
                    <a href="#hero" onClick={toggleWindowOpen}>
                        HOME
                    </a>
                    <div className="divider-nav-mobile" />
                    <a href="#invite" onClick={toggleWindowOpen}>
                        INVITO
                    </a>
                    <div className="divider-nav-mobile" />
                    <a href="#spouses" onClick={toggleWindowOpen}>
                        GLI SPOSI
                    </a>
                    <div className="divider-nav-mobile" />
                    <a href="#date" onClick={toggleWindowOpen}>
                        DATA
                    </a>
                    <div className="divider-nav-mobile" />
                    <a href="#reception" onClick={toggleWindowOpen}>
                        RICEVIMENTO
                    </a>
                    <div className="divider-nav-mobile" />
                    <a href="#confirmation" onClick={toggleWindowOpen}>
                        CONFERMA
                    </a>
                </div>
            </div>
        </div>
    );
}
