"use client"

import Button from "@repo/ui/button"
import InputBox from "@repo/ui/inputbox"
export default function Signup(){
    return (
        <div className="flex flex-col items-center mt-20 space-y-4">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-bold">Create Your account</h1>
                <p className="text-sm text-slate-700">Start your 14 days free trial. No credit card required</p>
            </div>
            <div className="border-[1px] border-slate-200 rounded-xl space-y-2 w-fit py-4 px-10">
                <h1 className="md:text-2xl text-xl font-semibold">Signup </h1>
                <div className="space-y-5">
                    <InputBox type="text" label="username" placeholder="animesh33"/> 
                    <InputBox type="password" label="password" placeholder="QWDC@1223"/>
                    <InputBox type="email" label="email" placeholder="animeshkakoty33@gmail"/> 
                    <p className="text-sm">
                        <input type="checkbox" className=""/> I agree to the <a href="" className="text-blue-600 mr-1">Terms of Service</a> and <a href="" className="text-blue-600">Privacy Policy</a>
                    </p>
                    <Button variants="primary" onclick={() => alert("ASdasd")} title="Create Account"/>
                    
                </div>
                
            </div>
        </div>
    )
}