import './styles.css'
import ReactPlayer from 'react-player'
import {useEffect, useRef, useState} from "react";

const VideoPlayer = (props) => {

    const playerRef = useRef(null)

    useEffect(() => {
        if(props.playerTime !== null){
           playerRef.current.seekTo(props.playerTime)
        }
    }, [props.playerTime]);

    return(
        <div className='video-wrap'>
            <ReactPlayer
                controls={true}
                ref={playerRef}
                playing={props.autoPlay}
                onSeek={(p) => {
                    props.playerSeekHandler(p)
                }}
                url={props.url} />
        </div>
    )
}

export default VideoPlayer