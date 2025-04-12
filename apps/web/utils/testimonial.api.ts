import { api } from "./api"

export const getAllTestimonialCall = async (spaceId : string) => {
    try {
        const res = await api.get(`/testimonial/getAlltestimonial/${spaceId}`)

        return res.data.testimonials
    } catch (error) {
        throw new Error(`Error while fetching testimonial data ${error}`)
    }
}