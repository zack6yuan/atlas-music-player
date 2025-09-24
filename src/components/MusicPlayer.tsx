import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayListItem from "./PlayListItem";
import { useState } from 'react';

export default function MusicPlayer() {
    const [text, setText] = useState('No Song Selected')
    const [artist, setArtist] = useState('No Artist')

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

    const firstTitle = songs[0].title;
    const secondTitle = songs[1].title;
    const thirdTitle = songs[2].title;
    const fourthTitle = songs[3].title;
    const fifthTitle = songs[4].title;
    const sixthTitle = songs[5].title;
    const seventhTitle = songs[6].title;
    const eighthTitle = songs[7].title;
    const ninthTitle = songs[8].title;
    const tenthTitle = songs[9].title;

    const firstArtist = songs[0].artist;
    const secondArtist = songs[1].artist;
    const thirdArtist = songs[2].artist;
    const fourthArtist = songs[3].artist;
    const fifthArtist = songs[4].artist;
    const sixthArtist= songs[5].artist;
    const seventhArtist = songs[6].artist;
    const eighthArtist = songs[7].artist;
    const ninthArtist = songs[8].artist;
    const tenthArtist = songs[9].artist;

    

  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8 md:flex-row">
      {/* Currently playing components */}
      <div className="border-crimson rounded border-2 md:mb-120 md:w-1/2 lg:mb-90">
        <CoverArt />
        <SongTitle text={text}/>
      </div>
      {/* Playlist component */}
      <div className="border-crimson rounded border-2 md:mb-120 md:w-1/2 lg:mb-90">
        <PlayListItem changeFirstText={() => { setText(firstTitle); setArtist(firstArtist) }}
                                changeSecondText={() => { setText(secondTitle); setArtist(secondArtist) }}
                                changeThirdText={() => setText(thirdTitle)}
                                changeFourthText={() => setText(fourthTitle)}
                                changeFifthText={() => setText(fifthTitle)}
                                changeSixthText={() => setText(sixthTitle)}
                                changeSeventhText={() => setText(seventhTitle)}
                                changeEighthText={() => setText(eighthTitle)}
                                changeNinthText={() => setText(ninthTitle)}
                                changeTenthText={() => setText(tenthTitle)}
                                changeFirstArtist={() => setText(firstArtist)}
        />
      </div>
    </div>
  );
}
