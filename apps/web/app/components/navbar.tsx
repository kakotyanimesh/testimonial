"use client"

import Button from "@repo/ui/button"
import Link from "next/link"
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar(){
    const [mobile, setMobile] = useState<boolean>(false)
    const router = useRouter()
    
    return (
        <div className="md:-mx-20  -mx-3  md:px-20 px-3 pb-4 border-b-2 border-slate-100">
            <div className="md:flex hidden flex-row items-center justify-between">
                <div className="flex flex-row gap-20 items-center">
                    <h1 className="text-xl font-bold cursor-pointer">ProofCloud</h1>
                    <div className="flex flex-row gap-10">
                        {
                            navbarArray.map((n,k) => (
                                <Link className="text-sm font-semibold cursor-pointer hover:text-blue-500 transition-colors delay-100 ease-out" href={n.src} key={k}>{n.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="space-x-5 flex ">
                    <Button title="Sign up" variants="primary" onclick={() => router.push("/signup")}/>
                    <Button title="Log in" variants="default" onclick={() => router.push("/signin")}/>
                </div>
            </div>
            <div className="md:hidden flex justify-between">
                <h1 className="text-xl font-bold">ProofCloud</h1>
                <button onClick={() => setMobile(!mobile)}>
                    {
                        !mobile ? <Menu size={20}/> : <X size={20}/>
                    }
                </button>
                {
                    mobile && <div className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center text-center space-y-5">
                        <button className="bg-blue-500 p-2 rounded-md" onClick={() => setMobile(!mobile)}><X size={20}/></button>
                        {
                            navbarArray.map((n,k) => (
                                <Link className="cursor-pointer hover:text-blue-500 transition-colors delay-100 ease-out" href={n.src} key={k}>{n.title}</Link>
                            ))
                        }
                        <div className="flex flex-col space-y-5">
                            <Button title="Sign in" variants="primary" onclick={() => alert("adasd")}/>
                            <Button title="Start Your free trial" variants="default" onclick={() => alert("adasd")}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


const navbarArray = [
    {title : "Features", src : "/features"},
    {title : "Customers", src : "/customers"},
    {title : "Pricing", src : "/pricing"}
]