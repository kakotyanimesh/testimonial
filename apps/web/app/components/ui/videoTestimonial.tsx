import NextVideoPlayer from "./videoPlayer"
import { Suspense } from "react";

interface VideoTestimonialProps {
    url : string,
    author : string,
    authorCompany : string,
}


export default function VideoTestimonialCard({url, author, authorCompany} : VideoTestimonialProps){
    return (
        <div className="relative rounded-md bg-blue-900/85">
            <Suspense fallback={<p>Loading video...</p>}>
                <NextVideoPlayer url={url} />
            </Suspense>
            <div className="text-center -space-y-1 text-white">    
                <h1 className="font-bold text-lg">{author}</h1>
                <p className="font-semibold text-sm">{authorCompany}</p> 
            </div>
        </div>
    )
}