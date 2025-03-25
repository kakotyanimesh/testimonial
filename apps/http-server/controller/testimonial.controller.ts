import { prisma } from "@repo/db";
import { testimonialObject } from "common-config/types";
import type { Request, Response } from "express";
import { multerUpload } from "../middleware/cloudinary";
import { v2 as cloudinary } from "cloudinary";

export const submitTestimonial = async (req : Request, res : Response) => {


    const uploadFile = () => {
        return new Promise<void>((resolve, reject) => {
            multerUpload(req, res, (error) => {
                if(error){
                    return reject(error)
                }
                resolve()
            })
        })
    }

    try {
        await uploadFile()

        const files = req.files as  { [fileName : string] : Express.Multer.File[]}

        const userImage = files.customerimage ? files.customerimage[0]?.path : null
        const userVidoUrl = files.videoFile ? files.videoFile[0]?.path : null


        // const testimonialData = {
        //     ...req.body,
        //     userImage, 
        //     userVidoUrl
        // }

        const parsedObject = testimonialObject.safeParse(req.body)

        if(!parsedObject.success){
            const fileToDelete = [userVidoUrl, userVidoUrl].filter(file => file)

            for (const file of fileToDelete) {
                await cloudinary.uploader.destroy(file as string)
            }

            res.status(400).json({
                msg : `Validation Error ${JSON.stringify(parsedObject.error.errors)}`
            })
            return
        }


        const { customeremail, customername, review, stars, customerCompany, spaceId } = parsedObject.data;

        const space = await prisma.spaces.findUnique({
            where : { id : Number(spaceId)},
            select : {adminId : true}
        })

        if(!space){
            res.status(403).json({
                msg : "No space with the spaceId Found "
            })
            return
        }
        const newTestimonial = await prisma.testimonialInformation.create({
            data: {
                customername,
                customeremail,
                review,
                stars : Number(stars),
                customerimage : userImage,
                videoUrl : userVidoUrl,
                spaceId : Number(spaceId), 
                customerCompany,
                adminId : space.adminId
            }
        })

        res.status(201).json({
            msg: "Testimonial submitted successfully",
            testimonial: newTestimonial
        });


    } catch (error) {
        console.error("Testimonial submission error:", error);

        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        const filesToDelete = [
            files?.userImage?.[0]?.path,
            files?.videoFile?.[0]?.path
        ].filter(file => file);
        
        for (const file of filesToDelete) {
            await cloudinary.uploader.destroy(file as string);
        }
        

        error instanceof Error ? res.status(500).json({msg : `Error while uploadinfg data ${error.message}`}) : res.status(500).json({msg : "Error while submitting testimonial data"})
    }
}


export const getAllTestimonial = async (req : Request, res : Response) => {
    const {spaceId } = req.params

    if(!spaceId){
        res.status(404).json({
            msg : "no space id provided !!"
        })
        return
    }

    const adminId = req.adminId

    if(!adminId){
        res.status(403).json({
            msg : "Unauthorized user !!"
        })
        return
    }
    try {
        const testimonials = await prisma.testimonialInformation.findMany({
            where : {
                spaceId : Number(spaceId),
                adminId : adminId
            }, 
            take : 10
        })

        if(!testimonials || testimonials.length === 0){
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

    const adminId = req.adminId

    if(!adminId){
        res.status(403).json({
            msg : "Unauthorized user !!"
        })
        return
    }
    
    try {
        const testimonialData = await prisma.testimonialInformation.findFirst({
            where : {
                id : Number(testimonialId),
                spaceId : Number(spaceId),
                adminId : adminId
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

    if(!testimonialId || !spaceId){
        res.status(403).json({
            msg : "no testimonial/space/admin id send"
        })
        return
    }


    const adminId = req.adminId

    if(!adminId){
        res.status(403).json({
            msg : "Unauthorized user !!"
        })
        return
    }

    try {
        await prisma.testimonialInformation.delete({
            where : {
                id : Number(testimonialId),
                spaceId : Number(spaceId),
                adminId : adminId
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