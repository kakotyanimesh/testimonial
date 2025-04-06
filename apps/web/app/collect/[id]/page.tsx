"use client"
import {useEffect, useState, use, useRef} from "react"
import { getClientSideQuestionsCall, submitTestimonialCall } from "../../../utils/api"
import { TestimonialQuestionsInterface } from "../../../utils/types"
import InputBox from "@repo/ui/inputbox"
import TextAreaComponent from "@repo/ui/textarea"
import Button from "@repo/ui/button"
import QuestionsDiv from "../../components/ui/questionDiv"

export default function CollectTestimonail({params} : {params : Promise<{id : string}>}){
    const resolvedParams = use(params)
    const { id } = resolvedParams || {}
    const [questionData, setQuestionData] = useState<TestimonialQuestionsInterface>()
    const [spacebarNumber, setSpacebarNumber] = useState(1)
    const [submitting, setSubmitting] = useState(false)
    const [formSubmitted, setformSubmitted] = useState(false)
    const [uploadedfilename, setUploadedfilename] = useState<string | null>("")

    // refs 
    const videoRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const companyRef = useRef<HTMLInputElement | null>(null)
    const jobTitleRef = useRef<HTMLInputElement | null>(null)
    const reviewRef = useRef<HTMLTextAreaElement | null>(null)
    // const starRef = htmlin
    

    useEffect(() => {
      const res = async () => {
        const data = await getClientSideQuestionsCall({uniqueLink : id})

        setQuestionData(data)

      }
    
      res()
      
    }, [])
    

    const uploadVideoFile = () => {
        videoRef.current?.click()
    }
    
    const handleFileChnage = () => {
        const file = videoRef.current?.files?.[0]

        if(file){
            setUploadedfilename(file.name)
        } else {
            setUploadedfilename(null)
        }
    }


    const submitTestimonial = async () => {
        setSubmitting(true)
        try {
            const formdata = new FormData()

            formdata.append("customername", nameRef.current?.value || "")
            formdata.append("customeremail", emailRef.current?.value || "")
            formdata.append("customerCompany", companyRef.current?.value || "") 
            formdata.append("spaceId", questionData?.spaceId.toString() || "")
            formdata.append("stars", "5")

            if(spacebarNumber === 0){
                const file = videoRef.current?.files?.[0]

                if(file){
                    formdata.append("videoFile", file)
                }
            } else {
                formdata.append("review", reviewRef.current?.value || "")
            }

            const res = await submitTestimonialCall(formdata)
            alert("testimonial uploaded")
            console.log(res);
            
            setformSubmitted(true)
            
        } catch (error) {
            console.error("Error submitting testimonial:", error)
            
        } finally{
            setSubmitting(false)
        }
    }

    if(formSubmitted){
        return <div>
            form submitted bye bye 
        </div>
    }
    return (
        <div className="flex justify-center bg-slate-200 items-center text-center min-h-screen py-10 md:px-0 px-4 ">
            <div className="bg-white text-center flex flex-col justify-center items-center space-y-7 rounded-xl w-[750px] border-[1px] border-blue-700 md:px-10 px-3 py-10">
                <div className="space-y-1">
                    <h1 className="font-medium md:text-xl text-[20px]">{questionData?.formTitle}</h1>
                    <p className="md:text-sm text-[14px] text-slate-600">{questionData?.formDescripton}</p>
                </div>
                <div className="flex flex-row md:gap-4 bg-slate-200  rounded-xl w-full items-center justify-center py-1 px-1">
                {
                    collectionbar.map((s, i) => (
                        <button key={i} onClick={() => setSpacebarNumber(i)} className={`text-sm  font-semibold transition-colors duration-200  w-full  py-1 rounded-xl ${spacebarNumber === i ? "bg-white  border-blue-700 border-2" : undefined }`} >{s.itemname}</button>
                    ))
                }

                </div>
                <div className="w-full text-start space-y-4">
                    <InputBox ref={nameRef} placeholder="Your name " type="text" label="Name"/>
                    <InputBox ref={emailRef} placeholder="your.email@example.com" type="email" label="Email"/>
                    <div className="grid grid-cols-2 gap-10">
                        <InputBox ref={companyRef} placeholder="Your company name" type="text" label="Company name"/>
                        <InputBox ref={jobTitleRef} placeholder="Your role" type="text" label="Job Title"/>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 text-start w-full bg-slate-200 p-2 rounded-md">
                    <QuestionsDiv title={questionData?.questionOne || ""} />
                    <QuestionsDiv title={questionData?.questionTwo || ""}/>
                    <QuestionsDiv title={questionData?.questionThree || ""}/>
                </div>
                {
                    spacebarNumber === 0 ? (
                        <div className="w-full text-start space-y-3">
                            <h1 className="text-sm font-semibold">Video Testimonial</h1>
                            <div className="h-36 space-y-3 flex flex-col justify-center items-center border-dashed border-2 text-center border-slate-400 rounded-md">
                                <input type="file" className="hidden" accept="video/mp4, video/mov, video/webm" ref={videoRef} onChange={handleFileChnage} />
                                <div>
                                    <Button title={uploadedfilename ? "File Uploaded" : "Upload Your Video" } variants="default" onclick={uploadVideoFile}/>

                                </div>
                                <p className="text-slate-400 text-sm">{uploadedfilename ? `Selected : ${uploadedfilename.toLocaleLowerCase()}` : `Max 100MB. MP4, MOV, or WEBM format.`}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full text-start">
                            <TextAreaComponent ref={reviewRef} placeholder="Share Your Experience with our product/service...." label="Your Testimonial"/>
                        </div>
                    )
                }
                <Button title="Submit Testimonial" processing={submitting} processingText="submitting testimonial" variants="primary" onclick={submitTestimonial}/>
            </div>
        </div>
    )
}

const collectionbar = [
    {itemname : "Video", isActive : 0},
    {itemname : "Text", isActive : 1},
]