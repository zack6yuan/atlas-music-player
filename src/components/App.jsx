import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";
import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import PlayListItem from "./PlayListItem.tsx";
import LoadingSkeleton from "./LoadingSkeleton.jsx";

import { useState } from 'react';

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
    const [loading, isLoading] = useState(true);

  return (
    <div>
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
