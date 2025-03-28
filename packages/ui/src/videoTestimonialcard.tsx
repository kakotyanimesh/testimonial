interface VideoTestimonial {
    video : string,
    author : string,
    authorCompany : string,
    desc : string
}


export default function VideoTestimonialCards({video, author, authorCompany, desc} : VideoTestimonial) {
    return (
        <div>
            {/* <NextVideoPlaye */}
            <div>
                <h1>{author}</h1>
                <p>{authorCompany}</p>
            </div>
            <div>
                {desc}
            </div>
        </div>
    )
}