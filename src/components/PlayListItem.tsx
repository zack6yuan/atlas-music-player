import { useState, useEffect, useRef } from 'react';
import SongTitle from './SongTitle';

export default function PlayListItem() {
    // const [loading, isLoading] = useState(true);

    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const fourthRef = useRef<HTMLDivElement>(null);
    const fifthRef = useRef<HTMLDivElement>(null);
    const sixthRef = useRef<HTMLDivElement>(null);
    const seventhRef = useRef<HTMLDivElement>(null);
    const eighthRef = useRef<HTMLDivElement>(null);
    const ninthRef = useRef<HTMLDivElement>(null);
    const tenthRef = useRef<HTMLDivElement>(null);
    

    const SelectChangeOne = () => {
        if (firstRef.current) {
            firstRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeTwo = () => {
        if (secondRef.current) {
            secondRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeThree = () => {
        if (thirdRef.current) {
            thirdRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeFour = () => {
        if (fourthRef.current) {
            fourthRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeFive = () => {
        if (fifthRef.current) {
            fifthRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeSix = () => {
        if (sixthRef.current) {
            sixthRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeSeven = () => {
        if (seventhRef.current) {
            seventhRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeEight = () => {
        if (eighthRef.current) {
            eighthRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeNine = () => {
        if (ninthRef.current) {
            ninthRef.current.style.backgroundColor = '#c9c9c9'
        }
    }
    const SelectChangeTen = () => {
        if (tenthRef.current) {
            tenthRef.current.style.backgroundColor = '#c9c9c9'
        }
    }

    return (
    <div className="">
      <h1 className="sm:mt-6 sm:ml-5 bg-white">Playlist</h1>
      <div className="md:-mt-8 sm:-mt-6">
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer"  ref={ firstRef } onClick={SelectChangeOne} >
          <div className="font-medium sm:mt-8">
            <p className="desc-text">PAINTED IN BLUE</p>
            <p className="text-crimson text-sm desc-text italic">Soul Canvas</p>
          </div>
          <div className="sm:mt-11 sm:mr-1 sm:ml-auto xl:mt-16 xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">05:55</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ secondRef } onClick={SelectChangeTwo}>
          <div className="font-medium">
            <p className="desc-text">TIDAL DRIFT</p>
            <p className="text-crimson text-sm desc-text italic">Echoes of the Sea</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">08:02</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ thirdRef } onClick={ SelectChangeThree }>
          <div className="font-medium">
            <p className="text-base desc-text">FACING SHADOWS</p>
            <p className="text-crimson text-sm desc-text italic">The Emberlight</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">03:01</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ fourthRef } onClick={ SelectChangeFour }>
          <div className="font-medium">
            <p className="text-base desc-text">COSMIC DRIFT</p>
            <p className="text-crimson text-sm desc-text italic">Solar Flare</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">05:01</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ fifthRef } onClick={ SelectChangeFive }>
          <div className="font-medium">
            <p className="text-base desc-text">URBAN SERANADE</p>
            <p className="text-crimson text-sm desc-text italic">Midnight Groove</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">04:54</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ sixthRef } onClick={ SelectChangeSix }>
          <div className="font-medium">
            <p className="text-base desc-text">WHISPERS IN THE WIND</p>
            <p className="text-crimson text-sm desc-text italic">Rust & Ruin</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">06:13</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ seventhRef } onClick={ SelectChangeSeven }>
          <div className="font-medium">
            <p className="text-base desc-text">ELECTRIC FEVER</p>
            <p className="text-crimson text-sm desc-text italic">Neon Jungle</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">08:41</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ eighthRef } onClick={ SelectChangeEight }>
          <div className="font-medium">
            <p className="text-base desc-text">ELECTRIC WILDFLOWER</p>
            <p className="text-crimson text-sm desc-text italic">Velvet Ember</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">02:27</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mr-9 sm:ml-5 cursor-pointer" ref={ ninthRef } onClick={ SelectChangeNine }>
          <div className="font-medium">
            <p className="text-base desc-text">GOLDEN HAZE</p>
            <p className="text-crimson desc-text italic">Velvet Waves</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">03:15</p>
          </div>
        </div>
        <div className="flex rounded sm:mt-1 sm:mb-5 sm:mr-9 sm:ml-5 cursor-pointer" ref={ tenthRef } onClick={ SelectChangeTen }>
          <div className="font-medium">
            <p className="text-base desc-text">SHATTER THE SILENCE</p>
            <p className="text-crimson text-sm desc-text italic">Thunderclap Echo</p>
          </div>
          <div className="sm:mt-3 sm:mr-1 sm:ml-auto xl:mr-40 2xl:mr-70">
            <p className="text-gray song-length font-medium">08:22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
