import placeholder from "../assets/placeholder.svg"
import { useState, useEffect } from 'react';

export default function CoverArt() {
    const [cover, setCover] = useState('')

    useEffect(() => {
        fetch('/api/v1/playlist')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setCover(data.imageURL)
        })
    }, [])


    return (
        <div className="cover-art 2xl:scale-60 2xl:-mt-30 2xl:-mr-30 xl:scale-90 xl:mt-1 xl:ml-33 lg:scale-80 lg:-mt-6 lg:ml-3 md:scale-85 md:-mt-2 md:-ml-1 sm:scale-92">
            <img src={ placeholder } alt="" className="rounded-xl"/>
        </div>
    )
}