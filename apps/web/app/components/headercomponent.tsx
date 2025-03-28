"use client"

import Button from "@repo/ui/button"
import TcardOne, { TcardProps } from "@repo/ui/tcardOne"


export default function Header(){
    return (
        <div className="flex flex-col justify-center items-center text-center space-y-7 bg-gradient-to-b from-white via-white to-blue-100 opacity-100 md:-mx-20 pb-20">
            <h1 className="flex md:gap-3 gap-1 border-slate-100 border-2 px-5 py-1 rounded-3xl text-blue-500 animate-pulse text-sm transition-all"><span className="font-bold">•</span>Customer Testimonials Reimagined</h1>
            <div className="space-y-2">
                <h1 className="md:text-5xl text-4xl font-bold">Turn Customer <span className="text-blue-500">Voices</span> Into Social Proof</h1>
                <p className="text-slate-500 text-sm md:text-lg">Collect, manage, and showcase authentic testimonials that build trust and drive conversions.</p>
            </div>
            <div className="flex items-center md:gap-20 gap-5 md:flex-row flex-col  ">
                <Button title="Start Your Free Trail" variants="primary" onclick={() => alert("add")}/>
                <Button title="See Live Demo" variants="default" onclick={() => alert("add")}/>
            </div>
            <div className="max-w-[700px] space-y-4">
                <TcardOne stars={4} author="Animesh kakoyt" authorCompany="Kakoty100xdev" content={"ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page."} imageUrl="https://i.pravatar.cc/150?img=3" isActive={true}/>
                <div className="flex gap-4 md:flex-row flex-col">
                    {TcardArray.map((t, k) => (
                        <TcardOne stars={t.stars} author={t.author} authorCompany={t.authorCompany} content={t.content} imageUrl={t.imageUrl} isActive={t.isActive} key={k}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


const TcardArray: TcardProps[] = [
    {   
        stars : 3,
        author: "Animesh",
        authorCompany:"Company.to",
        content : "ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page.", 
        imageUrl: "https://i.pravatar.cc/150?img=5", 
        isActive : false 
    },
    {
        stars : 4,
        author: "kAKOTY",
        authorCompany:"Company.to",
        content : "ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page.", 
        imageUrl: "https://i.pravatar.cc/150?img=7", 
        isActive : false 
    }
]