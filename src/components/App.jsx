import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";
import { useState } from 'react';
/*
Tailwind Breakpoints
    sm --> 640px and up
    md --> 768px and up
    lg --> 1024px and up
    xl --> 1280px and up
    2xl --> 1536px and up
*/
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
