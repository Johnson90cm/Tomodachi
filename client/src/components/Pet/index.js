import React from "react";
import Calm from '../../assets/calm.gif'
import Rainfall from "../../assets/flood.gif";
import Volcanos from '../../assets/volcanos.gif';
import Tornado from '../../assets/tornado.gif'
import Sunlight from '../../assets/sunlight.gif'
import './style.css'

function Pet(props) {

    const renderAnimation = () => {
        switch (props.animation) {
        case 'rainfall':
            console.log('cool rainfall animation');
            setTimeout(() => { props.changeAnimation('calm') }, 5000)
            return Rainfall;
        case 'sunlight':
            console.log('cool sunlight animation');
            setTimeout(() => { props.changeAnimation('calm') }, 10000)
            return Sunlight;
        case 'volcanoes':
            console.log('cool volcanoes animation');
            setTimeout(() => { props.changeAnimation('calm') }, 5000)
            return Volcanos;
        case 'wind':
            console.log('cool wind animation');
            setTimeout(() => { props.changeAnimation('calm') }, 5000)
            return Tornado;
        default:
            console.log('cool calm animation')
            return Calm;
        }
    }

    return (
        <div>
            <img src={renderAnimation()} className="tomodachi" alt="This will display an animated GIF" />
            <span className="interaction-text">VOLCANOS ERUPT ALL OVER THE PLANET!!!</span>
        </div>
    )
}

export default Pet