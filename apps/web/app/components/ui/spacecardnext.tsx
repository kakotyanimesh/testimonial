import Button from "@repo/ui/button"
import Link from "next/link"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"
interface SpaceCardProps {
    name : string,
    websiteUrl : string,
    id : string
    // numberofTestimonial : number,
    // desc : string
}

export default function SpaceCard({name, websiteUrl, id} : SpaceCardProps){
    const router = useRouter()
    return (
        <motion.div whileHover={{y : -3}} transition={{ease : "linear"}} className="hover:shadow-md cursor-pointer shadow-slate-200 transition-colors ease-linear relative ui-bg-white ui-border-[1px] ui-border-slate-200 ui-shadow-sm ui-h-40 ui-rounded-2xl flex ui-flex-col ui-justify-between ui-px-5 ui-py-3">
            <div className="">
                <h1 className="ui-font-semibold">{name}</h1>
                {/* <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="ui-cursor-pointer">{websiteUrl}</a > */}
                <Link href={websiteUrl}>{websiteUrl}</Link>
                {/* <button className="ui-cursor-pointer ui-text-2xl ui-text-slate-800" onClick={() => alert('asdasd')}>...</button> */}

            </div>
            {/* <p>{desc}</p> */}

            <div className="ui-w-20 ui-right-5 ui-bottom-5 ui-absolute ">
                {/* <p>{numberofTestimonial} testimonials</p> */}
                <Button title="manage" variants="primary" onclick={() => router.push(`/spaces/${id}`)}/>
            </div>
        </motion.div>
    )
}