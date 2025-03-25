import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { deleteTestimonial, fetchTestimonialData, getAllTestimonial, submitTestimonial } from "../controller/testimonial.controller";

export const testimonialRouter : Router = Router()


testimonialRouter.post("/submitTestimonial", submitTestimonial)
testimonialRouter.get("/getAlltestimonial/:spaceId", authMiddleware, getAllTestimonial)
testimonialRouter.get("/getOnetestimonial/:spaceId/:testimonialId", authMiddleware, fetchTestimonialData)
testimonialRouter.delete("/deleteTestimonial/:spaceId/:testimonialId", authMiddleware, deleteTestimonial)
