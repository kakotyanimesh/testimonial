import Button from "@repo/ui/button";
import DashboardCard from "@repo/ui/dashbaordcard";
import { NotebookPen, Copy, Check, Trash2  } from "lucide-react"
import { useState, useEffect } from "react"
import { deleteTestimonialFormCall, getTestimonialFormDataCall } from "../../../utils/api";
import { TestimonialQuestionsInterface } from "../../../utils/types";
import { useRouter } from "next/navigation";

export default function CollectionComponent({spaceId} : {spaceId : number | undefined}) {
    const [copied, setCopied] = useState(10)
    const [testimonialQuestions, setTestimonialQuestions] = useState<TestimonialQuestionsInterface[]>([])
    const testimonialLink = "http://localhost:3000/collect/"
    const router = useRouter()

    const getTestimonialFormData = async () => {
        try {
            const spaceIdNumber = Number(spaceId)
            const res = await getTestimonialFormDataCall({spaceId : spaceIdNumber})

            // console.log(res);
            setTestimonialQuestions(res)
            console.log(res);   
            
            
        } catch (error) {
            console.error("error at frontend ", error)
        }
      }

    useEffect(() => {
      getTestimonialFormData()
    }, [])

    
    
    return (
        <div className="flex flex-col gap-10 justify-center items-center mx-5">
            <div className="grid md:grid-cols-2 gap-10">
                <DashboardCard>
                    <div className="space-y-5 text-center">
                        <h1 className="font-semibold">Form Customization</h1>
                        <p className="text-sm text-slate-600">Create a beautiful, branded testimonial collection form for your customers.</p>

                          {/* <Button title="customize your form" icon={<NotebookPen />}  variants="primary" onclick={() => window.open(`/testimonialform?spaceId=${spaceId}`, "_blank")}/> */}
                          {/* here change commenting it  */}
                          <div>
                          {/* <a href={`/testimonialform?spaceId=${spaceId}`}  target="_blank" rel="noopener noreferrer"> */}
                            <Button title="customize your form" processingText="...." icon={<NotebookPen />}  variants="primary" onclick={() => router.push(`/testimonialform?spaceId=${spaceId}`)} />

                          {/* </a> */}
                          </div>

                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="space-y-5 text-center">
                        <h1 className="font-semibold">Form Customization</h1>
                        <p className="text-sm text-slate-600">Create a beautiful, branded testimonial collection form for your customers.</p>

                          {/* <Button title="customize your form" icon={<NotebookPen />}  variants="primary" onclick={() => window.open(`/testimonialform?spaceId=${spaceId}`, "_blank")}/> */}
                          {/* here change commenting it  */}

                          <div>
                          {/* <a href={`/testimonialform?spaceId=${spaceId}`} target="_blank" rel="noopener noreferrer" > */}
                          <Button title="customize your form" icon={<NotebookPen />}  variants="primary" onclick={() => router.push(`/testimonialform?spaceId=${spaceId}`)}/>

                          {/* </a> */}
                          </div>

                    </div>
                </DashboardCard>
            </div>
            <div className="">
            {testimonialQuestions.map((t, k) => (
                <div key={k}>
                    <DashboardCard> 
                        <div className="space-y-5 text-center md:w-[600px]">
                            <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
                                <h1 className="font-semibold">{t.formTitle}</h1>
                                <div className="flex flex-row gap-2">
                                    {/* <Button icon={<NotebookPen size={16}/>} title="customize form" variants="default" onclick={() => window.open(`/testimonialform?spaceId=${spaceId}`, "_blank")}/> */}
                          {/* here change commenting it  */}

                                    {/* <a href={`/testimonialform?spaceId=${spaceId}`} target="_blank" rel="noopener noreferrer"> */}
                                        <Button icon={<NotebookPen size={16}/>} title="customize form" variants="default" onclick={() => router.push(`/testimonialform?spaceId=${spaceId}`)}/>

                                    {/* </a> */}
                                    <Button icon={<Trash2 size={16}/>} variants="default" onclick={async() => {
                                        await deleteTestimonialFormCall(t.uniqueLink)
                                        getTestimonialFormData()
                                    }} />
                                </div>
                            </div>
                            <p className="text-sm text-slate-600">{t.formDescripton}</p>
                            <div className="flex md:flex-row flex-col md:gap-4 gap-4">
                                <div className="border-[1px] text-sm border-slate-300 w-full bg-slate-100 py-1 rounded-md md:px-3   ">
                                    {testimonialLink}{t.uniqueLink}
                                </div>
                                <div>
                                    <Button icon={copied === k ? <Check size={16}/> : <Copy size={16}/>} variants="default" onclick={() => {
                                        navigator.clipboard.writeText(`${testimonialLink}${t.uniqueLink}`)
                                        setCopied(k)

                                        setTimeout(() => {
                                            setCopied(10)
                                        }, 3000);
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </DashboardCard>
                </div>
            ))}
            </div>
        </div>
    )
}