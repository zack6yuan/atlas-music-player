import { useState, useEffect, useRef } from 'react';
import LoadingSkeleton from "./LoadingSkeleton";

export default function PlayListItem() {
    // const [color, setColor] = useState("white")
    // const [loading, isLoading] = useState(true);

    const referenceone  = useRef(null);

    /*
    useEffect(() => {
        referenceone.current.style.backgroundColor = color
    }, [color]);
    */

  return (
    <div className="">
      <h1 className="sm:mt-5 sm:ml-5">Playlist</h1>
      <div className="md:-mt-8">
        <div className="flex sm:-mt-4 sm:ml-19 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium sm:mt-9 sm:-ml-14">
            <p className="desc-text">PAINTED IN BLUE</p>
            <p className="text-crimson text-sm desc-text">Soul Canvas</p>
          </div>
          <div className="sm:mt-13 sm:mr-10 sm:ml-auto xl:mt-16 xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">5:55</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") } ref={ referenceone }>
          <div className="font-medium">
            <p className="desc-text">TIDAL DRIFT</p>
            <p className="text-crimson text-sm desc-text">Echoes of the Sea</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">8:02</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") } ref={ referenceone }>
          <div className="font-medium">
            <p className="text-base desc-text">FACING SHADOWS</p>
            <p className="text-crimson text-sm desc-text">The Emberlight</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">3:01</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">COSMIC DRIFT</p>
            <p className="text-crimson text-sm desc-text">Solar Flare</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">5:01</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">URBAN SERANADE</p>
            <p className="text-crimson text-sm desc-text">Midnight Groove</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">4:54</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">WHISPERS IN THE WIND</p>
            <p className="text-crimson text-sm desc-text">Rust & Ruin</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">6:13</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">ELECTRIC FEVER</p>
            <p className="text-crimson text-sm desc-text">Neon Jungle</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">8:41</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">ELECTRIC WILDFLOWER</p>
            <p className="text-crimson text-sm desc-text">Velvet Ember</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">2:27</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">GOLDEN HAZE</p>
            <p className="text-crimson desc-text">Velvet Waves</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">3:15</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mb-5 sm:mr-9 sm:ml-5 cursor-pointer" onClick={ () => setColor("#e2e8f0") }>
          <div className="font-medium">
            <p className="text-base desc-text">SHATTER THE SILENCE</p>
            <p className="text-crimson text-sm desc-text">Thunderclap Echo</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">8:22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
