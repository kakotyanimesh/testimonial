"use client"
import Button from "@repo/ui/button";
import Navbar from "./components/navbar";
import TestimonialCardOne, { TestimonialCardOneProps }  from "@repo/ui/testimonialCardOne"

export default function Page(){
  return (
    <div className="md:space-y-32 space-y-20 px-10">
      <Navbar/>
      <div className="flex flex-col justify-center items-center  gap-10">
        <div className="space-y-5 flex flex-col justify-center items-center">
          <div className="bg-slate-100 w-fit  md:px-5 px-1 py-1 rounded-xl"> 
            <h1 className="text-sm text-blue-600 animate-pulse delay-350 transition-all items-center flex gap-2"><span className="text-xl text-blue-600">•</span> Customer Testimonials Reimagined</h1>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Turn Customer <span className="text-blue-600">Voices</span> Into Social Proof
          </h1>
          <p className="text-slate-600 md:text-xl">
            Collect, manage, and showcase authentic testimonials that build trust and drive conversions.            
          </p>
          <div className="flex md:flex-row flex-col  md:gap-5 gap-2">
            <Button title="Start a Free Trail" variants="default" onclick={() => alert("sfdsdf")} />
            <Button title="See Live Demo" variants="primary" onclick={() => alert("sfdsdf")} />
          </div>
        </div>
        <div className="max-w-[700px] space-y-5">
          <TestimonialCardOne isActive={true} imageurl="https://i.pravatar.cc/150?img=3" author="Animesh kakoty" authorCompanyName="Marketing Director at TechSolutions Inc." stars={3} content="CustomerCherish transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page." />
          <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-6">
              {
                TestimonialOneCardArray.map((t, k) => (
                  <TestimonialCardOne authorCompanyName={t.authorCompanyName} author={t.author} isActive={t.isActive} imageurl={t.imageurl} content={t.content} stars={t.stars} key={k}/>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}


const TestimonialOneCardArray :TestimonialCardOneProps[] = [
  {
    isActive : false,
    imageurl : "https://i.pravatar.cc/150?img=3",
    author : "Animesh kakoty", 
    authorCompanyName : "Animesh kakotyPVT LTD",
    content : `"CustomerCherish transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page."`,
    stars : 3
  },
  {
    isActive : false,
    imageurl : "https://i.pravatar.cc/150?img=3",
    author : "Animesh kakoty", 
    authorCompanyName : "Animesh kakotyPVT LTD",
    content : `"CustomerCherish transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their testimonial wall to our landing page."`,
    stars : 3
  }
]