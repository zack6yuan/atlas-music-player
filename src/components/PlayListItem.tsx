import { useState, useEffect, useRef } from "react";
import SongTitle from "./SongTitle";

export default function PlayListItem({
  changeFirstText,
  changeSecondText,
  changeThirdText,
  changeFourthText,
  changeFifthText,
  changeSixthText,
  changeSeventhText,
  changeEighthText,
  changeNinthText,
  changeTenthText,
  changeFirstArtist
}) {
  const [color, setColor] = useState("white");

  const handleText = () => {
    changeFirstText();
  }

  const playlistURL = "api/v1/playlist"; // playlist URL

  const songs = [
    {
      title: "Painted in Blue",
      artist: "Soul Canvas",
      length: "05:55",
    },
    {
      title: "Tidal Drift",
      artist: "Echoes of the Sea",
      length: "08:02",
    },
    {
      title: "Facing Shadows",
      artist: "The Emberlight",
      length: "03:01",
    },
    {
      title: "Cosmic Drift",
      artist: "Solar Flare",
      length: "05:01",
    },
    {
      title: "Urban Seranade",
      artist: "Midnight Groove",
      length: "04:54",
    },
    {
      title: "Whispers in the Wind",
      artist: "Rust & Ruin",
      length: "06:13",
    },
    {
      title: "Electric Fever",
      artist: "Neon Jungle",
      length: "08:41",
    },
    {
      title: "Electric Wildflower",
      artist: "Velvet Ember",
      length: "02:27",
    },
    {
      title: "Golden Haze",
      artist: "Velvet Waves",
      length: "03:15",
    },
    {
      title: "Shatter the Silence",
      artist: "Thunderclap Echo",
      length: "08:22",
    },
  ];

  return (
    <div className="">
      <h1 className="bg-white sm:mt-6 sm:ml-5">Playlist</h1>
      <div className="sm:-mt-6 md:-mt-8">
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          onClick={ changeFirstText }
        >
          <div className="font-medium sm:mt-8 2xl:mt-13">
            <p className="desc-text uppercase">{songs[0].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[0].artist}
            </p>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[0].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeSecondText}
        >
          <div className="font-medium">
            <p className="desc-text uppercase">{songs[1].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[1].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[1].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeThirdText}
        >
          <div className="font-medium">
            <p className="desc-text uppercase">{songs[2].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[2].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[2].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeFourthText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[3].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[3].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[3].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeFifthText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[4].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[4].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[4].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeSixthText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[5].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[5].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[5].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeSeventhText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[6].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[6].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[6].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeEighthText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[7].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[7].artist}
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[7].length}
            </p>
          </div>
        </div>
        <div
          className="song-div flex cursor-pointer rounded sm:mt-1 sm:mr-9 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeNinthText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[8].title}</p>
            <p className="text-crimson desc-text italic">{songs[8].artist}</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[8].length}
            </p>
          </div>
        </div>
        <div
          className="rousong-div nded flex cursor-pointer sm:mt-1 sm:mr-9 sm:mb-5 sm:ml-5"
          style={{ backgroundColor: color }}
          onClick={changeTenthText}
        >
          <div className="font-medium">
            <p className="desc-text text-base uppercase">{songs[9].title}</p>
            <p className="text-crimson desc-text text-sm italic">
              {songs[9].artist}o
            </p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-110">
            <p className="text-gray song-length font-medium">
              {songs[9].length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
