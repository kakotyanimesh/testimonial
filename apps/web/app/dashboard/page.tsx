"use client"
import Button from "@repo/ui/button";
import InputBox from "@repo/ui/inputbox";
import { useState } from "react"
import { CirclePlus, Rocket } from "lucide-react"
import { Input } from "postcss";

export default function Space(){
    const [spaceModal, setspaceModal] = useState(false)
    return (
        <div className=" bg-slate-100 min-h-screen space-y-10">
            {/* navbar */}
            <div className="flex flex-row justify-between items-center md:px-40 py-4 bg-white border-b-[1px] border-slate-200">
                <h1 className="text-xl font-bold cursor-pointer">ProofCloud</h1>
                <div>
                    <Button style="" title="log out" variants="default" onclick={() => alert("Asdasd")}/>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center md:px-64">
                <h1 className="text-3xl font-bold cursor-pointer">Space</h1>
                <div>
                    <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/>
                </div>

                
            </div>
            {/* space */}
            <div className="flex flex-col justify-center space-y-5 items-center text-center bg-white md:mx-64 p-10 rounded-xl border-[1px] border-slate-200 ">
                <div className="bg-slate-200 size-14 flex justify-center items-center rounded-full"> 
                    <Rocket/>                    
                </div>
                <h1>No spaces yet</h1>
                {/* <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/> */}
                <div>
                    <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/>
                </div>

            </div>
            {/* modal */}
            <div >
                {
                    spaceModal &&  <div className="fixed flex justify-center items-center z-50 top-0 left-0 w-screen h-screen bg-blue-50">
                    <div className="w-[500px] bg-white p-10 space-y-5">
                        <div>
                            <h1 className="font-semibold">Create New Space</h1>
                            <p className="text-slate-500 text-sm">Create a new space to collect and manage testimonials.</p>
                        </div>
                        <InputBox placeholder="eg : my space one" type="text" label="Space Name"/>
                        <InputBox placeholder="www.animesh.kakoty.tech" type="text" label="website url"/>
                        <Button style="" title="Create Space" variants="primary" onclick={() => setspaceModal(!spaceModal)}/>
                        
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}