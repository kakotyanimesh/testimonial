"use client"
import {  useRef, useState } from "react"
import Button from "@repo/ui/button";
import DashboardCard from "@repo/ui/dashbaordcard";
import InputBox from "@repo/ui/inputbox";
import TextAreaComponent from "@repo/ui/textarea"
import { Settings } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import { createFormcall } from "../../utils/api";
import { ArrowLeft, Check, Copy } from "lucide-react"


export default function TestimonailFormComponent(){
    const searchParams = useSearchParams()
    const spaceId = searchParams.get("spaceId")
    const router = useRouter()
    const [formcreating, setformcreating] = useState(false)
    const [createdForm, setCreatedForm] = useState(false)
    const [formLink, setFormLink] = useState("")

    const formTitleRef  = useRef<HTMLInputElement | null>(null)
    const formDescriptionRef = useRef<HTMLTextAreaElement  | null>(null)
    const questionOneRef = useRef<HTMLInputElement | null>(null)
    const questionTwoRef = useRef<HTMLInputElement | null>(null)
    const questionThreeRef = useRef<HTMLInputElement | null>(null)
    const logoUrlRef = useRef<HTMLInputElement | null>(null)
    const [copied, setCopie] = useState(false)



    const createForm = async () => {
        setformcreating(true)
        try {
            if(!questionOneRef.current?.value || !questionThreeRef.current?.value || !questionTwoRef.current?.value || !formDescriptionRef.current?.value || !formTitleRef.current?.value){
                alert("empty fields")
                return
            }

            const res = await createFormcall({
                spaceId : Number(spaceId) ,
                questionOne : questionOneRef.current?.value ,
                questionTwo: questionTwoRef.current?.value ,
                questionThree: questionThreeRef.current?.value ,
                formDescripton: formDescriptionRef.current?.value ,
                formTitle : formTitleRef.current?.value 
            })

            console.log(res);
            setCreatedForm(true)
            setFormLink(res.questions.uniqueLink)
            // router.push(`/spaces/${spaceId}`)
        } catch (error) {
            console.error(error)
        } finally{
            setformcreating(false)
        }
    }


    if(createdForm){
        return <div className="flex justify-center items-center text-center min-h-screen">
            <div className="bg-gradient-to-br md:w-[380px] w-[270px] space-y-4 from-blue-400 px-3 py-4 rounded-md  via-slate-100  to-slate-300">
                <h1 className="text-xl font-semibold">Testimonial form created Successfully !! </h1>
                    <video autoPlay loop muted playsInline className="rounded-md w-full h-auto">
                        <source src="/successvideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                <Button title="Back to dashboard" variants="primary" onclick={() => router.back()}/>
                <div className="flex gap-3">
                    <div className="border-[1px] text-sm border-slate-300 w-full bg-slate-100 py-1 rounded-md md:px-3   ">
                        {`http://localhost:3000/collect/`}{formLink}
                    </div>
                    <Button icon={copied ?  <Check size={16}/> : <Copy size={16}/>} variants="primary" onclick={() => {
                        navigator.clipboard.writeText(`http://localhost:3000/collect/${formLink}`)

                        setCopie(true)

                        setTimeout(() => {
                            setCopie(false)
                        }, 3000);
                    }} />
                </div>
            </div>
        </div>
    }

    return (
        <div className="bg-slate-100 md:px-20  min-h-screen space-y-10 pb-10">
            <div className="flex flex-row bg-white borer-[2px] border-slate-300 md:gap-0 gap-3 shadow-sm shadow-slate-200  py-5 md:-mx-20 md:px-20 px-4 justify-between items-center">  
                <div>
                    <Button icon={<ArrowLeft className="md:size-5 size-5" />} variants="default" onclick={() => router.back()}/>
                </div>
                    <h1 className="font-semibold md:text-lg text-sm">Customize Testimonial Form</h1>
                <div className="">
                    <Button title="Preview" variants="primary" onclick={() => router.push(`/spaces/${spaceId}`)}/>
                    {/* <Button title="Save Form" variants="default" onclick={() => alert("Ad")}/> */}
                </div>
            </div>
            
            <div className="flex md:flex-row md:px-0 px-2 flex-col justify-between ">
                <DashboardCard>
                    <div className="text-start space-y-10 md:w-[850px] p-5">
                        <div className="space-y-1">
                            <h1 className="font-semibold text-xl">Form Structure</h1>
                            <p className="text-slate-600 text-sm">Customize your testimonial form structure and fields</p>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-5 border-b-[1px] border-slate-400 pb-10">
                                <h1 className="font-semibold">Basic Information</h1>
                                <InputBox ref={formTitleRef} type="text" label="Form Title" placeholder="Testimonial form name" />
                                <TextAreaComponent ref={formDescriptionRef} label="Form Description" placeholder="We'd love to hear about your experience with our product/service."/>
                            </div>
                            <div className="space-y-3 border-b-[1px] border-slate-400 pb-10 ">
                                <h1 className="font-semibold">Required Fields</h1>
                                <p className="text-sm text-slate-600">These fields are always required and cannot be removed.</p>
                                <div className="border-[2px] text-sm border-blue-600 flex gap-10 w-full bg-slate-100 py-2 rounded-md px-3   ">
                                    <h1 className="font-semibold">Name</h1> <h1 className="text-[10px] font-semibold bg-blue-400 px-2 rounded-2xl">Required*</h1>
                                </div>
                                <div className="border-[2px] text-sm border-blue-600 flex gap-10 w-full bg-slate-100 py-2 rounded-md px-3   ">
                                    <h1 className="font-semibold">Email</h1><h1 className="text-[10px] font-semibold bg-blue-400 px-2 rounded-2xl">Required*</h1>
                                </div>
                            </div>
                            <div className="space-y-3  pb-10 ">
                                <h1 className="font-semibold">Testimonial Questions </h1>
                                <p className="text-sm text-slate-600">You need to ask minimum three questions to your users to get their testimonials </p>
                                <InputBox ref={questionOneRef} type="text" label="Question 1" placeholder="Write your first question here ..." />
                                <InputBox ref={questionTwoRef} type="text" label="Question 2" placeholder="Write your second question here ..." />
                                <InputBox ref={questionThreeRef} type="text" label="Question 3" placeholder="Write your third question here ..." />
                                
                            </div>
                            
                        </div>

                    </div>
                </DashboardCard>
                
                <div>
                    <DashboardCard>
                        <div className="text-start space-y-5">
                            <div className="space-y-2 border-b-[1px] border-slate-400  pb-5">
                                <h1 className="font-semibold flex items-center gap-2"><Settings size={14}/>Form Settings</h1>
                                <p className="text-slate-600 text-sm">Customize your testimonial form structure and fields</p>
                            </div>
                            <div className="space-y-3">
                                <h1 className="font-semibold">Appearance</h1>
                                <InputBox ref={logoUrlRef} placeholder="https://logo.png" type="text" label="Place your logo URL*" />

                            </div>
                            <Button title="Create Form" processing={formcreating} processingText="creating form...." variants="primary" onclick={createForm}/>
                        </div>
                        
                    </DashboardCard>
                </div>
               
            </div>

        </div>
    )
    
}