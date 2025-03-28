"use client"

import { useState} from "react"
import PricingCard  from "@repo/ui/pricingCard"

export default function PricingComponent(){
    const [togglePrice, setTogglePrice] = useState(false)

    
    return (
        <div className="md:mx-32 flex flex-col justify-center items-center text-center space-y-7">
            <div className="space-y-2">
                <h1 className="md:text-4xl text-2xl font-bold">Simple, Transparent Pricing</h1>
                <p className="text-slate-500 text-sm md:text-lg">Choose the perfect plan for your business needs. No hidden fees, no surprises.</p>
            </div>
            {/* <div className="flex items-center">
                <input type="checkbox" checked={togglePrice} onChange={() => setTogglePrice(!togglePrice)} className="h-4 w-4"/>
            </div> */}
            <div className="flex md:flex-row flex-col justify-between gap-4 ">
                <PricingCard isActive={false} title="Starter" desc="For hobbies" price={"0"} features={featuresOneArray}/>
                <PricingCard isActive={true} style="py-10" title="Professional" desc="Perfect for individuals and small businesses getting started with testimonials" price={`${togglePrice ? 588 : 49}`} features={featuresTwoArray}/>
                <PricingCard isActive={false} title="Enterprise" desc="For organizations requiring maximum control and customization." price={`${togglePrice ? 1200 : 100}`} features={featuresThreeArray}/>
            </div>
        </div>
    )
}


const featuresOneArray = [
    "1 space",
    "1 video testimonial",
    "10 text testimonial",
    "Public testimonial page",
    "Testimonial widget with our logo"
]

const featuresTwoArray = [
    "4 space",
    "Unlimited text testimonial",
    "5 video testimonial",
    "Public Testimonial Page",
    "Testimonial widget without our logo",
    "API access"
]

const featuresThreeArray = [
    "unlimited spaces",
    "Unlimited text testimonial",
    "Unlimited video testimonial",
    "Testimonial widget without our logo",
    "AI analysics"
]