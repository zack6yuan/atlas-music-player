import { useEffect } from 'react';
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
    useEffect(() => {
        fetch('/api/v1/songs')
        .then(response => {
            return response.json
        })
    }, [])
    const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8 md:flex-row">
        {/* Currently playing components */}
      <div className="border-gray rounded border-2 md:mb-120 md:w-1/2 lg:mb-90">
        <CoverArt />
        <SongTitle />
      </div>
      {/* Playlist component */}
      <div className="border-gray rounded border-2 md:mb-120 md:w-1/2 lg:mb-90">
        <PlayListItem />
      </div>
    </div>
  );
}
