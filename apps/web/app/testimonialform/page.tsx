"use client"
import Button from "@repo/ui/button";
import DashboardCard from "@repo/ui/dashbaordcard";
import InputBox from "@repo/ui/inputbox";
import TextAreaComponent from "@repo/ui/textarea"
import OptionalTestimonialFill from "@repo/ui/optionalTestimonialfiled"

export default function TestimonailForm(){
    return (
        <div className="bg-slate-100 md:px-20  min-h-screen space-y-10">
            <div className="flex flex-row bg-white borer-[2px] border-slate-300 shadow-sm shadow-slate-200  py-5 md:-mx-20 md:px-20 px-4 justify-between items-center">  
                <h1 className="font-semibold text-lg">Customize Testimonial Form</h1>
                <div className="">
                    <Button title="Preview" variants="primary" onclick={() => alert("Ad")}/>
                    {/* <Button title="Save Form" variants="default" onclick={() => alert("Ad")}/> */}
                </div>
            </div>
            <div className="flex md:flex-row md:px-0 px-2 flex-col justify-between items-center ">
                <DashboardCard>
                    <div className="text-start space-y-10 md:w-[850px] p-5">
                        <div className="space-y-1">
                            <h1 className="font-semibold text-xl">Form Structure</h1>
                            <p className="text-slate-600 text-sm">Customize your testimonial form structure and fields</p>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-5 border-b-[1px] border-slate-400 pb-10">
                                <h1 className="font-semibold">Basic Information</h1>
                                <InputBox type="text" label="Form Title" placeholder="Testimonial form name" />
                                <TextAreaComponent label="Form Description" placeholder="We'd love to hear about your experience with our product/service."/>
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
                            <div className="space-y-5 border-b-[1px] border-slate-400 pb-10">
                                <h1 className="font-semibold">Optional Fields</h1>
                                
                                <OptionalTestimonialFill/>
                            
                            </div>
                        </div>

                    </div>
                </DashboardCard>
                <DashboardCard>
                    div two
                </DashboardCard>
            </div>

        </div>
    )
    
}