"use client"
import { useState, useEffect } from "react"
import Button from '@repo/ui/button';
import { Rocket ,ChevronLeft, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function SideBar(){
    const [active, setActive] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
      const handleResize = () => {
        setActive(window.innerWidth >= 768)
      }
      handleResize()
      console.log(pathname);
      
      window.addEventListener("resize", handleResize)
    
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])
    
    return (
        <div className={`flex flex-col h-screen justify-between pt-4 border-r-2 bg-white ${active ? "w-56" : "w-20"}`}>
            <div className='space-y-5'>
                <div className='relative border-b-2 -ml-4 pb-2 px-4 flex justify-between items-center'>
                    <h1 className="text-xl font-bold  cursor-pointer">{active ? "ProofCloud" : "PC" }</h1>
                    <button className={`absolute ${active ? "-right-4 size-8" : "-right-4 size-7"} border-slate-300 bg-slate-300 border-2 rounded-full items-center flex  justify-center size-10`} onClick={() => setActive(!active)}>
                        <ChevronLeft />
                    </button>
                </div>
                {
                    active ? (
                        <div className='space-y-3'>
                            {
                                sidebarArray.map((s, k) => (
                                    <Link href={s.src} key={k} className={`flex items-center gap-3 text-sm text-semibold  w-52 p-2 rounded-md ${pathname === s.src ? "bg-blue-700 text-white" : "text-black"} `}>
                                        {s.icon}{s.title}
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='space-y-3'>
                        {
                            sidebarArray.map((s, k) => (
                                <Link href={s.src} key={k} className={`flex justify-center items-center gap-3 text-sm  p-2 rounded-md w-16 text-semibold ${pathname === s.src ? "bg-blue-700 text-white" : "text-black"} `}>
                                    {s.icon}
                                </Link>
                            ))
                        }
                        </div>
                    )
                }
            </div>
            <div className='relative bottom-10'>
                <Button style={`${active ? "w-48" : "w-16"}`} title='log out' variants='default' onclick={() => alert("asdas")}/>
            </div>
        </div>
    )
}

const sidebarArray = [
    // { title : "dashboard", src : "/dashboard",index : 1 , icon : <LayoutDashboard size={16} />},
    { title : "space", src : "/space", index : 2 , icon: <Rocket  size={16}/>},
    { title : "settings", src : "/space/settings",index : 3 , icon : <Settings size={16} />}
]