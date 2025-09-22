import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls.tsx";

export default function SongTItle() {
    return (
        <div className="song-title 2xl:ml-70 2xl:-mt-32 xl:-mt-2 xl:ml-40 lg:-mt-5 lg:ml-15 md:mt-1 md:mb-6 md:ml-5 sm:mb-6 sm:ml-6">
            <h1 className="text-2xl font-bold text-green">Painted in Blue</h1>
            <p className="font-normal mt-2 text-lightgreen">Soul Canvas</p>
            <div className="play 2xl:mt-6 xl:mt-6 xl:ml-3 lg:ml-2 lg:mt-6 md:ml-5 md:mt-5 sm:mt-5 sm:ml-4">
                <PlayControls />
            </div>
            <div className="volume 2xl:mt-6 2xl:-ml-3 xl:mt-6 xl:-ml-3 lg:mt-6 lg:-ml-3 md:mt-5 md:-ml-3 sm:mt-6 sm:-ml-2">
                <VolumeControls />
            </div>
        </div>
    )
}