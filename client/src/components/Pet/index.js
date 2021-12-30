import React from "react";
import Calm from '../../assets/alt-calm.gif'
import './style.css'

function Pet() {
    return (
        <div className="wrapper">
            <img src={Calm} className="tomodachi" alt="This will display an animated GIF" />
        </div>
    )
}

export default Pet