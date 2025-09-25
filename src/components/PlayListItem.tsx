import { useState, useEffect, useRef } from "react";
import SongTitle from "./SongTitle";
import MusicPlayer from "./MusicPlayer";

export default function PlayListItem({
    changeFirstSong,
    changeSecondSong,
    changeThirdSong,
    changeFourthSong,
    changeFifthSong,
    changeSixthSong,
    changeSeventhSong,
    changeEighthSong,
    changeNinthSong,
    changeTenthSong,
    playlistSongs,
}) {
  const [color, setColor] = useState("white");

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
     <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-5 sm:mr-9 sm:ml-5"
        >
          <div className="font-medium sm:mt-8 xl:mt-11">
            <p className="desc-text uppercase">Playlist</p>
          </div>
        </div>
      <div className="sm:-mt-6 md:-mt-8 lg:-mt-5 xl:-mt-10">
      <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-5 sm:mr-9 sm:ml-5"
          onClick={ changeFirstSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[0].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[0].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[0].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeSecondSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[1].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[1].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[1].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeThirdSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[2].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[2].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[2].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeFourthSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[3].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[3].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[3].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeFifthSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[4].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[4].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[4].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeSixthSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[5].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[5].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[5].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeSeventhSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[6].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[6].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[6].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeEighthSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[7].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[7].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[7].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 xl:-mt-13"
          onClick={ changeNinthSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[8].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[8].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[8].length}
            </p>
          </div>
        </div>
        <div
          id="0"
          className="song-div flex cursor-pointer rounded sm:-mt-7 sm:mr-9 sm:ml-5 sm:mb-5 xl:-mt-13"
          onClick={ changeTenthSong }
        >
          <div className="font-medium sm:mt-8 xl:mt-14">
            <p className="desc-text uppercase">{songs[9].title}</p>
            <div className="">
              <p className="text-crimson desc-text text-sm italic">
                {songs[9].artist}
              </p>
            </div>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-2">
            <p className="text-gray song-length font-medium">
              {songs[9].length}
            </p>
          </div>
        </div>
       </div>
       </div>
  );
}
