interface UITprops {
    tdesc : string,
    author : string,
    authorjob : string,
    type : "TEXT" | "VIDEO",
    ratings : number,
    status : boolean,
    date : string
}

export default function UItestimonialCard({tdesc, author, ratings, status, date, authorjob, type} : UITprops){
    return (
        <div className="flex justify-between items-center text-center text-sm">
            <input type="checkbox" className="appearance-none border-2 border-slate-500 w-3 h-3 rounded-full checked:bg-blue-600 checked:border-transparent" />
            <h1 className="truncate w-[500px] text-slate-700 ">{tdesc}</h1>
            <div className="text-start">
                <h1 className="font-semibold ">{author}</h1>
                <p className="text-slate-700">{authorjob}</p>
            </div>
            <h1 className="bg-blue-600 font-semibold text-white rounded-full px-2">{type}</h1>
        </div>
    )
}