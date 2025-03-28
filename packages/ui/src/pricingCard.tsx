"use client"
import { Check } from "lucide-react"
import Button from "./button"

interface PricingCardProps {
    title : string,
    desc : string,
    price : string,
    features : string[],
    isActive : boolean
}


export default function PricingCard({title, desc, price, features, isActive} : PricingCardProps){
    return (
        <div className={`relative ui-border-[1px] ui-w-full ui-space-y-4 ui-p-6 ui-rounded-2xl ui-text-start ${isActive ? "ui-bg-gradient-to-b ui-from-[#255DFF]/[0.16] ui-to-transparent ui-border-blue-400" : "ui-bg-white ui-border-slate-200 "}`}>
            <div>
            {
                isActive && <h1 className="absolute -ui-top-3 ui-right-5 ui-text-sm ui-bg-blue-600 ui-rounded-full ui-px-3">Most Popular</h1>
            }
            </div>
            <h1 className="ui-font-bold ui-text-2xl">{title}</h1>
            <p className="text-sm ui-text-slate-600">{desc}</p>
            <p className="ui-text-slate-400"><span className="text-2xl ui-text-black ui-font-bold">{price}</span>/month</p>
            <div className="ui-space-y-2">
                {features.map((f, k) => (
                    <ul key={k} className="flex ui-items-center ui-gap-2 ui-text-slate-800"><Check size={14} className="ui-text-blue-600"/>{f}</ul>
                ))}
            </div>
            <Button title="Get started" variants={`${isActive ? "primary" : "default"}`} onclick={() => alert("adas")}/>
        </div>
    )
}