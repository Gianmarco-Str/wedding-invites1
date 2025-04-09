import React from "react";

export default function Date() {
    return (
        <div className="date center-div" id="date">
            <div className="date-container center-div">
                <div className="timer-container center-div">
                    <div className="timer">
                        <h3 className="light-font medium-text">00</h3>
                        <p className="light-font">SETT</p>
                    </div>
                    <div className="divider" />
                    <div className="timer">
                        <h3 className="light-font medium-text">00</h3>
                        <p className="light-font">GIORNI</p>
                    </div>
                    <div className="divider" />
                    <div className="timer">
                        <h3 className="light-font medium-text">00</h3>
                        <p className="light-font">ORE</p>
                    </div>
                </div>
                <div className="date-text center-align">
                    <p className="small-text">Il nostro giorno speciale</p>
                    <p className="bold-font">20.05.2023</p>
                </div>

                <button className="date-btn">RISPONDI</button>
            </div>
        </div>
    );
}
