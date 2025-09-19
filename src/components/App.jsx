import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

/*
Tailwind Breakpoints
    sm --> 640px and up
    md --> 768px and up
    lg --> 1024px and up
    xl --> 1280px and up
    2xl --> 1536px and up
*/

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <div className="shadow-md">
        <CoverArt />
        <SongTitle />
      </div>
      <div className="shadow-md">
        <PlayListItem />
      </div>
      <Footer />
    </div>
  );
}

export default App;
