import React from "react";
import Calm from '../../assets/calm.gif'
import Rainfall from "../../assets/flood.gif";
import Fires from '../../assets/fires.gif';
import Tornado from '../../assets/tornado.gif'
import './style.css'

function Pet(props) {

    const renderAnimation = () => {
        switch (props.animation) {
        case 'rainfall':
            console.log('cool rainfall animation');
            setTimeout(() => { props.changeAnimation('calm') }, 2000)
            return Rainfall;
        case 'sunlight':
            console.log('cool sunlight animation');
            setTimeout(() => { props.changeAnimation('calm') }, 2000)
            break
        case 'volcanoes':
            console.log('cool volcanoes animation');
            setTimeout(() => { props.changeAnimation('calm') }, 2000)
            return Fires;
        case 'wind':
            console.log('cool wind animation');
            setTimeout(() => { props.changeAnimation('calm') }, 2000)
            return Tornado;
        default:
            console.log('cool calm animation')
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