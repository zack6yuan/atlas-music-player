import previous from "../assets/previous.svg"
import play from "../assets/play.svg"
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
    return (
        <div className="play-controls flex 2xl:gap-17 xl:gap-17 lg:gap-17 md:gap-11 sm:gap-25">
            <p className="">1x</p>
            <img src={ previous } alt="previous-icon" className=""/>
            <img src={ play } alt="play-icon" className=""/>
            <img src={ next } alt="next-icon" className=""/>
            <img src={ shuffle } alt="shuffle-icon" className=""/>
        </div>
    )
}