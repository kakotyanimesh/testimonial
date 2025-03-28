import Button from "./button"

interface CtaModalProps {
    title : string,
    desc : string,
    buttonOne : string,
    buttonTwo : string,
    onclickOne : () => void,
    onclickTwo : () => void
}

export default function CtaModal({title, desc, buttonOne, buttonTwo, onclickOne, onclickTwo} : CtaModalProps){
    return (
        <div className="flex ui-flex-col ui-justify-center ui-text-center ui-items-center ui-space-y-5">
            <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
            <p className="text-slate-500 text-sm md:text-lg">{desc}</p>
            <div className="flex md:ui-flex-row ui-flex-col md:ui-gap-10 ui-gap-4 ">
                <Button title={buttonOne} variants="primary" onclick={onclickOne}/>
                <Button title={buttonTwo} variants="default" onclick={onclickTwo}/>
            </div>
        </div>
    )
}