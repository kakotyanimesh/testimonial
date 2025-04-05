import InputBox from "./inputbox"


export default function OptionalTestimonialFill(){
    return (
        <div className="ui-space-y-5 relative ui-border-slate-200 ui-border-2 ui-px-5 ui-py-4 ui-rounded-md">
            <div className="absolute   ui-right-10">
                <input type="checkbox" className="ui-size-4" />
            </div>
            <InputBox type="text" label="Field Label" placeholder="Field Label " />
            <InputBox type="text" label="Placeholder" placeholder="Your required Placeholder" />
        </div>
    )
}