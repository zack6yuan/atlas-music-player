import volume from "../assets/volume.svg";

export default function VolumeControls() {
    return (
        <div className="volume-controls">
            <img src={ volume } alt="" />
            <input type="range" min="0" max="100"/>
        </div>
    )
}