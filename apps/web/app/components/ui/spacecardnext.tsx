import Button from "@repo/ui/button"
import Link from "next/link"
import { motion } from "motion/react"
import { redirect, useRouter } from "next/navigation"
interface SpaceCardProps {
    name : string,
    websiteUrl : string,
    id : string
    // numberofTestimonial : number,
    // desc : string
}

export default function SpaceCard({name, websiteUrl, id} : SpaceCardProps){
    const router = useRouter()

    const filterurl = (url : string )  => {
        if(!/^https?:\/\//i.test(url)){
            return `https://${url}`
        }

        return url
    }
    return (
        <motion.div whileHover={{y : -3}} transition={{ease : "linear"}} className="hover:shadow-md cursor-pointer shadow-slate-300 transition-colors ease-linear relative bg-white border-[1px] border-slate-200 shadow-sm h-56 rounded-xl flex flex-col justify-between p-5">
            <button className="absolute  right-7 font-bold cursor-pointer top-4" onClick={() => alert("delete button will be here n")}>...</button>
            <div className="">
                <h1 className="font-semibold">{name}</h1>
                {/* <Link href={websiteUrl} className="text-slate-600 text-sm" passHref={true}>{websiteUrl}</Link> */}
                <a href={filterurl(websiteUrl)} target="_blanck" className="text-slate-600 text-sm">{websiteUrl}</a>
                <div className="text-sm bg-blue-600  w-fit px-3 text-white font-semibold rounded-full my-2">
                    active
                </div>

            </div>

            <div className="w-20 right-4 bottom-10 absolute ">
                <Button title="manage" variants="default" onclick={() => router.push(`/spaces/${id}`)}/>
            </div>
        </motion.div>
    )
}