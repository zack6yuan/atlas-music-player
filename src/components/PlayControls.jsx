import previous from "../assets/previous.svg"
import play from "../assets/play.svg"
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
    return (
        <div className="play-controls flex">
            <p class="mx-3">1x</p>
            <img src={ previous } alt="previous-icon" class="mx-3"/>
            <img src={ play } alt="play-icon" class="mx-3"/>
            <img src={ next } alt="next-icon" class="mx-3"/>
            <img src={ shuffle } alt="shuffle-icon" class="mx-3"/>
        </div>
    )
}