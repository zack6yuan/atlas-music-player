import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls.tsx";

type titleProps = {
    text: string;
    artist: string;
}

export default function SongTitle({ text, artist, prevImage, setPrevImage, togglePlaying }: titleProps) {
    return (
        <div className="song-title 2xl:ml-121 2xl:-mt-75 xl:mt-15 xl:ml-6 lg:mt-2 lg:ml-6 md:mt-1 md:mb-6 md:ml-6 sm:mb-6 sm:ml-6">
            <h1 className="text-2xl font-bold">{text}</h1>
            <p className="font-normal mt-2 text-crimson desc-text">{artist}</p>
            <div className="play 2xl:mt-6 xl:mt-6 xl:ml-0 lg:ml-2 lg:mt-6 md:ml-5 md:mt-5 sm:mt-5 sm:ml-4">
                <PlayControls prevImage={[prevImage]} togglePlaying={togglePlaying} />
            </div>
            <div className="volume 2xl:mt-6 2xl:-ml-3 xl:mt-3 xl:-ml-3 xl:mr-6 lg:mt-6 lg:-ml-3 md:mt-5 md:-ml-3 sm:mt-6 sm:-ml-2">
                <VolumeControls />
            </div>
        </div>
    )
}