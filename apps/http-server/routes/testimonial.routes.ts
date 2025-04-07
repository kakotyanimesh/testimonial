import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { creteTestimonialForm, customerTestimonialQuestions, deleteTestimonial, deleteTestimonialForm, fetchTestimonialData, getAllTestimonial, getTestimonialFormData, submitTestimonial } from "../controller/testimonial.controller";

export const testimonialRouter : Router = Router()


testimonialRouter.post("/submitTestimonial", submitTestimonial)
testimonialRouter.post("/createTestimonialForm", authMiddleware, creteTestimonialForm)
testimonialRouter.delete("/deleteTestimonialFrom/:uniqueLink", authMiddleware, deleteTestimonialForm)
testimonialRouter.get("/getTestimonialFormData/:spaceId", authMiddleware, getTestimonialFormData)
testimonialRouter.get("/customerTestimonialQuestions/:uniqueLink", customerTestimonialQuestions)
testimonialRouter.get("/getAlltestimonial/:spaceId", authMiddleware, getAllTestimonial)
testimonialRouter.get("/getOnetestimonial/:spaceId/:testimonialId", authMiddleware, fetchTestimonialData)
testimonialRouter.delete("/deleteTestimonial/:spaceId/:testimonialId", authMiddleware, deleteTestimonial)
