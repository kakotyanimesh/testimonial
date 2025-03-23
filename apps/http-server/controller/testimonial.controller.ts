import { prisma } from "@repo/db";
import { testimonialObject } from "common-config/types";
import type { Request, Response } from "express";

export const createTestimonil = async (req : Request, res : Response) => {
    const spaceId = req.body.spaceId
    const parsedObject = testimonialObject.safeParse(req.body)

    if(!spaceId){
        res.status(403).json({
            msg : "no space id provided "
        })
        return
    }

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const { customeremail, customername, customerimage, review,videoUrl, stars, customerCompany} = parsedObject.data
    try {

            await prisma.testimonialInformation.create({
            data : {
                customeremail,
                customername,
                customerimage,
                review, 
                videoUrl,
                stars,
                customerCompany,
                spaceId
            }
        })

        res.status(200).json({
            msg : "review added"
        })
        
    } catch (error) {
        error instanceof Error ? res.status(500).json({
            msg : `Error while writing testimonial ${error.message}`
        }) : res.status(500).json({
            msg : 'Error while writing testimonial'
        })
    }
}


export const getAllTestimonial = async (req : Request, res : Response) => {
    const spaceId = req.params.spaceId

    if(!spaceId){
        res.status(404).json({
            msg : "no space id provided !!"
        })
        return
    }
    try {
        const testimonials = await prisma.testimonialInformation.findMany({
            where : {
                spaceId : Number(spaceId),
            }, 
            take : 10
        })

        if(!testimonials){
            res.status(404).json({
                msg : "no testimonial found "
            })
            return
        }

        res.status(200).json({
            msg : "All testimonial fetched successfully",
            testimonials
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({msg : `error while fetching all testimonial ${JSON.stringify(error.message)}`})
        : res.status(500).json({msg : `Error while fetching testimonial data`})
    }
}


export const fetchTestimonialData = async (req : Request, res :Response) => {
    const {testimonialId, spaceId } = req.params

    if(!testimonialId || !spaceId){
        res.status(403).json({
            msg : "No testimonial id provided"
        })
        return
    }
    
    try {
        const testimonialData = await prisma.testimonialInformation.findFirst({
            where : {
                id : Number(testimonialId),
                spaceId : Number(spaceId)
            }
        })

        if(!testimonialData){
            res.status(403).json({
                msg : "No testimonial data found"
            })
            return
        }

        res.status(200).json({
            msg : "Testimonial data fetched successfully",
            testimonialData
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({msg : `Error while fetching testimonial data ${JSON.stringify(error.message)}`})
        : res.status(500).json({msg : "Error while fetching Testimonial data "})
    }
}




export const deleteTestimonial = async (req : Request, res : Response) => {
    const {testimonialId, spaceId} = req.params

    if(!testimonialId){
        res.status(403).json({
            msg : "no testimonial id send"
        })
        return
    }

    try {
        await prisma.testimonialInformation.delete({
            where : {
                id : Number(testimonialId),
                spaceId : Number(spaceId)
            }
        })
        res.status(200).json({
            msg : "testimonila deleted successfully "
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({msg : `Error at testimonial delete ${error.message}`})
        : res.status(500).json({msg : `error at testimonial delete`})
    }
}