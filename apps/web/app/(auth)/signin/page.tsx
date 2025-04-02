"use client"

import { useRef, useState } from "react"
import Button from "@repo/ui/button"
import InputBox from "@repo/ui/inputbox"
import { useRouter } from "next/navigation"
import { signincall } from "../../../utils/api"
export default function Signin(){
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()
    const [processing, setProcessing] = useState(false)

    const signin = async () => {
        try {
            setProcessing(true)
            await signincall({username : usernameRef.current?.value || "", password : passwordRef.current?.value || ""})
            // if(res.status === 404 || !res){
            //     alert("user doesnot exits signup")
            //     return
            // } 
            setProcessing(false)
            router.push("/dashboard")
        } catch (error) {
            if(error instanceof Error && (error as any).status === 404){
                alert("user doestnot exits signup")
                router.push("/signup")
            } else {
                console.error(`error at signin ${error}`)
                router.push("/signin")
            }
        }
    }

    return (
        <div className="flex flex-col items-center mt-20 space-y-4 ">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-sm text-slate-700">Log in to your Testimonial account</p>
            </div>
            <div className="border-[1px] md:w-96 border-slate-200 rounded-xl space-y-2 py-4 px-10">
                <h1 className="md:text-2xl text-2xl font-semibold">Login </h1>
                <div className="space-y-5">
                    <InputBox ref={usernameRef} type="text" label="username" placeholder="animesh33"/> 
                    <InputBox ref={passwordRef} type="password" label="password" placeholder="QWDC@1223"/>
                    <p className="text-sm">
                        <input type="checkbox" className="mr-2"/>Remember Me
                    </p>
                    <Button variants="primary" processing={processing} processingText="signing in ...." onclick={signin} title="Log In "/>
                    <p className="flex items-center text-sm">
                        Don't have an account ?<a href="" className="text-blue-700 ml-2">Sign up</a>
                    </p>
                </div>
                
            </div>
        </div>
    )
}