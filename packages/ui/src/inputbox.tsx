

interface InputBoxProps {
    label : string,
    placeholder : string,
    type : string,
    ref ?: React.RefObject<HTMLInputElement | null>
}

export default function InputBox({label, placeholder, type, ref} : InputBoxProps){
    return (
        <div className="flex ui-flex-col ui-w-full ui-space-y-3">
            <label htmlFor={label} className="ui-text-sm ui-font-bold">{label}</label>
            <input type={type} ref={ref} placeholder={placeholder} className="ui-px-3 ui-rounded-md ui-py-1 ui-bg-slate-100 focus:ui-ring-2 focus:ui-outline-none focus:ui-ring-blue-700" />
        </div>
    )
}