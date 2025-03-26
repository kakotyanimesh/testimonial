"use client"
import Link from "next/link"
import Button from "@repo/ui/button"
import { Menu, X } from 'lucide-react';
import { useState } from "react";

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState<boolean>(true)
    
    return (
        <div className="flex flex-row justify-between text-center items-center  py-4 -mx-10 px-10  border-b-2 border-slate-100  ">
            <div className="flex gap-20 items-center justify-center text-center">
                <h1 className="font-bold text-xl text-black">ProofCloud</h1>
                
                <div className="md:flex hidden gap-10">
                {
                    navbarArray.map((n, k) => (
                        <Link className="hover:text-blue-700 transition-colors delay-75 cursor-pointer" href={n.src}  key={k}>{n.title}</Link>
                    ))
                }
                </div>
            </div>
            <div className="md:flex hidden gap-5">
                <Button title="Sign In" onclick={() => alert("asdasd")} variants="default"  />
                <Button title="Start Your Free Trial" onclick={() => alert("asdasd")} variants="primary"  />
            </div> 
            <div className="md:hidden flex">
                <button onClick={() => setOpenMenu(!openMenu)}>
                   {openMenu ? <Menu/> : <X/>}
                </button>
            </div>
            {
                !openMenu && (<div className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center space-y-6 text-center px-10">
                    <button onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <Menu/> : <X/>}
                    </button>
                    {
                        navbarArray.map((n, k) => (
                            <Link href={n.src}  className="hover:text-blue-700 transition-colors delay-75 cursor-pointer" key={k}>{n.title}</Link>
                        ))
                    }
                    
                        <Button style="text-sm"  title="Sign In" onclick={() => alert("asdasd")} variants="default"  />
                        <Button style="text-sm" title="Start Your Free Trial" onclick={() => alert("asdasd")} variants="primary"  />

                </div>
                
            )
            }

        </div>
    )
}


const navbarArray = [
    {title : "Features", src : "/features"},
    {title : "Customers", src : "/customers"},
    {title : "Pricing", src : "Pricing"}
]