import React from "react";

export default function Invite() {
    return (
        <div className="invite center-align" id="invite">
            <p className="small-text">
                CON GIOIA, INSIEME ALLE NOSTRE FAMIGLIE, VI INVITIAMO A
                FESTEGGIARE UNO DEI GIORNI PIÙ IMPORTANTI DELLE NOSTRE VITE.
            </p>
            <p className="invite-date uppercase bold-font">
                sabato 23 maggio 2023
            </p>
            <img
                className="leaves"
                src={require("../assets/images/leaves.png")}
            />
            <p className="medium-text">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
            </p>
        </div>
    );
}
