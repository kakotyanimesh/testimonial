"use client"
import { useRef, useState } from "react"
import Button from "@repo/ui/button"
import InputBox from "@repo/ui/inputbox"
import { signupcall } from "../../../utils/api"
import { useRouter } from "next/navigation"

export default function Signup(){
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()
    const [processing, setProcessing] = useState<boolean>(false)

    const signup = async () => {
        try {
            setProcessing(true)
            await signupcall({username : usernameRef.current?.value || "", password : passwordRef.current?.value || "", email : emailRef.current?.value || "" })
            // console.log("signup successfull ");
            setProcessing(false)
            router.push( "/signin")
            
        } catch (error) {
            console.error(`error at signup ${error}`);
            router.push("/signup")
            
        }
    }
    return (
        <div className="flex flex-col items-center mt-20 space-y-4">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-bold">Create Your account</h1>
                <p className="text-sm text-slate-700">Start your 14 days free trial. No credit card required</p>
            </div>
            <div className="border-[1px] border-slate-200 rounded-xl space-y-2 w-fit py-4 px-10">
                <h1 className="md:text-2xl text-xl font-semibold">Signup </h1>
                <div className="space-y-5">
                    <InputBox ref={usernameRef} type="text" label="username" placeholder="animesh33"/> 
                    <InputBox ref={passwordRef} type="password" label="password" placeholder="QWDC@1223"/>
                    <InputBox ref={emailRef} type="email" label="email" placeholder="animeshkakoty33@gmail"/> 
                    <p className="text-sm">
                        <input type="checkbox" className=""/> I agree to the <a href="" className="text-blue-600 mr-1">Terms of Service</a> and <a href="" className="text-blue-600">Privacy Policy</a>
                    </p>
                    <Button processing={processing} processingText="creating account..." variants="primary" onclick={signup}  title="Create Account"/>
                    
                </div>
                
            </div>
        </div>
    )
}