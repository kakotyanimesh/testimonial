"use client"
import { useRef, useState } from "react"
import { Play } from 'lucide-react';

interface VideoProps {
    url : string,
}
export default function NextVideoPlayer({url} : VideoProps){

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const playVideo = () => {
        if(videoRef.current){
            if(isPlaying){
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }
    return (
        
        <div className={`relative h-full w-full`}>
            <video ref={videoRef} onClick={playVideo} className="h-full w-full object-cover rounded-md">
                <source src={url} type="video/mp4"/>
                your browser doesnot supprort video
            </video>
            {
                !isPlaying && <button className="absolute inset-0 place-items-center" onClick={playVideo}><Play className="bg-blue-500/50 text-white/75 fill-white/75 rounded-full p-1" size={38}/></button>
            }
        </div>
    )
}

