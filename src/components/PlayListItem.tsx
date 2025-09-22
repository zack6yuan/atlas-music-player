// import { useEffect, useState } from 'react';

export default function PlayListItem() {
    /* 
    const [song, setSong] = useState({})

    useEffect(() => {
        fetch("../api/v1/playlist")
            .then((response) =>{
                const data = response.json();
                return data;
            })
            .then((data) => {
                setSong(data)
            });
    }, [])
    */

  return (
    <div className="bg-white">
      <div className="flex sm:mt-5 sm:ml-5">
        <div className="font-medium">
          <h1 className="text-lg sm:mb-4 font-bold xl:mt-2">Playlist</h1>
          <p className="">Painted in Blue</p>
          <p className="text-sm text-blue">Soul Canvas</p>
        </div>
        <div className="sm:mt-13 sm:ml-auto sm:mr-10 xl:mr-40 xl:mt-16 2xl:mr-70">
          <p className="text-navy font-medium song-length">5<span className="colon">:</span>55</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Tidal Drift</p>
          <p className="text-sm text-blue">Echoes of the Sea</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">8<span className="colon">:</span>02</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Facing Shadows</p>
          <p className="text-sm text-blue">The Emberlight</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">3<span className="colon">:</span>01</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Cosmic Drift</p>
          <p className="text-sm text-blue">Solar Flare</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">5<span className="colon">:</span>01</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Urban Seranade</p>
          <p className="text-sm text-blue">Midnight Groove</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">4<span className="colon">:</span>54</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Whispers in the Wind</p>
          <p className="text-sm text-blue">Rust <span className="colon">&</span> Ruin</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">6<span className="colon">:</span>13</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Electric Fever</p>
          <p className="text-sm text-blue">Neon Jungle</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">8<span className="colon">:</span>41</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Edge of the Abyss</p>
          <p className="text-sm text-blue">Steel Horizon</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">2<span className="colon">:</span>27</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Golden Haze</p>
          <p className="text-blue">Velvet Waves</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">3<span className="colon">:</span>15</p>
        </div>
      </div>
      <div className="flex sm:mt-1 sm:mb-5 sm:ml-5">
        <div className="font-medium">
          <p className="text-base">Shatter the Silence</p>
          <p className="text-sm text-blue">Thunderclap Echo</p>
        </div>
        <div className="sm:mt-3 sm:ml-auto sm:mr-10 xl:mr-40 2xl:mr-70">
          <p className="text-navy font-medium song-length">8<span className="colon">:</span>22</p>
        </div>
      </div>
    </div>
  );
}
