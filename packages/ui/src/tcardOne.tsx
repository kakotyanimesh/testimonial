import { Star } from "lucide-react"

export interface TcardProps {
    content : string,
    isActive : boolean,
    author : string,
    authorCompany : string,
    imageUrl : string,
    stars : 1 | 2 | 3 | 4 | 5
}


export default function TcardOne ({stars, isActive, author, content,authorCompany, imageUrl } : TcardProps){
    return (
        <div className={ isActive ? "ui-bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] ui-p-[1px] ui-rounded-md" : undefined}>
            <div className={`ui-shadow-md ui-px-10 ui-py-3 ui-bg-white ui-rounded-md ui-text-start ui-space-y-4 ui-text-sm `}>
                <div className="flex">
                    {
                        Array.from({length : 5}).map((_, k) => (
                            <Star size={14} key={k} className={stars > k  ?"ui-fill-blue-500 ui-text-blue-500" : "ui-text-blue-500"} />
                        ))
                    }
                </div>
                <h1>{content}</h1>
                <div className="flex ui-items-center ui-gap-4">
                    <img src={imageUrl} alt="author image" className="ui-rounded-full ui-w-10 ui-h-10" />
                    <div>
                        <h1 className="">{author}</h1>
                        <p className="ui-text-slate-500">{authorCompany}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}