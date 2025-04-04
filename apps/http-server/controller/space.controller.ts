import { prisma } from "@repo/db";
import { spaceObject } from "common-config/types";
import type { Request, Response } from "express";

export const createSpace = async (req : Request, res : Response) => {
    const adminId = req.adminId

    if(!adminId){
        res.status(404).json({
            msg : "no admin id provide"
        })
        return
    }
    const parsedObject = spaceObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod parsed error : ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const { name , displayName } = parsedObject.data
    try { 
        const space = await prisma.spaces.create({
            data : {
                name,
                displayName,
                adminId
            }
        })

        res.status(200).json({
            msg : `space created successfully`,
            space
        })
    } catch (error) {
        error instanceof Error ?  res.status(500).json({
            msg : `something went wrong while creating space ${error.message}`
        }) : 
        res.status(500).json({
            msg : `something went wrong while creating space`
        })
    }
}


export const getAllSpace = async (req : Request, res : Response) => {
    const adminId  = req.adminId

    try {
        const spaces = await prisma.spaces.findMany({
            where : {
                adminId : adminId
            }
        })

        // if(spaces.length === 0){
        //     res.status(404).json({msg : "No spaces found with the admin Id"})
        //     return
        // }

        res.status(200).json({
            msg : "all spaces retrived successfully",
            spaces
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({
            msg : `something went wrong while fetching all spaces ${error.message} `
        }) : res.status(500).json({
            msg : `something went wrong while fetching all spaces `
        })
    }
} 


export const getSpaceData = async (req : Request, res : Response) => {
    const { spaceId } = req.params
    
    if(!spaceId){
        res.status(404).json({
            msg : "No space id given in req"
        })
        return
    }
    try {
        const spaceData = await prisma.spaces.findUnique({
            where : {
                id : Number(spaceId)
            }
        })

        if(!spaceData){
            res.status(404).json({msg : "no spacedata found with space id"})
            return
        }
        res.status(200).json({
            msg : "space data fetched successfully",
            spaceData
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({
            msg : `something went wrong while fetchin space data ${error.message}`
        }) :
        res.status(500).json({
            msg : `something went wrong while fetchin space data ${error}`
        })   
    }
}


export const updateSpaceData = async (req : Request, res : Response) => {
    const {spaceId, ...rest} = req.body

    if(!spaceId){ 
        res.status(403).json({
            msg : "no space id given"
        })
        return
    }


    const parsedData = spaceObject.safeParse(rest)

    if(!parsedData.success){
        res.status(403).json({
            msg : `zod error ${JSON.stringify(parsedData.error.errors)}`
        })
        return
    }

    const { displayName, name } = parsedData.data
    

    try {
        const updatespace = await prisma.spaces.update({
            where : {
                id : Number(spaceId)
            },
            data : {
                displayName,
                name
            }
        })

        res.status(200).json({
            msg : "space data updated successfully ",
            updatespace
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({
            msg : `something went wrong while updating space data ${error.message}`
        }) : res.status(500).json({
            msg : `something went wrong while updating space data ${error}`
        })
    }
}


export const deleteSpace = async (req : Request, res: Response) => {

    const { spaceId } = req.params

    if(!spaceId){
        res.status(403).json({
            msg : "space id is missing "
        })
        return
    }
    try {
        const deletedSpace = await prisma.spaces.delete({
            where : {
                id : Number(spaceId)
            }
        })

        res.status(201).json({
            msg : "space deleted successfully"
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({
            msg : `error deleting space ${error.message}`
        }) : res.status(500).json({
            msg : "error while deleteing space "
        })
    }
}