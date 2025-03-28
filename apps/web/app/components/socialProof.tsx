import Scard, { ScardProps } from "@repo/ui/card"
import { Link2, Video,Smartphone,ChartColumn,MessageCircle ,Gift  } from "lucide-react"

export default function SocialProof(){
    return (
        <div className="flex justify-center flex-col space-y-10 items-center text-center">
            <div className="flex flex-col justify-center items-center text-center space-y-5">
                <h1 className="flex md:gap-3 gap-1 border-slate-100 border-2 w-fit items-center px-5 py-1 rounded-3xl text-blue-500 animate-pulse text-sm transition-all"><span className="font-bold">•</span>Social Proof</h1>
                <h1 className="md:text-4xl font-bold text-xl tracking-tight">Everything You <span className="text-blue-400">Need</span> for Social Proof</h1>
            </div>
            <div className="grid md:grid-cols-3 justify-center md:mx-20 items-center gap-2">
                <div className="space-y-1">
                  {socialProofArrayOne.map((s, k) => (
                    <Scard title={s.title} desc={s.desc} icon={s.icon} key={k}/> 
                  ))}
                </div>
                <div className="">
                  <Scard title="Simple Collection" desc="Create shareable links to collect testimonials from your customers in minutes." icon={<Link2/>}/>
                  {/* <Scard title="Simple Collection" desc="Create shareable links to collect testimonials from your customers in minutes." icon={<Link2/>}/> */}
                </div>
                <div className="space-y-1">
                  {
                    socialProofArrayTwo.map((s, k) => (
                      <Scard title={s.title} desc={s.desc} icon={s.icon} key={k}/>
                    ))
                  }
                </div>
            </div>
        </div>
    )
}



const socialProofArrayOne : ScardProps[] = [
      {
        title: "Video Testimonials",
        desc: "Collect and showcase powerful video testimonials alongside text reviews.",
        icon : <Video/>
      },
      // {
      //   title: "Customizable Display",
      //   desc: "Create beautiful, branded testimonial walls that match your website's design.",
      //   icon : <Smartphone/>
      // },
      {
        title: "Rich Analytics",
        desc: "Gain insights into how your testimonials are performing with detailed metrics.",
        icon : <ChartColumn/>
      }
]


const socialProofArrayTwo : ScardProps[] = [
      {
        title: "Social Integration",
        desc: "Automatically pull in reviews from social platforms and review sites.",
        icon : <MessageCircle/>
      },
      {
        title: "Reward System",
        desc: "Incentivize customers to leave testimonials with customizable rewards.",
        icon : <Gift/>
      } 
]