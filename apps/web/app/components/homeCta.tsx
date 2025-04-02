"use client"
import CtaModal from "@repo/ui/cta";
import { useRouter } from "next/navigation";;
export default function HomeCta(){
    const router = useRouter()
    return (
        <div className="">
            <CtaModal title="Ready to Showcase Your Customer Love?" desc="Join thousands of businesses using CustomerCherish to collect and display authentic testimonials." onclickOne={() => router.push("/signup")} onclickTwo={() => router.push("/signup")} buttonOne="Start Free Trial" buttonTwo="View Pricing"/>
        </div>
    )
}