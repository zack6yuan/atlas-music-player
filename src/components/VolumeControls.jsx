import volume from "../assets/volume.svg";

export default function VolumeControls() {
    return (
        <div className="volume-controls flex">
            <img src={ volume } alt="volume-icon" class="mx-3"/>
            <input type="range" min="0" max="100"/>
        </div>
    )
}