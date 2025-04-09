import React from "react";

export default function Reception() {
    return (
        <div className="reception" id="reception">
            <div className="reception-container">
                <img
                    className="leaves-background"
                    src={require("../assets/images/leaves-background.png")}
                />
                <h1 className="big-text">Ricevimento</h1>
                <img
                    className="flower-long"
                    src={require("../assets/images/flower-long.png")}
                />
                <p className="small-text">
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                    <br />
                    <br /> Sed dignissim, metus nec fringilla accumsan, risus
                    sem sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
            </div>
        </div>
    );
}
