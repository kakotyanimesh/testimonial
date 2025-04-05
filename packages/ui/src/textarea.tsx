import React from "react"

interface TextareaProps {
    placeholder : string,
    label : string,
    ref ?: React.RefObject<HTMLTextAreaElement | null>
}


export default function TextAreaComponent({placeholder, label, ref} : TextareaProps){
    return (
        <div className="flex ui-flex-col ui-w-full ui-space-y-3">
            <label htmlFor={label} className="ui-text-sm ui-font-semibold">{label}</label>
            <textarea className="ui-px-3 ui-h-36 ui-text-sm  ui-rounded-md ui-py-2 ui-bg-slate-100 focus:ui-ring-2 focus:ui-outline-none focus:ui-ring-blue-700"  placeholder={placeholder} ref={ref}></textarea>
        </div>
    )
}