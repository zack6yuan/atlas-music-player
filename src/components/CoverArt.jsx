import placeholder from "../assets/placeholder.svg"

export default function CoverArt() {
    return (
        <div className="cover-art scale-33 2xl:-mt-95 2xl:-ml-66">
            <img src={ placeholder } alt="" className="rounded-3xl"/>
        </div>
    )
}