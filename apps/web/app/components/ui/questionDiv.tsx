export default function QuestionsDiv({title} : {title :string} ){
    return (
        <div className=" text-start">
            <h1 className="font-semibold text-sm ">Q. {title} ?</h1>
        </div>
    )
}