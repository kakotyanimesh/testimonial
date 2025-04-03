"use client"

import React, { use, useEffect, useState } from "react"
import { getonespacedatacall } from "../../../utils/api"
import Button from "@repo/ui/button"

export default function  IndividualPage({params} : {
    params : Promise<{
        id : string
    }>
}){
    const { id } = use(params)
    const [spacedata, setSpacedata] = useState([])

    useEffect(() => {
      const getdata = async () =>{
        try {
            const data = await getonespacedatacall({id})

        setSpacedata(data)
        } catch (error) {
            console.error(error);
            
        }

      }
        
      getdata()
    }, [])
    
    return (
        <div className="md:px-32 bg-slate-100 min-h-screen space-y-10">
            <div className="flex flex-row borer-[2px] border-slate-300 shadow-sm shadow-slate-200 justify-between items-center py-4 bg-white text-center md:-mx-32 md:px-32 px-3">
                {/* navbar*/}
                <h1 className="font-semibold">Space Title</h1>
                <div className="flex flex-row justify-between md:gap-10 gap-2">
                    <Button title="Copy display link" variants="primary" onclick={() => alert("Asdasda")}/>
                    <Button title="settings" variants="default" onclick={() => alert("Adads")}/>
                </div>
            </div>
            <h1>{JSON.stringify(spacedata)}</h1>
        </div>
    )
}