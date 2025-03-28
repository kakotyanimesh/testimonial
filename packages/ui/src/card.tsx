"use client"
import { ReactNode } from "react";
import { motion } from "motion/react";

export interface ScardProps{
  title : string,
  desc : string,
  icon : ReactNode
}


export default function Scard({title, desc, icon} : ScardProps) {
  return (
    <motion.div whileHover={{y : -4}} transition={{ease : "linear"}} className="ui-group ui-text-start ui-border-[1px] ui-border-slate-200 hover:ui-bg-gradient-to-br ui-from-blue-100 ui-via-white ui-to-white ui-transition-colors ui-ease-linear  ui-p-7 ui-rounded-md ui-shadow-sm ui-shadow-slate-200  ui-space-y-5">
      <div className="ui-bg-blue-200 group-hover:ui-bg-blue-500 group-hover:ui-text-blue-950 ui-transition-all ui-ease-linear ui-w-fit ui-text-blue-700 ui-p-2 ui-rounded-full">{icon}</div>
      <div className="ui-space-y-1">
        <h1 className="group-hover:ui-text-blue-700 ui-font-semibold">{title}</h1>
        <p className="ui-text-slate-800 ui-text-sm">{desc}</p>
      </div>
    </motion.div>
  )
}