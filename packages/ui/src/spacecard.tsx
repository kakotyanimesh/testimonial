import Button from "./button"

interface SpaceCardProps {
    name : string,
    websiteUrl : string
    // numberofTestimonial : number,
    // desc : string
}

export default function SpaceCard({name, websiteUrl} : SpaceCardProps){
    return (
        <div className="relative ui-bg-white ui-border-[1px] ui-border-slate-200 ui-shadow-sm ui-h-40 ui-rounded-md flex ui-flex-col ui-justify-between ui-p-10">
            <div className="">
                <h1 className="ui-font-semibold">{name}</h1>
                {/* <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="ui-cursor-pointer">{websiteUrl}</a > */}
                {/* <button className="ui-cursor-pointer ui-text-2xl ui-text-slate-800" onClick={() => alert('asdasd')}>...</button> */}

            </div>
            {/* <p>{desc}</p> */}

            <div className="ui-w-20 ui-right-5 ui-bottom-5 ui-absolute ">
                {/* <p>{numberofTestimonial} testimonials</p> */}
                <Button title="manage" variants="default" onclick={() => alert("adsa")}/>
            </div>
        </div>
    )
}