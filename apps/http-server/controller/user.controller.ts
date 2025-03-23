import { prisma } from "@repo/db";
import bcrypt from "bcryptjs";
import { signinObject, signupobject } from "common-config/types";
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
            secure : true
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