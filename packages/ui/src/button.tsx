import { ReactNode } from "react"

interface ButtonTypes {
    title ?: string
    style ?:string
    variants : "primary" | "default"
    onclick ?: () => void
    icon ? : ReactNode,
    processing ?: boolean,
    processingText ? : string
    size ?: "secondary" | "lg" | "sm" | "primary"
}


const styleVariants  =  {
    "primary" : "ui-bg-blue-500 ui-px-5 ui-py-2 ui-text-white hover:ui-bg-blue-700",
    "default" : "ui-ring-1 ui-ring-zinc-300 ui-px-5 ui-py-2 hover:ui-bg-slate-100 hover:ui-text-blue-700"
}

// const size = {
//     secondary : "",
//     primary : "",
//     lg : ""
// }
const defaultStyle = "ui-cursor-pointer ui-font-medium disabled:ui-pointer-events-none ui-transition-colors disabled:ui-backdrop-blur-3xl ui-inline-flex ui-justify-center ui-text-center ui-items-center ui-whitespace-nowrap ui-rounded-md"

export default function Button ({title, variants, onclick, style, icon, processing, processingText} : ButtonTypes) {
    return (
        <button className={`${styleVariants[variants]} ${style} ${defaultStyle} ui-font-semibold ui-text-sm w-full ui-flex ui-gap-3 ui-items-center`} onClick={onclick}>
            {/* {
                processing ? <span className="animate-spin">⟳</span>: icon
            } */}
            {icon}
            {
                processing ? processingText : title
            }
        </button>
    )
}