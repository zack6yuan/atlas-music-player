import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayListItem from "./PlayListItem";
import { useState } from 'react';

export default function MusicPlayer() {
    const [clicked, setClicked] = useState(false);

    const updateClick = () => {
        setClicked(true);
        console.log("Clicked");
    };

  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8 md:flex-row">
      {/* Currently playing components */}
      <div className="border-gray rounded border-2 md:mb-120 md:w-1/2 lg:mb-90">
        <CoverArt />
        <SongTitle />
      </div>
      {/* Playlist component */}
      <div className="border-gray rounded border-2 md:mb-120 md:w-1/2 lg:mb-90">
        <PlayListItem clickedState={updateClick} />
      </div>
    </div>
  );
}
