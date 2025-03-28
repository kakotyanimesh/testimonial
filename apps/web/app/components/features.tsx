"use client"
import InfiniteSlider from "@repo/ui/slider"
import Image from "next/image"

export default function Features(){
    return (
        <div className="flex flex-col justify-center items-center space-y-10 mb-32">
            <div className="flex flex-col justify-center items-center text-center space-y-5">
                <h1 className="flex md:gap-3 gap-1 border-slate-100 border-2 w-fit items-center px-5 py-1 rounded-3xl text-blue-500 animate-pulse text-sm transition-all"><span className="font-bold">•</span>Customer Testimonials Reimagined</h1>
                <h1 className="md:text-4xl font-bold text-xl tracking-tight">Giving marketing <span className="text-blue-400">Superpowers</span> to world-class companies</h1>
            </div> 
            <div className="md:px-32">
            <InfiniteSlider duration="200" slides={logoArray.map((i, k) => (
                <Image className="cursor-pointer" width={1000} height={1000} src={i} alt="logo" key={k}/>
              ))}/>
            </div>
        </div>
    )
}



const logoArray = ["/logoOne.png", "/logoTwo.png", "/logoThree.png", "/logoFour.png", "/logoFive.png","/logoOne.png", "/logoTwo.png", "/logoThree.png", "/logoFour.png", "/logoFive.png",]