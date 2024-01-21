import './styles.css'
import ReactPlayer from 'react-player'
import { useEffect, useRef } from "react";

const VideoPlayer = (props) => {

    const playerRef = useRef(null)

    useEffect(() => {
        if(props.playerTime !== null){
           playerRef.current.seekTo(props.playerTime, 'seconds');
        }
    }, [props.playerTime]);

    return(
        <div className='video-wrap'>
            <ReactPlayer
                controls={true}
                ref={playerRef}
                playing={props.autoPlay}
                onSeek={(p) => {
                    props.playerSeekHandler(p);
                }}
                onPlay={(p) => {
                    props.setPlayerAutoPlay(true)
                }}
                onPause={(p) => props.setPlayerAutoPlay(false)}
                url={props.url} 
                width={"auto"}
                />
        </div>
    )
}

export default VideoPlayer