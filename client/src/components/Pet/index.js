import React from "react";
import Calm from '../../assets/calm.gif'
import Rainfall from "../../assets/flood.gif";
import Volcanos from '../../assets/volcanos.gif';
import Tornado from '../../assets/tornado.gif'
import Sunlight from '../../assets/sunlight.gif'
import EndgameAtmo from '../../assets/wind-planet.gif'
import EndgameBio from '../../assets/overgrown-planet.gif'
import EndgameHydro from '../../assets/water-planet.gif'
import EndgameLitho from '../../assets/fire-planet.gif'
import EndgameGood from '../../assets/good-ending.gif'
import './style.css'

function Pet(props) {

    const {changeDisabled, changeAnimation, animation} = props

    const renderAnimation = () => {
        switch (animation) {
        case 'rainfall':
            changeDisabled(true)
            setTimeout(() => { changeAnimation('calm'); changeDisabled(false) }, 5000)
            return Rainfall;
        case 'sunlight':
            changeDisabled(true)
            setTimeout(() => { changeAnimation('calm'); changeDisabled(false) }, 5000)
            return Sunlight;
        case 'volcanoes':
            changeDisabled(true)
            setTimeout(() => { changeAnimation('calm'); changeDisabled(false) }, 5000)
            return Volcanos;
        case 'wind':
            changeDisabled(true)
            setTimeout(() => { changeAnimation('calm'); changeDisabled(false) }, 5000)
            return Tornado;
        case 'endgame-bio':
            return EndgameBio;
        case 'endgame-atmo':
            return EndgameAtmo;
        case 'endgame-hydro':
            return EndgameHydro;
        case 'endgame-litho':
            return EndgameLitho;
        case 'endgame-good':
            return EndgameGood;
        default:
            return Calm;
        }
    }

    return (
        <div className="wrapper">
            <img src={renderAnimation()} className="tomodachi" alt="This will display an animated GIF" />
        </div>
    )
}

export default Pet