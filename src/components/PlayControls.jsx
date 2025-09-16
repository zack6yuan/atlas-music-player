import previous from "../assets/previous.svg"
import next from "../assets/next.svg";

export default function PlayControls() {
    return (
        <div className="play-controls">
            <img src={ previous } alt="" />
            <img src={ next } alt="" />
        </div>
    )
}