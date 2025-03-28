import { Star } from "lucide-react"
import { easeIn } from "motion"
import { easeInOut, motion } from "motion/react"

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
        <motion.div whileHover={{y : -4}} transition={{ease : "linear"}} className={`ui-group ${isActive ? "ui-bg-[conic-gradient(#0ea5e9_30deg,transparent_360deg)] ui-p-[1px] ui-rounded-md" : undefined}`}>
            <div className={`ui-shadow-md ui-px-10 ui-py-3 hover:ui-bg-slate-100 ui-bg-white ui-rounded-md ui-text-start ui-space-y-4 ui-text-sm `}>
                <div className="flex">
                    {
                        Array.from({length : 5}).map((_, k) => (
                            <Star size={14} key={k} className={stars > k  ?"ui-fill-blue-500 group-hover:ui-fill-blue-700 group-hover:ui-text-blue-700 ui-transition-colors ui-ease-linear ui-text-blue-500" : "ui-text-blue-500"} />
                        ))
                    }
                </div>
                <h1 className="group-hover:ui-text-blue-900">{content}</h1>
                <div className="flex ui-items-center ui-gap-4">
                    <img src={imageUrl} alt="author image" className="ui-rounded-full ui-w-10 ui-h-10" />
                    <div>
                        <h1 className="group-hover:ui-text-blue-900 ui-transition-colors ui-ease-linear">{author}</h1>
                        <p className="ui-text-slate-500">{authorCompany}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}