import { useEffect, useRef } from 'react';

type Props = {
    playing: boolean;
    volume: number;
    speed: 1.0 | 2.0 | 0.5;
    song: string;
    onEnd: () => void;
}

export default function AudioPlayer(props: Props) {
    const ref = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (props.playing) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [props.playing])

    useEffect(() => {
        if(!ref.current) return;
        ref.current.volume = props.volume / 100;
    }, [props.volume])

    useEffect(() => {
        if(!ref.current) return;
        ref.current.playbackRate = props.speed;
    }, [props.speed])

    useEffect(() => {
        const current = ref.current;
        current?.addEventListener("ended", props.onEnd);
        return () => {
            current?.removeEventListener("ended", props.onEnd)
        }

    }, [ref, props.onEnd])

    return (
        <audio ref={ref}>
            <source
                src={props.song}
                type="audio/mpeg"
            />
        </audio>
    )
}