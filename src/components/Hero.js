import React from "react";

export default function Hero({ spousesNames }) {
    return (
        <div className="hero center-align center-div" id="hero">
            <h1 className="uppercase">
                {spousesNames.firstSpouse.firstName}
                <br /> <span> & </span>
                {spousesNames.secondSpouse.firstName}
            </h1>
            <p className="medium-text hero-text">
                ti invitano a celebrare il loro matrimonio il 20.05.2023 alle
                ore 17:30
            </p>
            <button className="hero-btn">RISPONDI</button>
            <div className="hero-background"></div>
        </div>
    );
}
