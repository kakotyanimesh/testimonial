import Button from "@repo/ui/button"
import { MessageSquare, Video, Link, Share2 } from 'lucide-react';
import DashboardCard from "@repo/ui/dashbaordcard"

export default function OverviewComponent({onAction} : {onAction : () => void}) {
    return (
        <div>
            <div className="space-y-10 text-center flex flex-col justify-center items-center">
                <div className="grid md:grid-cols-3 md:gap-14 gap-3">
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
                </div>
                <div className="flex md:flex-row flex-col gap-5">
                    <DashboardCard>
                        <div className="md:w-[500px] w-[250px] h-56 flex space-y-6 flex-col justify-center items-center ">
                            <h1 className="text-slate-700 font-semibold">Recent Testimonials</h1>
                            <div className="w-32">
                                <Button title="start collecting" variants="default" onclick={onAction}/> 
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
    {title : "Collection Form Views", number : 0}
]

const quickactionArray = [
    {title : "Add Text Testimonial", icon : <MessageSquare size={16}  />},
    {title : "Add video Testimonial", icon : <Video  size={16}  />},
    {title : "Copy collection link", icon : <Link size={16}  />},
    {title : "Embabed on website", icon : <Share2 size={16}  />}
]