import { useState } from 'react';

import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";
import shuffleClicked from "../assets/shuffle-clicked.svg";

export default function PlayControls( {prevImage, startSong}) {
  const [image, setImage] = useState(shuffle);
  const [playing, setPlaying] = useState(play);
  const [speed, setSpeed] = useState("1x");

  const changeImage = () => {
    if (image === shuffle) {
      setImage(shuffleClicked);
    } else {
      setImage(shuffle);
    }
  };

  const setPlay = () => {
    if (playing === pause) {
        setPlaying(play);
        startSong();
    } else {
        setPlaying(pause);
    }
  }

  const setSongSpeed = ()  => {
    if (speed === "1x") {
        setSpeed("2x");
    } else if (speed === "2x") {
        setSpeed("0.5x");
    } else if (speed === "0.5x") {
        setSpeed("1x");
    }
  }

  return (
    <div className="play-controls flex sm:gap-22 md:gap-8 lg:gap-14 lg:ml-2 lg:-mt-4 xl:gap-14.5 2xl:gap-14.5">
      <p onClick={ setSongSpeed } className="cursor-pointer select-none sm:mt-5 w-3 desc-text">{ speed }</p>
      <img src={ prevImage } alt="previous-icon" className="cursor-pointer" />
      <img src={ playing } alt="play-icon" className="rounded-lg border-3 p-4 cursor-pointer w-15 h-15" onClick={ setPlay }/>
      <img src={ next } alt="next-icon" className="cursor-pointer" />
      <img src={ image } alt="shuffle-icon" className="cursor-pointer" onClick={ changeImage }/>
    </div>
  );
}
