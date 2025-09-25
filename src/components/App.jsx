import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";
import { useState, useRef } from "react";
import previous from "../assets/previous.svg";
import AudioPlayer from "./AudioPlayer.tsx";
/*
Tailwind Breakpoints
    sm --> 640px and up
    md --> 768px and up
    lg --> 1024px and up
    xl --> 1280px and up
    2xl --> 1536px and up
*/
const songs = {
  one: "https://utfs.io/f/E9fJnaKtTy1bKvfYqtyF6VvYXu54caAPJNw32O1dDHjxTWfi",
  two: "https://utfs.io/f/E9fJnaKtTy1bxDKt6jBndAGL6MFkwf1TtsDQi0UbVNecIhaK",
  three: "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
  four: "https://utfs.io/f/E9fJnaKtTy1bEDZT3yKtTy1bFHV2I8QKvXPcMj7YA6raSmoz",
  five: "https://utfs.io/f/E9fJnaKtTy1bh4iP1yJ1k8sHU6JQ4fcqT2xzmG7PMZRblXeK",
  six: "https://utfs.io/f/E9fJnaKtTy1bhVXGsTJ1k8sHU6JQ4fcqT2xzmG7PMZRblXeK",
  seven: "https://utfs.io/f/E9fJnaKtTy1bs9HFkLOEKvkalbO3u8jdeqQfZwN5x9oUc0Tm",
  eight: "https://utfs.io/f/E9fJnaKtTy1be01UCgnp1sbiYG5ThPL7IJjS3RzfDXKwCA64",
  nine: "https://utfs.io/f/E9fJnaKtTy1bmzCjv0zpwv20S9ypENbiPcTQMqzK7BkZWLts",
  ten: "https://utfs.io/f/E9fJnaKtTy1bQa8yd0tqNeidokl8sthESVUOBuGK2nYw01I5",
};

function App() {
  const [prevImage, setPrevImage] = useState(previous);
  const [playing, setPlaying] = useState(false);
  const [song, setSong] = useState(songs.one);
  const [speed, setSpeed] = useState(1.0);

  const handleFirstSongClick = () => {
    setSong(songs.one);
    setPlaying(true);
  };

  const handleSecondSongClick = () => {
    setSong(songs.two);
    setPlaying(true);
  }

  const setPlayingStatus = () => {
    setPlaying(!playing)
  }

  const handleSpeedChange = () => {
    if (speed === 1.0) {
        setSpeed(2.0);
    } else if (speed === 2.0) {
        setSpeed(0.5);
    } else if (speed === 0.5) {
        setSpeed(1.0);
    }
  };

  function nextSong() {
    alert("next song");
  }
  return (
    <div>
      <MusicPlayer
        prevImage={prevImage}
        setPrevImage={setPrevImage}
        firstSongClick={handleFirstSongClick}
        secondSongClick={handleSecondSongClick}
        playlistSongs={songs}
        startSong={setPlaying}
        changeSpeed={handleSpeedChange}
        playingStatus={setPlayingStatus}
      />
      <AudioPlayer
        song={song}
        playing={playing}
        volume={50}
        speed={speed}
        onEnd={nextSong}
      />
      <Footer />
    </div>
  );
}
export default App;
