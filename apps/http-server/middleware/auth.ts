import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"

export const authMiddleware = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const accessToken = req.cookies.Access_token

        if(!accessToken){
            res.status(401).json({
                msg : "no access token found "
            })
            return
        }

        const verified = await jwt.verify(accessToken, process.env.Access_Token as string) as JwtPayload
        req.adminId = verified.userId 
        next()
        
    } catch (error) {
        res.status(500).json({
            msg : 'error while parsing token'
        })
    }
}