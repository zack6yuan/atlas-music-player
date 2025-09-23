import volume from "../assets/volume.svg";

export default function VolumeControls() {
    return (
        <div className="volume-controls flex">
            <img src={ volume } alt="volume-icon" className="mx-3 "/>
            <input type="range" min="0" max="100" className="accent-crimson 2xl:w-90 xl:w-96 lg:w-90 md:w-67 sm:w-122"/>
        </div>
    )
}