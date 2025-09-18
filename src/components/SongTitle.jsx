import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function SongTItle() {
    return (
        <div className="song-title 2xl:ml-80 2xl:-mt-130">
            <h1 class="text-2xl font-bold">Painted In Blue</h1>
            <p class="text-slate-500 font-normal mt-2">Soul Canvas</p>
            <div className="play 2xl:mt-6">
                <PlayControls />
            </div>
            <div className="volume 2xl:mt-6 2xl:-ml-3">
                <VolumeControls />
            </div>
        </div>
    )
}