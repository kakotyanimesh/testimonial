import {Star} from "lucide-react"

export interface TestimonialCardOneProps {
    author : string
    authorCompanyName : string
    content : string
    stars : 1 | 2 | 3 | 4 | 5
    imageurl : string,
    isActive ?:boolean
}


export default function TestimonialCardOne ({author, isActive,authorCompanyName, content, stars, imageurl} : TestimonialCardOneProps){
    return (
        <div className={`ui-space-y-3 ui-rounded-md ui-shadow-slate-200 ui-shadow-md ui-px-10 ui-py-5 ${isActive ? "ui-border-[1px] ui-border-blue-300" : undefined }`}>
            <div className="flex ui-flex-row">
                {Array.from({length : 5}).map((_,k) => (
                    <Star key={k} size={16} className={stars > k ? "ui-fill-blue-700 ui-text-blue-700" : "ui-text-blue-700"}/>
                ))}
            </div>
            <div>
                <p className="text-sm ">{content}</p>
            </div>
            <div className="flex  ui-items-center ui-gap-2">
                <img src={imageurl} alt="author image" className="ui-rounded-full ui-w-9 ui-h-9" />
                <div className="ui-text-sm">
                    <h1>{author}</h1>
                    <p className="ui-text-slate-500">{authorCompanyName}</p>
                </div>
            </div>
        </div>
    )
}