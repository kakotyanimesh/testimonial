import { prisma } from "@repo/db";
import bcrypt from "bcryptjs";
import { signinObject, signupobject, spaceObject } from "common-config/types";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken"

export const signup = async (req : Request, res : Response) => {
    const parsedObject = signupobject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod parsed error ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const { username, email, password } = parsedObject.data

    try { 
        const hasedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data : {
                username, 
                password : hasedPassword,
                email
            }
        })

        res.status(200).json({
            msg : "user created successfully",
            username : user.username
        })
    } catch (error) {
        if(error instanceof Error && (error as any).code === "P2002"){
            res.status(403).json({
                msg : `user already exists with username or email ${JSON.stringify(error)}`
            }) 
            return
        }
        
        res.status(500).json({
            msg : `something went wrong with the server ${JSON.stringify(error)}`
        })
    }
}


export const signin = async (req : Request, res : Response) => {
    const parsedObject = signinObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg :  `zod error ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const { username, password } = parsedObject.data
    try {
        const user = await prisma.user.findUnique({
            where : {
                username : username
            },
        })

        if(!user){
            res.status(404).json({
                msg : `user doesnot exits signup !!`
            })
            return
        }

        const verifiedPassword = await bcrypt.compare(password, user?.password)

        if(!verifiedPassword){
            res.status(404).json({
                msg : `password is incorrect try again !!`
            })
            return
        }

        const accessToken = jwt.sign({userId : user.id}, process.env.Access_Token as string, {expiresIn : "2h"})
        const refreshToken = jwt.sign({userId : user.id}, process.env.Refresh_Token as string, {expiresIn : "7d"})

        const options = {
            httpOnly : true,
            secure : process.env.version === "production"
        }

        res.status(200)
        .cookie("Access_token", accessToken, options)
        .cookie("Refresh_token", refreshToken, options)
        .json({
            msg : `signin successfull`,
            username : user.username
        })

        
    } catch (error) {
        res.status(500).json({
            msg : `something went wrong while singin ${JSON.stringify(error)}`
        })
    }
}


export const generateAPIkey = async(req : Request, res : Response) => {
    const adminId = req.adminId

    const {spaceId} = req.params

    if(!adminId || !spaceId){
        res.status(403).json({
            msg : "No userId or adminId provided "
        })
        return
    }
    try {
        const generatedAPIkey = await jwt.sign({userId : adminId, purpose : "APIKYE"}, process.env.APIKEY as string)

        const saveInDB = await prisma.apiKey.create({
            data : {
                key : generatedAPIkey,
                spaceId : Number(spaceId),
                userId : adminId
            }
        })

        res.status(200).json({
            msg : "API key generated successfully",
            saveInDB
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({msg : `Error while api key generation ${JSON.stringify(error.message)}`})
        : res.status(500).json({msg : "Error while api key generation"})
    }
}

export const getAPIKey = async (req : Request, res : Response) => {
    const { spaceId } = req.params

    const adminId = req.adminId

    if(!spaceId || !adminId){
        res.status(403).json({
            msg : `no spaceId or ADMIN Id provided`
        })
        return
    }
    try {
        const apikey = await prisma.apiKey.findUnique({
            where : {
                // the combination is important as we made them @unique with prisma 
                spaceId_userId : {
                    spaceId : Number(spaceId),
                    userId : adminId
                }
            }, select : {
                key : true
            }
        })

        res.status(200).json({
            msg: "Fetched api key successfully",
            apikey
        })
    } catch (error) {
        error instanceof Error ? res.status(500).json({msg : `Error while fetching api key ${JSON.stringify(error.message)}`})
        : res.status(500).json({msg : `Error while fetching api key`})
    }
}