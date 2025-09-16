import previous from "../assets/previous.svg"
import play from "../assets/play.svg"
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
    return (
        <div className="play-controls">
            <p>1x</p>
            <img src={ previous } alt="previous-icon" />
            <img src={ play } alt="play-icon" />
            <img src={ next } alt="next-icon" />
            <img src={ shuffle } alt="shuffle-icon" />
        </div>
    )
}