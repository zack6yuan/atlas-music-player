import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls.tsx";
import PlayListItem from "./PlayListItem.tsx"
import MusicPlayer from "./MusicPlayer.tsx";
import { useState, useRef } from 'react';

export default function SongTitle({ clickedState }) {
    const songs = [
        {
            title: "Painted in Blue",
            artist: 'Soul Canvas',
            length: '05:55'
        },
        {
            title: "Tidal Drift",
            artist: 'Echoes of the Sea',
            length: '08:02'
        },
        {
            title: "Facing Shadows",
            artist: 'The Emberlight',
            length: '03:01'
        },
        {
            title: "Cosmic Drift",
            artist: 'Solar Flare',
            length: '05:01'
        },
        {
            title: "Urban Seranade",
            artist: 'Midnight Groove',
            length: '04:54'
        },
        {
            title: "Whispers in the Wind",
            artist: 'Rust & Ruin',
            length: '06:13'
        },
        {
            title: "Electric Fever",
            artist: 'Neon Jungle',
            length: '08:41'
        },
        {
            title: "Electric Wildflower",
            artist: 'Velvet Ember',
            length: '02:27'
        },
        {
            title: "Golden Haze",
            artist: 'Velvet Waves',
            length: '03:15'
        },
        {
            title: "Shatter the Silence",
            artist: 'Thunderclap Echo',
            length: '08:22'
        },
    ]

    const [title, setTitle] = useState("painted in blue")

    const songRef = useRef(null);
    const artistRef = useRef(null)

    return (
        <div className="song-title 2xl:ml-70 2xl:-mt-32 xl:-mt-2 xl:ml-40 lg:-mt-5 lg:ml-15 md:mt-1 md:mb-6 md:ml-6 sm:mb-6 sm:ml-6">
            <h1 className="text-2xl font-bold" ref={songRef}>{title}</h1>
            <p className="font-normal mt-2 text-crimson desc-text" ref={artistRef}>Soul Canvas</p>
            <div className="play 2xl:mt-6 xl:mt-6 xl:ml-3 lg:ml-2 lg:mt-6 md:ml-5 md:mt-5 sm:mt-5 sm:ml-4">
                <PlayControls />
            </div>
            <div className="volume 2xl:mt-6 2xl:-ml-3 xl:mt-6 xl:-ml-3 lg:mt-6 lg:-ml-3 md:mt-5 md:-ml-3 sm:mt-6 sm:-ml-2">
                <VolumeControls />
            </div>
        </div>
    )
}