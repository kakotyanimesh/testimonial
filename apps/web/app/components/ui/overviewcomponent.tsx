import Button from "@repo/ui/button"
import { MessageSquare, Video, Link, Share2 } from 'lucide-react';
import DashboardCard from "@repo/ui/dashbaordcard"
import { Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { apikeycall, getAPIcall } from "../../../utils/api";

export default function OverviewComponent({onAction, spaceId} : {onAction : () => void, spaceId : string}) {
    const [copied, setcopied] = useState(false)

    const [apikey, setApikey] = useState<string | null>()

    useEffect(() => {
      const getApikey = async () => {
        const res = await getAPIcall(Number(spaceId))

        setApikey(res)
      }
    
      getApikey()
    }, [])
    

    const generateAPI = async() => {
        try {
            const res = await apikeycall(Number(spaceId))
            setApikey(res)
            console.log(res);
            
            // setisApikeygenerated(true)
        } catch (error) {
            console.error(`error api key ${error}`)
        }
    }
    return (
        <div>
            <div className="space-y-10 text-center flex flex-col justify-center items-center">
                <div className="grid md:grid-cols-3 md:gap-5 gap-3">
                    {
                        dashbaordcardArray.map((d, k) => (
                            <DashboardCard key={k}>
                                <div className="md:w-72 w-60 h-20 text-start group">
                                    <h1 className="font-semibold text-lg">{d.title}</h1>
                                    <h1 className="font-semibold group-hover:text-slate-500 transition-colors ease-linear text-2xl">{d.number}</h1>
                                </div>
                            </DashboardCard>
                        ))
                    }
                    <DashboardCard>
                        <div className="md:w-96 w-60 space-y-4">
                            <h1 className="font-semibold text-lg">API KEY </h1>
                            <div className="flex gap-2 md:flex-row flex-col ">
                                <div className="border-[1px] text-sm border-slate-300 bg-slate-100 py-1 rounded-md md:px-3  w-full max-w-md p-4 overflow-x-auto whitespace-nowrap ">
                                       {apikey ? apikey : "Click to generate an api key "}
                                </div>
                                <div>
                                    {
                                        apikey ? (
                                            <Button icon={copied ?  <Check size={16}/> : <Copy size={16}/> } variants="default"  onclick={() => {
                                                navigator.clipboard.writeText(apikey)
                                                setcopied(!copied)
    
                                                setTimeout(() => {
                                                    setcopied(false)
                                                }, 3000);
    
                                            }}/> 
                                        ): <Button title="generate api key" variants="primary" onclick={generateAPI} />
                                    }
                                </div>
                            </div> 
                        </div> 
                    </DashboardCard>
                </div>
                <div className="flex md:flex-row flex-col gap-5">
                    <DashboardCard>
                        <div className="md:w-[500px] w-[250px] h-56 flex space-y-6 flex-col justify-center items-center ">
                            <h1 className="text-slate-700 font-semibold">Recent Testimonials</h1>
                            <div className="w-32">
                                <Button title="start collecting" variants="default" onclick={onAction}/> 
                                {/* <Button title="Generate API key " variants="default" onclick={onAction}/>  */}
                            </div>
                        </div>
                    </DashboardCard>
                    
                    <DashboardCard>
                        <div className="md:w-[500px] w-[250px] h-60 text-center  flex space-y-6 flex-col justify-center items-center ">
                            <h1 className="text-slate-700 font-semibold">Quick Actions </h1>
                            <div className="grid grid-cols-2 gap-5">
                                {
                                    quickactionArray.map((q, i) => (
                                        <button key={i} className="text-sm group hover:bg-slate-300 transition-colors ease-linear font-semibold bg-slate-200 border-[1px] flex flex-col justify-center items-center text-center border-slate-300 cursor-pointer rounded-md px-5 py-4">
                                            <h1 className="group-hover:text-slate-700">{q.title}</h1>
                                            <div className="group-hover:text-slate-700">
                                                {q.icon}
                                            </div>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </DashboardCard>
                </div>
            </div>
        </div>
    )
}



const dashbaordcardArray = [
    {title : "Testimonial Number", number : 0},
    {title : "Average Rating", number : 0},
]

const quickactionArray = [
    {title : "Add Text Testimonial", icon : <MessageSquare size={16}  />},
    {title : "Add video Testimonial", icon : <Video  size={16}  />},
    {title : "Copy collection link", icon : <Link size={16}  />},
    {title : "Embabed on website", icon : <Share2 size={16}  />}
]