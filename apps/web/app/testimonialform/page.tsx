"use client"

import { Suspense } from "react"
import TestimonailFormComponent from "../components/testimonialformcomponent"

export default function TestimonailForm () {
    return(
        <Suspense fallback={<div>Loading form ....</div>}>
            <TestimonailFormComponent/>
        </Suspense>
    )
}