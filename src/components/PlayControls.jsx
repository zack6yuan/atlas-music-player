import previous from "../assets/previous.svg"
import play from "../assets/play.svg"
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
    return (
        <div className="play-controls flex 2xl:gap-18 xl:gap-17 lg:gap-17 md:gap-11">
            <p>1x</p>
            <img src={ previous } alt="previous-icon" class=""/>
            <img src={ play } alt="play-icon" class=""/>
            <img src={ next } alt="next-icon" class=""/>
            <img src={ shuffle } alt="shuffle-icon" class=""/>
        </div>
    )
}