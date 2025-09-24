import { useEffect, useState, useRef } from 'react';


export default function PlayListItem() {
    const [songs, setSongs] = useState([]);

    const playlistURL = '/api/v1/playlist'

    useEffect(() => {
        const getSongs = async () => {
            try {
                const response = await fetch(playlistURL);
                const songData = await response.json();
                setSongs(songData)
            } catch(error) {
                console.error(error)
            }
        }
        getSongs();
    }, [])

    return (
        <div className="">
            <h1>Playlist</h1>
            <div className="">
                {songs.map((song, index) => {
                    return (
                    <div key={index} className="">
                        <p>{songs.title}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}