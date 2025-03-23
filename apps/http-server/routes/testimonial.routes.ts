import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createTestimonil, deleteTestimonial, fetchTestimonialData, getAllTestimonial } from "../controller/testimonial.controller";

export const testimonialRouter : Router = Router()


testimonialRouter.post("/createTestimonial", createTestimonil)
testimonialRouter.get("/getAlltestimonial/:spaceId", authMiddleware, getAllTestimonial)
testimonialRouter.get("/getOnetestimonial/:spaceId/:testimonialId", authMiddleware, fetchTestimonialData)
testimonialRouter.delete("/deleteTestimonial/:spaceId/:testimonialId", authMiddleware, deleteTestimonial)
