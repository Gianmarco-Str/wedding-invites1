import React from "react";

export default function Confirmation() {
    return (
        <div className="confirmation" id="confirmation">
            <div className="confirmation-container">
                <div className="confirmation-title">
                    <img
                        className="flower-small"
                        src={require("../assets/images/flower-small.png")}
                    />
                    <h1>Rispondi all’invito</h1>
                </div>

                <form>
                    <div className="text-input-container">
                        <div className="text-input">
                            <label htmlFor="fname">Nome</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <div className="text-input">
                            <label htmlFor="lname">Cognome</label>
                            <input type="text" id="lname" name="lname" />
                        </div>
                    </div>

                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" id="phone" name="phone" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Messaggio</label>
                    <textarea id="message" name="message"></textarea>
                    <br />

                    <button className="send-btn">SEND</button>
                </form>
            </div>
        </div>
    );
}
