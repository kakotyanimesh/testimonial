"use client"
import CtaModal from "@repo/ui/cta";

export default function HomeCta(){
    return (
        <div className="">
            <CtaModal title="Ready to Showcase Your Customer Love?" desc="Join thousands of businesses using CustomerCherish to collect and display authentic testimonials." onclickOne={() => alert("Adasd")} onclickTwo={() => alert("adsda")} buttonOne="Start Free Trial" buttonTwo="View Pricing"/>
        </div>
    )
}