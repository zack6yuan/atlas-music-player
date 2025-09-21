import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";
import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import PlayListItem from "./PlayListItem.tsx";

/*
Tailwind Breakpoints
    sm --> 640px and up
    md --> 768px and up
    lg --> 1024px and up
    xl --> 1280px and up
    2xl --> 1536px and up
*/
// still need to do dark mode
function App() {
  return (
    <div className="bg-white">
      <div className="h-full flex flex-col justify-between p-8 min-h-screen md:flex-row deeporange">
        <MusicPlayer />
        <div className="shadow-sm shadow-blue md:w-1/2 md:mb-50">
          <CoverArt />
          <SongTitle />
        </div>
        <div className="shadow-sm shadow-blue md:w-1/2 md:mb-50">
          <PlayListItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
