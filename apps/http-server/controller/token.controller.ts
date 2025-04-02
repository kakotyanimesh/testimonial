import { Router, type Request, type Response } from "express";
import jwt, { JsonWebTokenError, TokenExpiredError, type JwtPayload } from "jsonwebtoken"

export const verifyRouter : Router = Router()

verifyRouter.post("/access_token", async(req : Request, res: Response) => {
    try {
        const accessToken = req.headers.authorization

        if(!accessToken){
            res.status(401).json({
                msg : "no fucking access Token"
            })
            return
        }
    
        
        const decoded = await jwt.verify(accessToken, process.env.Access_Token as string) as JwtPayload
        
        res.status(200).json({
            msg : "Token verified successfully"
        })
    } catch (error) {
        let errorMsg = "Token verfication failed"
        if(error instanceof TokenExpiredError){
            errorMsg = "Token has expired"
        } else if(error instanceof JsonWebTokenError){
            errorMsg = "Invalid token"
        }

        res.status(401).json({
            msg : errorMsg
        })
    }
}) 