import React, { useState } from "react";
import Sound from 'react-sound';
import aBitofHope from '../../assets/a-bit-of-hope.mp3'

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button className='music' onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Music' : 'Stop'}</button>
            <Sound
                url={aBitofHope}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                />
        </div>
    )
}

export default PlaySound