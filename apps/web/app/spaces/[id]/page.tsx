"use client"

import React, { use, useEffect, useState } from "react"
import { getonespacedatacall } from "../../../utils/api"
import Button from "@repo/ui/button"
import OverviewComponent from "../../components/ui/overviewcomponent"
import CollectionComponent from "../../components/ui/collectioncomponent"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getAllTestimonialCall } from "../../../utils/testimonial.api"
import { TestimonialData } from "../../../utils/types"
import TestimonailComponent from "../../components/ui/testimonialcomponent"

export default function  IndividualPage({params} : {
    params : Promise<{
        id : string,
        name : string
    }>
}){
    const resolvedParams = use(params)
    const { id } = resolvedParams || {}
    const [spacedata, setSpacedata] = useState<{id : number, name : string, adminId : string, displayName : string}>()
    const [spacebarNumber, setSpacebarNumber] = useState(0)
    const router = useRouter()
    const [testimonials, settestimonials] = useState<TestimonialData[]>([])
    const [starts, setStarts] = useState<string | null>(null)

    const fetchedTestimonialData = async () => {
        try {
            const res = await getAllTestimonialCall(id)

            // console.log(res);
            
            settestimonials(res)
            
            // console.log(testimonials);
            
        } catch (error) {
            console.error("error while fetching testimonial data", error)
        }
        }

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
      fetchedTestimonialData()

      
    }, [])

    // console.log(spacedata.name);
    
    // console.log(spacedata.spaceData.name);

    // console.log(testimonials.map((t) => t.stars));
    // console.log(testimonials);
    
    // console.log(testimonials.map((t) => t.stars).reduce((prev, curr) => prev + curr, 0));
    
    // setStarts(testimonials.map((t) => t.stars).reduce((acc, curr) => acc + curr, 0))

    const renderTab = () => {
        switch (spacebarNumber) {
            case 0:
                return <OverviewComponent stars={10} testimonialNumbers={testimonials.length} onAction={() => setSpacebarNumber(2)} spaceId={id}/>
            case 1: 
                return <TestimonailComponent/>
            case 2 : 
                return <CollectionComponent spaceId={spacedata?.id}/>
            case 3 : 
                return <div>Display</div>
            case 4 : 
                return <div>Analytics</div>
            default : 
                return <OverviewComponent stars={10} testimonialNumbers={testimonials.length} onAction={() => setSpacebarNumber(2)} spaceId={id}/>
        
        }
    }
    
    
    return (
        <div className="md:px-32 bg-slate-100 min-h-screen space-y-10">
            <div className="flex flex-row borer-[2px] border-slate-300 shadow-sm shadow-slate-200 justify-between items-center py-4 bg-white text-center md:-mx-32 md:px-32 px-3">
                {/* navbar*/}
                <div className="flex  items-center gap-5 justify-between">
                    <div>
                        <Button icon={<ArrowLeft className="md:size-5 size-5" />} variants="default" onclick={() => router.back()}/>

                    </div>
                    <h1 className="font-semibold">Testimonial Review Page </h1>

                </div>
                <div className="flex flex-row justify-between md:gap-10 gap-2">
                    <Button title="Log Out" variants="primary" onclick={() => console.log(spacedata)}/>
                    {/* <Button title="settings" variants="default" onclick={() => alert("Adads")}/> */}
                </div>
            </div>
            {/* <h1>{JSON.stringify(spacedata)}</h1> */}
            <div className="flex flex-row md:gap-4 bg-slate-200 rounded-md w-fit py-1">
                {
                    spaceBaArray.map((s, i) => (
                        <button key={i} onClick={() => setSpacebarNumber(i)} className={`text-sm font-semibold transition-colors duration-200 md:px-2 px-1 py-1 rounded-md ${spacebarNumber === i ? "bg-white " : undefined }`} >{s.itemname}</button>
                    ))
                }

            </div>
            {/* we are going to render this on the basic of spacebar thingy  */}
            {/* {
                spacebarNumber === 0 ? <OverviewComponent stars={10} testimonialNumbers={testimonials.length} onAction={() => setSpacebarNumber(2)} spaceId={id}/> : <CollectionComponent spaceId={spacedata?.id}/>
            } */}
            {
                renderTab()
            }

            
        </div>
    )
}


const spaceBaArray = [
    {itemname : "Overview", isActive : 0},
    {itemname : "Testimonail", isActive : 1},
    {itemname : "Collect", isActive : 2},
    {itemname : "Display", isActive : 3},
    {itemname : "Analytics", isActive : 4}
]



