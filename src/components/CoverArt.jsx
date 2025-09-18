import placeholder from "../assets/placeholder.svg"

export default function CoverArt() {
    return (
        <div className="cover-art 2xl:scale-33 2xl:-mt-95 2xl:-ml-66 xl:scale-33 xl:-mt-95 xl:-ml-85 lg:scale-33 lg:-mt-94 lg:-ml-100 md:scale-29 md:-mt-88 md:-ml-88">
            <img src={ placeholder } alt="" className="rounded-3xl"/>
        </div>
    )
}