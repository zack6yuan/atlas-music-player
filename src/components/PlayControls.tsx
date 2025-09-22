import previous from "../assets/previous.svg"
import play from "../assets/play.svg"
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";
import speed from "../assets/speed.svg";

export default function PlayControls() {
    return (
        <div className="play-controls flex 2xl:gap-14.5 xl:gap-16 lg:gap-14.5 md:gap-8 sm:gap-22">
            <img src={ speed } alt="speed-icon" />
            <img src={ previous } alt="previous-icon" className=""/>
            <img src={ play } alt="play-icon" className="border-2 rounded-lg p-4"/>
            <img src={ next } alt="next-icon" className=""/>
            <img src={ shuffle } alt="shuffle-icon" className=""/>
        </div>
    )
}