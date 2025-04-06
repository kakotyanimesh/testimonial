"use client"
import {useEffect, useState, use} from "react"
import { getClientSideQuestionsCall } from "../../../utils/api"
import { TestimonialQuestionsInterface } from "../../../utils/types"
import InputBox from "@repo/ui/inputbox"
import TextAreaComponent from "@repo/ui/textarea"
import Button from "@repo/ui/button"

export default function CollectTestimonail({params} : {params : Promise<{id : string}>}){
    const resolvedParams = use(params)
    const { id } = resolvedParams || {}
    const [questionData, setQuestionData] = useState<TestimonialQuestionsInterface>()
    const [spacebarNumber, setSpacebarNumber] = useState(1)
    

    useEffect(() => {
      const res = async () => {
        const data = await getClientSideQuestionsCall({uniqueLink : id})

        setQuestionData(data)
      }
    
      res()
      
    }, [])
    
    

    return (
        <div className="flex justify-center bg-slate-200 items-center text-center min-h-screen ">
            <div className="bg-white text-center flex flex-col justify-center items-center space-y-7 rounded-xl w-[750px] border-[1px] border-blue-700 px-10 py-10">
                <div className="space-y-1">
                    <h1 className="font-medium text-xl">{questionData?.formTitle}</h1>
                    <p className="text-sm text-slate-600">{questionData?.formDescripton}</p>
                </div>
                <div className="flex flex-row md:gap-4 bg-slate-200  rounded-xl w-full items-center justify-center py-1 px-1">
                {
                    collectionbar.map((s, i) => (
                        <button key={i} onClick={() => setSpacebarNumber(i)} className={`text-sm  font-semibold transition-colors duration-200  w-full  py-1 rounded-xl ${spacebarNumber === i ? "bg-white  border-blue-700 border-2" : undefined }`} >{s.itemname}</button>
                    ))
                }

                </div>
                <div className="w-full text-start space-y-4">
                    <InputBox placeholder="Your name " type="text" label="Name"/>
                    <InputBox placeholder="your.email@example.com" type="email" label="Email"/>
                    <div className="grid grid-cols-2 gap-10">
                        <InputBox placeholder="Your company name" type="text" label="Company name"/>
                        <InputBox placeholder="Your role" type="text" label="Company name"/>
                    </div>
                </div>
                {
                    spacebarNumber === 0 ? (
                        <div className="w-full text-start space-y-1">
                            <h1 className="text-sm font-semibold">Video Testimonial</h1>
                            <div className="h-36 space-y-3 flex flex-col justify-center items-center border-dashed border-2 text-center border-slate-400 rounded-md">
                                <div>
                                <Button title="upload Your Video" variants="default" onclick={() => alert("adsasd")}/>

                                </div>
                                <p className="text-slate-400 text-sm">Max 100MB. MP4, MOV, or WEBM format.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full text-start">
                            <TextAreaComponent placeholder="Share Your Experience with our product/service...." label="Your Testimonial"/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const collectionbar = [
    {itemname : "Video", isActive : 0},
    {itemname : "Text", isActive : 1},
]