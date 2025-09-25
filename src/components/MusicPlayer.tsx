import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayListItem from "./PlayListItem";
import { useState } from "react";

type playerProps = {
    prevImage: string;
    setPrevImage: () => void;
    firstSongClick: () => void;
    secondSongClick: () => void;
    playlistSongs: string;
    startSong: () => void;
    changeSpeed: () => void;
    playingStatus: boolean;
}

export default function MusicPlayer( {prevImage, setPrevImage, firstSongClick, secondSongClick, playlistSongs, startSong, changeSpeed, playingStatus}: playerProps ) {
  const items = [
    {
      title: "Painted in Blue",
      artist: "Soul Canvas",
      length: "05:55",
      cover: "https://utfs.io/f/E9fJnaKtTy1bOclGsk1hB7xMLwUVFDiXypZukQrcnYbgdEv6",
    },
    {
      title: "Tidal Drift",
      artist: "Echoes of the Sea",
      length: "08:02",
      cover: "https://utfs.io/f/E9fJnaKtTy1bgUYJxLRHtQnU93BlJCuMbwphd17cmE6AYKrq",
    },
    {
      title: "Facing Shadows",
      artist: "The Emberlight",
      length: "03:01",
      cover: "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
    },
    {
      title: "Cosmic Drift",
      artist: "Solar Flare",
      length: "05:01",
      cover: "https://utfs.io/f/E9fJnaKtTy1bC8yQiDcTqKW7UiwylQEbSP6GY0BaMDrVn4t5",
    },
    {
      title: "Urban Seranade",
      artist: "Midnight Groove",
      length: "04:54",
      cover: "https://utfs.io/f/E9fJnaKtTy1bURbS73joMSlobh6pidjcfyXRZvrWLnewCuVz",
    },
    {
      title: "Whispers in the Wind",
      artist: "Rust & Ruin",
      length: "06:13",
      cover: "https://utfs.io/f/E9fJnaKtTy1bnvBsFg9ld0pImEuojVYae3JSrFsGOciHWzq2",
    },
    {
      title: "Electric Fever",
      artist: "Neon Jungle",
      length: "08:41",
      cover: "https://utfs.io/f/E9fJnaKtTy1b0N9zurCYB1gk62ReoSDdcKnwOZbaUyqujE4p",
    },
    {
      title: "Electric Wildflower",
      artist: "Velvet Ember",
      length: "02:27",
      cover: "https://utfs.io/f/E9fJnaKtTy1bTqyt3tklYE5bPnNGfTwAxKoIdic9DgvVBmSr",
    },
    {
      title: "Golden Haze",
      artist: "Velvet Waves",
      length: "03:15",
      cover: "https://utfs.io/f/E9fJnaKtTy1bdFkaBz4G9CJywD7oVn1hRLQAuEbf8xqkt34N",
    },
    {
      title: "Shatter the Silence",
      artist: "Thunderclap Echo",
      length: "08:22",
      cover: "https://utfs.io/f/E9fJnaKtTy1bRrer7odlXJ7gkU9pOS36sIbA1vBViucmwjyN",
    },
  ];

  const [text, setText] = useState("Painted in Blue");
  const [artist, setArtist] = useState("Soul Canvas");
  const [cover, setCover] = useState(items[0].cover);

  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8 md:flex-row 2xl:ml-71 2xl:-mr-50">
      {/* Currently playing components */}
      <div className="border-crimson rounded border-2 md:mb-120 md:w-1/2 lg:mb-90 lg:ml-9 xl:ml-40 xl:w-[450px] 2xl:w-[450px]">
        <CoverArt cover={cover}/>
        <SongTitle text={text} artist={artist} prevImage={prevImage} setPrevImage={setPrevImage} startSong={startSong} changeSpeed={changeSpeed} playingStatus={playingStatus}/>
      </div>
      {/* Playlist component */}
      <div className="border-crimson rounded border-2 md:mb-120 md:w-1/2 lg:mr-9 lg:mb-90 xl:mr-40 xl:w-[450px] 2xl:mr-120 2xl:w-[450px]">
        <PlayListItem
        playlistSongs={playlistSongs}
          changeFirstSong={() => {
            setText(items[0].title);
            setArtist(items[0].artist);
            setCover(items[0].cover);
            firstSongClick();
          }}
          changeSecondSong={() => {
            setText(items[1].title);
            setArtist(items[1].artist);
            setCover(items[1].cover);
            secondSongClick();
          }}
          changeThirdSong={() => {
            setText(items[2].title);
            setArtist(items[2].artist);
            setCover(items[2].cover);
          }}
          changeFourthSong={() => {
            setText(items[3].title);
            setArtist(items[3].artist);
            setCover(items[3].cover);
          }}
          changeFifthSong={() => {
            setText(items[4].title);
            setArtist(items[4].artist);
            setCover(items[4].cover);
          }}
          changeSixthSong={() => {
            setText(items[5].title);
            setArtist(items[5].artist);
            setCover(items[5].cover);
          }}
          changeSeventhSong={() => {
            setText(items[6].title);
            setArtist(items[6].artist);
            setCover(items[6].cover);
          }}
          changeEighthSong={() => {
            setText(items[7].title);
            setArtist(items[7].artist);
            setCover(items[7].cover);
          }}
          changeNinthSong={() => {
            setText(items[8].title);
            setArtist(items[8].artist);
            setCover(items[8].cover);
          }}
          changeTenthSong={() => {
            setText(items[9].title);
            setArtist(items[9].artist);
            setCover(items[9].cover);
          }}
        />
      </div>
    </div>
  );
}
