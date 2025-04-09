import React from "react";

export default function Menù() {
    return (
        <div className="menù" id="menù">
            <div className="menù-container">
                <h1 className="big-text">Menù</h1>
                <img
                    className="flower"
                    src={require("../assets/images/flower.png")}
                />
                <p className="small-text">
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                </p>
                <button className="menù-btn">SCARICA IL MENÙ</button>
                <img
                    className="leaves-background"
                    src={require("../assets/images/leaves-background.png")}
                />
            </div>
        </div>
    );
}
