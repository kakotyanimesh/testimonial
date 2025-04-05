import Button from "@repo/ui/button";
import DashboardCard from "@repo/ui/dashbaordcard";
import { NotebookPen, Copy, Check } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CollectionComponent() {
    const [copied, setCopied] = useState(false)
    const testimonialLink = "https://customerch.app/t/customer-testimonials"
    // const router = useRouter()

    const copytoclipboard = () => {
        navigator.clipboard.writeText(testimonialLink)
        setCopied(true)


        setTimeout(() => {
            setCopied(false)
        }, 3000);

    }
    return (
        <div className="flex md:flex-row flex-col gap-10 justify-center mx-5">
            <DashboardCard>
                <div className="space-y-5 text-center">
                    <h1 className="font-semibold">Form Customization</h1>
                    <p className="text-sm text-slate-600">Create a beautiful, branded testimonial collection form for your customers.</p>
                    
                      <Button title="customize your form" icon={<NotebookPen />}  variants="primary" onclick={() => window.open("/testimonialform", "_blank")}/>
                    
                </div>
            </DashboardCard>
            <DashboardCard>
                <div className="space-y-5 text-center">
                    <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
                        <h1 className="font-semibold">Collection Form</h1>
                        <div className="">
                            <Button icon={<NotebookPen size={16}/>} title="customize form" variants="default" onclick={() => window.open("/testimonialform", "_blank")}/>

                        </div>
                    </div>
                    <p className="text-sm text-slate-600">Create a beautiful, branded testimonial collection form for your customers.</p>
                    
                    <div className="flex md:flex-row flex-col md:gap-10 gap-4">
                        <div className="border-[1px] text-sm border-slate-300 w-full bg-slate-100 py-1 rounded-md md:px-3   ">
                            {testimonialLink}
                        </div>
                        <div>
                            <Button icon={copied ? <Check size={16}/> : <Copy size={16}/>} variants="default" onclick={copytoclipboard}/>

                        </div>
                    </div>
                    
                </div>
            </DashboardCard>
        </div>
    )
}