import React from "react";
import { ReactComponent as HeartIcon } from "../assets/images/heart-icon.svg";

export default function Spouses({ spousesNames }) {
    return (
        <div className="spouses center-align center-div" id="spouses">
            <div className="spouses-photo"></div>
            <div className="spouses-container">
                <div className="spouses-names-container bold-font uppercase center-div">
                    <p className="medium-text">
                        {spousesNames.firstSpouse.firstName}{" "}
                        {spousesNames.firstSpouse.lastName}
                    </p>
                    <HeartIcon className="heart-svg" />
                    <p className="medium-text">
                        {spousesNames.secondSpouse.firstName}{" "}
                        {spousesNames.secondSpouse.lastName}
                    </p>
                </div>
                <p className="small-text">
                    “Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus.”
                </p>
            </div>
            <img
                className="sunflowers"
                src={require("../assets/images/sunflowers.png")}
            />
        </div>
    );
}
