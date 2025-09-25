import { useState } from 'react';

type coverProps = {
    cover: 'string'
}
export default function CoverArt({cover}: coverProps) {
    return (
        <div className="cover-art 2xl:scale-118 xl:scale-120 xl:mt-13 xl:ml-14 xl:mr-13 lg:scale-90 lg:-mt-0 lg:ml-0 md:scale-85 md:-mt-2 md:-ml-1 sm:scale-92">
            <img src={cover} alt="" className="rounded-xl"/>
        </div>
    )
}