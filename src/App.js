import React, { useState, useEffect } from "react";
import "./assets/styles.css";

import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Hero from "./components/Hero";
import Invite from "./components/Invite";
import Spouses from "./components/Spouses";
import Date from "./components/Date";
import Reception from "./components/Reception";
import Menù from "./components/Menù";
import Confirmation from "./components/Confirmation";

export default function App() {
    const [spousesNames, setSpousesNames] = useState({
        firstSpouse: { firstName: "Marco", lastName: "Rossi" },
        secondSpouse: { firstName: "Silvia", lastName: "Bianchi" },
    });

    const [mobileRes, setMobileRes] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 1300) {
            setMobileRes(true);
        }
    }, []);

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 1300) {
            setMobileRes(true);
        } else {
            setMobileRes(false);
        }
    });

    return (
        <>
            {mobileRes ? <NavbarMobile /> : <Navbar />}
            <Hero spousesNames={spousesNames} />
            <Invite />
            <Spouses spousesNames={spousesNames} />
            <Date />
            <Reception />
            <Menù />
            <Confirmation />
        </>
    );
}
