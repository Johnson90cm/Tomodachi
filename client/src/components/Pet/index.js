import React from "react";
import './style.css'

// using calm.gif for reference.
import Calm from '../../assets/calm.gif'

function Pet() {
    return (
        <div className="wrapper">
            <div>
            <span>Your Planet Is Healthy!</span>
            <img src={Calm} className="tomodachi" alt="This will display an animated GIF" />
            </div>
        </div>
    )
}

export default Pet