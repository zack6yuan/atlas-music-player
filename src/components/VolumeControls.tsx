import volumeIcon from "../assets/volume.svg";
import { useState } from 'react';

export default function VolumeControls() {
    const [volume, setVolume] = useState(50);

    return (
        <div className="volume-controls flex">
            <img src={ volumeIcon } alt="volume-icon" className="mx-3 "/>
            <input type="range" min="0" max="100" className="accent-crimson 2xl:w-90 xl:w-96 lg:w-90 md:w-67 sm:w-122"/>
        </div>
    )
}