"use client"
import { useRef } from "react"
import Button from "@repo/ui/button";
import DashboardCard from "@repo/ui/dashbaordcard";
import InputBox from "@repo/ui/inputbox";
import TextAreaComponent from "@repo/ui/textarea"
import { Settings } from "lucide-react"
import { useSearchParams } from "next/navigation";
import { createFormcall } from "../../utils/api";

export default function TestimonailForm(){
    const searchParams = useSearchParams()
    const spaceId = searchParams.get("spaceId")

    const formTitleRef  = useRef<HTMLInputElement | null>(null)
    const formDescriptionRef = useRef<HTMLTextAreaElement  | null>(null)
    const questionOneRef = useRef<HTMLInputElement | null>(null)
    const questionTwoRef = useRef<HTMLInputElement | null>(null)
    const questionThreeRef = useRef<HTMLInputElement | null>(null)
    const logoUrlRef = useRef<HTMLInputElement | null>(null)

    const createForm = async () => {
        try {
            const res = await createFormcall({
                spaceId : Number(spaceId) || 12,
                questionOne : questionOneRef.current?.value || "",
                questionTwo: questionOneRef.current?.value || "",
                questionThree: questionThreeRef.current?.value || "",
                formDescripton: formDescriptionRef.current?.value || "",
                formTitle : formTitleRef.current?.value || ""
            })

            console.log(res);
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="bg-slate-100 md:px-20  min-h-screen space-y-10 pb-10">
            <div className="flex flex-row bg-white borer-[2px] border-slate-300 shadow-sm shadow-slate-200  py-5 md:-mx-20 md:px-20 px-4 justify-between items-center">  
                <h1 className="font-semibold text-lg">Customize Testimonial Form</h1>
                <div className="">
                    <Button title="Preview" variants="primary" onclick={() => alert(formTitleRef.current?.value)}/>
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
                            {/* <div className="space-y-5 border-b-[1px] border-slate-400 pb-10">
                                <h1 className="font-semibold">More survey question </h1>
                                <div>
                                    <Button title="add additional Question" variants="default" onclick={() => }/>
                                </div>
                                
                                
                            
                            </div> */}
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
                            <Button title="Create Form" variants="primary" onclick={createForm}/>
                        </div>
                        
                    </DashboardCard>
                </div>
               
            </div>

        </div>
    )
    
}