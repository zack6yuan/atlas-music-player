import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayListItem from "./PlayListItem";
import { useState } from "react";

export default function MusicPlayer( {prevImage, setPrevImage, firstSongClick, secondSongClick, playlistSongs, startSong} ) {
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

  const firstTitle = items[0].title;
  const secondTitle = items[1].title;
  const thirdTitle = items[2].title;
  const fourthTitle = items[3].title;
  const fifthTitle = items[4].title;
  const sixthTitle = items[5].title;
  const seventhTitle = items[6].title;
  const eighthTitle = items[7].title;
  const ninthTitle = items[8].title;
  const tenthTitle = items[9].title;

  const firstArtist = items[0].artist;
  const secondArtist = items[1].artist;
  const thirdArtist = items[2].artist;
  const fourthArtist = items[3].artist;
  const fifthArtist = items[4].artist;
  const sixthArtist = items[5].artist;
  const seventhArtist = items[6].artist;
  const eighthArtist = items[7].artist;
  const ninthArtist = items[8].artist;
  const tenthArtist = items[9].artist;

  const firstCover = items[0].cover;
  const secondCover = items[1].cover;
  const thirdCover = items[2].cover;
  const fourthCover = items[3].cover;
  const fifthCover = items[4].cover;
  const sixthCover = items[5].cover;
  const seventhCover = items[6].cover;
  const eighthCover = items[7].cover;
  const ninthCover = items[8].cover;
  const tenthCover = items[9].cover;

  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8 md:flex-row 2xl:ml-71 2xl:-mr-6">
      {/* Currently playing components */}
      <div className="border-crimson rounded border-2 md:mb-120 md:w-1/2 lg:mb-90 lg:ml-9 xl:ml-40 xl:w-[450px] 2xl:w-[450px]">
        <CoverArt cover={cover}/>
        <SongTitle text={text} artist={artist} prevImage={prevImage} setPrevImage={setPrevImage} startSong={startSong}/>
      </div>
      {/* Playlist component */}
      <div className="border-crimson rounded border-2 md:mb-120 md:w-1/2 lg:mr-9 lg:mb-90 xl:mr-40 xl:w-[450px] 2xl:mr-120 2xl:w-[450px]">
        <PlayListItem
        playlistSongs={playlistSongs}
          changeFirstSong={() => {
            setText(firstTitle);
            setArtist(firstArtist);
            setCover(firstCover);
            firstSongClick();
          }}
          changeSecondSong={() => {
            setText(secondTitle);
            setArtist(secondArtist);
            setCover(secondCover);
            secondSongClick();
          }}
          changeThirdSong={() => {
            setText(thirdTitle);
            setArtist(thirdArtist);
            setCover(thirdCover);
          }}
          changeFourthSong={() => {
            setText(fourthTitle);
            setArtist(fourthArtist);
            setCover(fourthCover);
          }}
          changeFifthSong={() => {
            setText(fifthTitle);
            setArtist(fifthArtist);
            setCover(fifthCover);
          }}
          changeSixthSong={() => {
            setText(sixthTitle);
            setArtist(sixthArtist);
            setCover(sixthCover);
          }}
          changeSeventhSong={() => {
            setText(seventhTitle);
            setArtist(seventhArtist);
            setCover(seventhCover);
          }}
          changeEighthSong={() => {
            setText(eighthTitle);
            setArtist(eighthArtist);
            setCover(eighthCover);
          }}
          changeNinthSong={() => {
            setText(ninthTitle);
            setArtist(ninthArtist);
            setCover(ninthCover);
          }}
          changeTenthSong={() => {
            setText(tenthTitle);
            setArtist(tenthArtist);
            setCover(tenthCover);
          }}
        />
      </div>
    </div>
  );
}
