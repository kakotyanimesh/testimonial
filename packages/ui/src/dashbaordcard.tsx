import { ReactNode } from "react"

export default function DashboardCard({children} : {children : ReactNode}){
    return (
        <div className="ui-bg-white ui-border-[1px] ui-shadow ui-shadow-slate-100 ui-border-slate-300 ui-rounded-xl ui-w-fit ui-px-4 ui-py-5">
            {children}
        </div>
    )
}