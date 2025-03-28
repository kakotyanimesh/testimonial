"use client"
import TcardOne from "@repo/ui/tcardOne";
import VideoTestimonialCard from "./ui/videoTestimonial";
import Button from "@repo/ui/button";

export default function CustomerReview(){
    return (
        <div className="flex flex-col justify-center items-center text-center space-y-10">
            <div className="space-y-2">
                <h1 className="md:text-4xl text-2xl font-bold">Add Testimonials to Your Website With <span className="font-mono text-blue-500">No Coding!</span></h1>
                <p className="text-slate-500 text-sm md:text-lg">Copy and paste our <span className="font-mono p-2">HTML code</span> to add the Wall Of Love to your website.</p>
            </div>
            <div className="grid md:grid-cols-3 md:grid-rows-2 gap-1 md:mx-52">
                <div className="cols-span-1 row-span-1">
                    <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/>
                </div>
                <div className="cols-span-2 row-span-1">
                    {/* <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/> */}
                    <TcardOne stars={4} author="Animesh kakoyt" authorCompany="Kakoty100xdev" content={"ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page."} imageUrl="https://i.pravatar.cc/150?img=3" isActive={true}/>
                    
                    {/* <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/> */}
                    
                </div>
                <div className="cols-span-1 row-span-1">
                    <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/>
                </div>
                <div className="cols-span-1 row-span-1">
                    {/* <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/> */}
                    <TcardOne stars={4} author="Animesh kakoyt" authorCompany="Kakoty100xdev" content={"ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page."} imageUrl="https://i.pravatar.cc/150?img=3" isActive={true}/>
                    
                </div>
                <div className="cols-span-1 row-span-1">
                    <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/>
                </div>
                <div className="cols-span-1 row-span-1">
                    {/* <VideoTestimonialCard author="Animesh " authorCompany="CEO TITS.ai" url="/videoOne.mp4"/> */}
                    <TcardOne stars={4} author="Animesh kakoyt" authorCompany="Kakoty100xdev" content={"ProofCloud transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page."} imageUrl="https://i.pravatar.cc/150?img=3" isActive={true}/>
                    
                </div>
            </div>
            <div className="md:w-80 w-72">
                <Button title="View More" variants="default" onclick={() => alert("asdasd")}/> 
            </div>
        </div>
    )
}